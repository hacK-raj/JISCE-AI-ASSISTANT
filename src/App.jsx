import React, { useState, useCallback, useRef } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import { useVoice } from './hooks/useVoice';
import { SYSTEM_PROMPT, FEE_DATA, SYLLABUS_LINKS } from './data/collegeData';
import { callGroq } from './data/groqService';
import './App.css';

// ─────────────────────────────────────────────────────────────
// COURSE RESOLVER — uses priority-ordered exact matching
// so "cst" never matches "cse", "mca" never matches "mtech", etc.
// ─────────────────────────────────────────────────────────────
const COURSE_PATTERNS = [
  // Most specific first to avoid false matches
  { key: 'AIML',  patterns: ['cse ai ml','cse aiml','cse artificial intelligence','cse-ai','cse ai&ml','ai & ml','ai and ml','aiml','artificial intelligence and machine learning','artificial intelligence & machine learning'] },
  { key: 'MTECH', patterns: ['m.tech','m tech','mtech','master of technology','masters of technology'] },
  { key: 'MBA',   patterns: ['mba','master of business administration','masters of business administration','masters in business administration','master in business administration'] },
  { key: 'MCA',   patterns: ['mca','master of computer application','masters of computer application','master in computer application','masters in computer application','master of computer applications','masters of computer applications'] },
  { key: 'BCA',   patterns: ['bca','bachelor of computer application','bachelor in computer application'] },
  { key: 'BBA',   patterns: ['bba','bachelor of business administration','bachelor in business administration'] },
  { key: 'CST',   patterns: ['cst','computer science and technology','computer science & technology','computer science technology'] },
  { key: 'CSE',   patterns: ['cse','computer science and engineering','computer science & engineering','computer science engineering','b.tech cse','btech cse'] },
  { key: 'ECE',   patterns: ['ece','electronics and communication engineering','electronics & communication engineering','electronics communication engineering','electronics and communication'] },
  { key: 'EE',    patterns: ['ee','electrical engineering','b.tech ee','btech ee'] },
  { key: 'IT',    patterns: ['b.tech it','btech it','information technology'] },
  { key: 'ME',    patterns: ['b.tech me','btech me','mechanical engineering','me'] },
  { key: 'CE',    patterns: ['b.tech ce','btech ce','civil engineering'] },
  { key: 'AGE',   patterns: ['age','agricultural engineering','agriculture engineering'] },
  { key: 'BME',   patterns: ['bme','biomedical engineering','bio medical engineering','bio-medical engineering'] },
  { key: 'DIPLOMA_EE_ME', patterns: ['diploma ee','diploma me','diploma electrical','diploma mechanical'] },
  // IT must come after CST to avoid "it" matching inside words — check as standalone
  { key: 'IT',    patterns: [' it ','(it)'] },
  { key: 'ME',    patterns: [' me ','(me)'] },
  { key: 'CE',    patterns: [' ce ','(ce)'] },
];

