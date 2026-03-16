// Groq API — FREE, fast. Get key at https://console.groq.com
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.1-8b-instant";

export async function callGroq(messages, systemPrompt) {
  const key = import.meta.env.VITE_GROQ_API_KEY;
  if (!key) throw new Error("Missing VITE_GROQ_API_KEY in .env file. Get a free key at https://console.groq.com");

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
    body: JSON.stringify({
      model: MODEL, max_tokens: 1024, temperature: 0.2, top_p: 0.85,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }))
      ]
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Groq API error ${res.status}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "Sorry, no response received. Please try again.";
}
