import { useState, useRef, useCallback } from 'react';
export function useVoice(onTranscript) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice input requires Google Chrome.'); return; }
    const rec = new SR();
    rec.lang = 'en-IN'; rec.interimResults = false; rec.maxAlternatives = 1;
    rec.onstart = () => setIsListening(true);
    rec.onresult = (e) => { setIsListening(false); onTranscript(e.results[0][0].transcript); };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec; rec.start();
  }, [onTranscript]);
  const stopListening = useCallback(() => { recognitionRef.current?.stop(); setIsListening(false); }, []);
  const speak = useCallback((text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[#*`|_~>\[\]()]/g,'').replace(/\n+/g,'. ').substring(0,400);
    const u = new SpeechSynthesisUtterance(clean);
    u.lang='en-IN'; u.rate=0.95; u.pitch=1.05; u.volume=1;
    u.onstart=()=>setIsSpeaking(true); u.onend=()=>setIsSpeaking(false); u.onerror=()=>setIsSpeaking(false);
    window.speechSynthesis.speak(u);
  }, []);
  const stopSpeaking = useCallback(() => { window.speechSynthesis.cancel(); setIsSpeaking(false); }, []);
  return { isListening, isSpeaking, startListening, stopListening, speak, stopSpeaking };
}