function resolveCourse(text) {
  // Normalize: lowercase, collapse spaces, keep alphanumeric + space + & . -
  const normalized = ' ' + text.toLowerCase()
    .replace(/[^a-z0-9& .\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() + ' ';

  for (const { key, patterns } of COURSE_PATTERNS) {
    for (const p of patterns) {
      if (normalized.includes(p)) return key;
    }
  }
  return null;
}

// ─────────────────────────────────────────────────────────────
// QUERY TYPE DETECTOR
// ─────────────────────────────────────────────────────────────
function detectQueryType(text) {
  const t = text.toLowerCase();

  // Specific semester number mentioned?
  const semMatch = t.match(/\b(\d+)(?:st|nd|rd|th)?\s*sem(?:ester)?\b/) ||
                   t.match(/\bsem(?:ester)?\s*(\d+)\b/);
  const semNum = semMatch ? parseInt(semMatch[1]) : null;

  const isFee      = /\bfee|fees|cost|tuition|how much|charges|semester fee|total fee|pay|payment\b/.test(t);
  const isTotal    = /\btotal\b/.test(t) && !semNum;
  const isSyllabus = /\bsyllabus|subjects|curriculum|papers|course content|pdf|download\b/.test(t);
  const isWebsite  = /\bwebsite|site|web|url|link|portal\b/.test(t);
  const isContact  = /\bcontact|phone|number|email|mail|call|helpline|admission\b/.test(t);
  const isLocation = /\blocation|address|where|how to reach|how to come|distance|nearby|railway|train\b/.test(t);

  return { isFee, isTotal, isSyllabus, isWebsite, isContact, isLocation, semNum };
}

// ─────────────────────────────────────────────────────────────
// FEE ANSWER BUILDER — gives EXACTLY what was asked
// ─────────────────────────────────────────────────────────────
function buildFeeAnswer(courseKey, semNum, isTotal, originalText) {
  const fee = FEE_DATA[courseKey];
  if (!fee) return null;

  const fmt = (n) => '₹' + n.toLocaleString('en-IN');

  // ── Asked for ONE specific semester ──────────────────────
  if (semNum) {
    const semFee = fee.semesters[semNum];
    if (!semFee) {
      return `**${fee.name}** does not have a Semester ${semNum}.\n\nThis programme has **${Object.keys(fee.semesters).length} semesters** (${fee.type}).\n\nValid semesters: ${Object.keys(fee.semesters).join(', ')}`;
    }
    return `## 💰 Semester ${semNum} Fee — ${fee.name}\n\n` +
      `The fee for **Semester ${semNum}** is:\n\n` +
      `# ${fmt(semFee)}\n\n` +
      `*(Academic Session 2025-26)*\n\n` +
      `---\n📞 Admissions: **9432011490 / 8697743363**\n📧 admission.jisce@jisgroup.org`;
  }

  // ── Asked for TOTAL only ──────────────────────────────────
  if (isTotal) {
    return `## 💰 Total Fee — ${fee.name}\n\n` +
      `The **total programme fee** for ${fee.type} is:\n\n` +
      `# ${fmt(fee.total)}\n\n` +
      `*(Academic Session 2025-26, all ${Object.keys(fee.semesters).length} semesters combined)*\n\n` +
      `---\n📞 Admissions: **9432011490 / 8697743363**\n📧 admission.jisce@jisgroup.org`;
  }

  // ── Asked for full breakdown ──────────────────────────────
  const semRows = Object.entries(fee.semesters)
    .map(([s, f]) => `| Semester ${s} | ${fmt(f)} |`)
    .join('\n');

  let ans = `## 💰 Fee Structure — ${fee.name}\n\n`;
  ans += `**Programme:** ${fee.type} *(Session 2025-26)*\n\n`;
  ans += `| Semester | Fee |\n|---|---|\n${semRows}\n`;
  ans += `| **TOTAL** | **${fmt(fee.total)}** |\n\n`;

  if (fee.lateral) {
    const latRows = Object.entries(fee.lateral)
      .filter(([k]) => k !== 'total')
      .map(([s, f]) => `| Semester ${s} | ${fmt(f)} |`)
      .join('\n');
    ans += `### Lateral Entry (Sem 3 onwards):\n| Semester | Fee |\n|---|---|\n${latRows}\n| **TOTAL** | **${fmt(fee.lateral.total)}** |\n\n`;
  }

  ans += `---\n📞 **9432011490 / 8697743363** | 📧 admission.jisce@jisgroup.org\n🌐 [www.jiscollege.ac.in](https://www.jiscollege.ac.in)`;
  return ans;
}

// ─────────────────────────────────────────────────────────────
// SYLLABUS ANSWER BUILDER
// ─────────────────────────────────────────────────────────────
function buildSyllabusAnswer(courseKey, semNum) {
  const syl = SYLLABUS_LINKS[courseKey];
  if (!syl) return null;

  if (semNum && syl.semesters?.[semNum]) {
    const s = syl.semesters[semNum];
    return `## 📚 Semester ${semNum} Syllabus — ${courseKey}\n\nHere is the PDF for **${s.label}**:\n\n📄 [${s.label} — Download PDF](${s.url})\n\n_Syllabus as per MAKAUT, West Bengal._`;
  }

  if (syl.semesters) {
    let ans = `## 📚 All Semester Syllabi — ${courseKey}\n\n`;
    for (const [s, info] of Object.entries(syl.semesters)) {
      ans += `📄 [${info.label}](${info.url})\n\n`;
    }
    ans += `_Syllabus as per MAKAUT, West Bengal._`;
    return ans;
  }

  return `## 📚 Syllabus — ${courseKey}\n\n📄 [${syl.label} — Download Full Syllabus PDF](${syl.url})\n\n_Syllabus as per MAKAUT, West Bengal._`;
}

// ─────────────────────────────────────────────────────────────
// STATIC QUICK ANSWERS (no AI needed, no hallucination possible)
// ─────────────────────────────────────────────────────────────
function getStaticAnswer(text) {
  const t = text.toLowerCase();

  if (/\bwebsite|site|web\s*link|url|portal\b/.test(t)) {
    return `## 🌐 Official Website\n\nThe official website of JIS College of Engineering is:\n\n**[www.jiscollege.ac.in](https://www.jiscollege.ac.in)**\n\nFor admissions specifically: [admission.jisce@jisgroup.org](mailto:admission.jisce@jisgroup.org)`;
  }

  if (/\bcontact|phone|number|call|helpline\b/.test(t) && !/syllabus|fee/.test(t)) {
    return `## 📞 Contact Information\n\n**Admission Helpline:**\n- 📱 9432011490\n- 📱 8697743363\n\n**Email:** admission.jisce@jisgroup.org\n\n**College Phone:** +91 33 2582 0570 / 0571\n\n**Address:** Block A, Phase-III, Kalyani, Nadia - 741235, West Bengal\n\n🌐 [www.jiscollege.ac.in](https://www.jiscollege.ac.in)`;
  }

  if (/\blocation|address|where is|how to reach|how to come|nearby|railway\b/.test(t)) {
    return `## 📍 Location & How to Reach\n\n**Address:**\nJIS College of Engineering\nBlock A, Phase-III, Kalyani\nNadia - 741235, West Bengal, India\n\n**By Train:** Kalyani is on the Sealdah–Kalyani local train line. The college is near Kalyani railway station.\n\n**By Bus:** College buses available from Kolkata, Barasat, Dum Dum, Baguiati, and nearby areas.\n\n📞 9432011490 / 8697743363`;
  }

  if (/\bscholarship\b/.test(t)) {
    return `## 🎓 Scholarships Available at JISCE\n\n1. West Bengal Student Credit Card Scheme\n2. Bihar Student Credit Card Scheme\n3. OASIS Scholarship\n4. Aikyashree Scholarship\n5. Swami Vivekananda Scholarship\n6. National Scholarship Portal (NSP)\n7. Kanyashree K2 Scholarship\n8. NER UGC Scholarship\n9. AICTE Pragati Scholarship *(for girls)*\n10. AICTE Saksham Scholarship *(for differently-abled)*\n11. MAKAUT Student Welfare Scholarship\n12. Vidyalaxmi Scholarship\n13. Vidyasaarathi Scholarship\n\n📞 Contact admissions for details: 9432011490`;
  }

  return null;
}

// ─────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const messagesRef = useRef([]);

  const handleVoiceTranscript = useCallback((text) => {
    handleSend(text);
  }, []);

  const { isListening,startListening, stopListening, } =
    useVoice(handleVoiceTranscript);

  const handleSend = async (userText) => {
    if (!userText.trim() || isLoading) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { role: 'user', content: userText, time };
    const updated = [...messagesRef.current, userMsg];
    messagesRef.current = updated;
    setMessages([...updated]);
    setIsLoading(true);

    try {
      const { isFee, isTotal, isSyllabus, semNum } = detectQueryType(userText);
      const courseKey = resolveCourse(userText);

      let botText = null;

      // ── 1. Static answers (website, contact, location, scholarships) ──
      botText = getStaticAnswer(userText);

      // ── 2. Fee answer ─────────────────────────────────────────────────
      if (!botText && isFee && courseKey) {
        botText = buildFeeAnswer(courseKey, semNum, isTotal, userText);
      }

      // ── 3. Syllabus PDF answer ────────────────────────────────────────
      if (!botText && isSyllabus && courseKey) {
        botText = buildSyllabusAnswer(courseKey, semNum);
      }

      // ── 4. Fee asked but no course recognised ─────────────────────────
      if (!botText && isFee && !courseKey) {
        botText = `Please specify which course you'd like the fee for. For example:\n\n> *"What is the total fee for MCA?"*\n> *"1st semester fee of CSE?"*\n> *"Fee structure for ECE?"*\n\nAvailable courses: **CSE, CST, ECE, EE, IT, ME, CE, MCA, MBA, BCA, BBA, M.Tech, Agricultural Engg, Bio Medical Engg**`;
      }

      // ── 5. Groq AI for everything else ───────────────────────────────
      if (!botText) {
        botText = await callGroq(
          updated.map(m => ({ role: m.role, content: m.content })),
          SYSTEM_PROMPT
        );
      }

      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const botMsg = { role: 'assistant', content: botText, time: botTime };
      const final = [...updated, botMsg];
      messagesRef.current = final;
      setMessages([...final]);
      

    } catch (err) {
      const errTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const errMsg = {
        role: 'assistant',
        content: `⚠️ **Connection Error**\n\n${err.message}\n\nPlease check your **VITE_GROQ_API_KEY** in the \`.env\` file.\nGet a free key at [console.groq.com](https://console.groq.com)`,
        time: errTime
      };
      const final = [...updated, errMsg];
      messagesRef.current = final;
      setMessages([...final]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    messagesRef.current = [];
    
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main className="main">
        <ChatWindow messages={messages} isLoading={isLoading} onSuggestion={handleSend} />
        <InputBar
          onSend={handleSend}
          isLoading={isLoading}
          isListening={isListening}
          onVoiceStart={startListening}
          onVoiceStop={stopListening}
          
        />
        {messages.length > 0 && (
          <button className="clear-btn" onClick={handleClear}>🗑️ Clear Chat</button>
        )}
      </main>
    </div>
  );
}
