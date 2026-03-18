// ── Groq API Service ──────────────────────────────────────────
// ✅ Uses llama-3.3-70b-versatile (higher rate limits)
// ✅ Auto-retries silently on 429 rate limit errors
// ✅ Trims old history to reduce token usage

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// ✅ CORRECT MODEL — much higher TPM than llama-3.1-8b-instant
const GROQ_MODEL = "llama-3.3-70b-versatile";

// Keep response concise to stay within free tier limits
const MAX_TOKENS = 800;

// Only send last 6 messages to reduce token usage by ~70%
const MAX_HISTORY = 6;

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export async function callGroq(messages, systemPrompt) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey || apiKey === "your_groq_api_key_here") {
    throw new Error("api key not set");
  }

  // Trim to last N messages to save tokens
  const trimmed = messages.length > MAX_HISTORY
    ? messages.slice(messages.length - MAX_HISTORY)
    : messages;

  const payload = {
    model: GROQ_MODEL,
    max_tokens: MAX_TOKENS,
    temperature: 0.3,
    top_p: 0.9,
    messages: [
      { role: "system", content: systemPrompt },
      ...trimmed.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    ],
  };

  // Retry up to 3 times on rate limit (429)
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    // Rate limit → extract wait time and retry silently
    if (response.status === 429) {
      if (attempt === 3) {
        throw new Error("rate limit reached after retries");
      }
      const data = await response.json().catch(() => ({}));
      const msg = data?.error?.message || "";
      const seconds = msg.match(/try again in ([\d.]+)s/i);
      const waitMs = seconds ? Math.ceil(parseFloat(seconds[1]) + 1) * 1000 : attempt * 12000;
      await wait(waitMs);
      continue;
    }

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data?.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content ||
      "Sorry, I could not get a response. Please try again."
    );
  }

  throw new Error("rate limit reached after retries");
}
