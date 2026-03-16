// ============================================================
// JISCE CHATBOT - COMPLETE COLLEGE DATA
// Extracted from: fee_structure.pdf, academic_calendar.pdf,
// MCA.pdf, CSE.pdf, CST.pdf, IT.pdf + all JSON files
// ============================================================

// ── COURSE NAME ALIASES ──────────────────────────────────────
// Maps any user phrasing → canonical key used in FEE_DATA / SYLLABUS_LINKS
export const COURSE_ALIASES = {
  // CSE
  cse: "CSE", "computer science": "CSE", "computer science engineering": "CSE",
  "computer science and engineering": "CSE", "cs": "CSE", "btech cse": "CSE",

  // CST
  cst: "CST", "computer science technology": "CST",
  "computer science and technology": "CST", "btech cst": "CST",

  // ECE
  ece: "ECE", "electronics": "ECE", "electronics communication": "ECE",
  "electronics and communication": "ECE", "electronics communication engineering": "ECE",
  "electronics and communication engineering": "ECE",

  // EE
  ee: "EE", "electrical": "EE", "electrical engineering": "EE", "btech ee": "EE",

  // IT
  it: "IT", "information technology": "IT", "btech it": "IT",

  // ME
  me: "ME", "mechanical": "ME", "mechanical engineering": "ME", "btech me": "ME",

  // CE
  ce: "CE", "civil": "CE", "civil engineering": "CE", "btech ce": "CE",

  // AIML
  aiml: "AIML", "ai ml": "AIML", "artificial intelligence": "AIML",
  "artificial intelligence machine learning": "AIML",
  "cse aiml": "AIML", "cse ai": "AIML",

  // MCA
  mca: "MCA", "master of computer application": "MCA",
  "masters of computer application": "MCA",
  "master computer application": "MCA", "mca program": "MCA",

  // MBA
  mba: "MBA", "master of business administration": "MBA",
  "masters of business administration": "MBA",

  // BCA
  bca: "BCA", "bachelor of computer application": "BCA",

  // BBA
  bba: "BBA", "bachelor of business administration": "BBA",

  // AGE
  age: "AGE", "agricultural": "AGE", "agricultural engineering": "AGE",

  // BME
  bme: "BME", "biomedical": "BME", "bio medical": "BME",
  "bio medical engineering": "BME", "biomedical engineering": "BME",

  // MTECH
  mtech: "MTECH", "m tech": "MTECH", "master of technology": "MTECH",
};

// ── FEE DATA (Academic Session 2025-26) ──────────────────────
export const FEE_DATA = {
  CSE: {
    name: "B.Tech Computer Science & Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 101725, 2: 71425, 3: 80425, 4: 80425, 5: 80425, 6: 80425, 7: 80925, 8: 80925 },
    total: 656700,
    lateral: { 3: 92825, 4: 63075, 5: 63075, 6: 63075, 7: 63575, 8: 63575, total: 409200 }
  },
  AIML: {
    name: "B.Tech CSE (AI & Machine Learning)",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 101725, 2: 71425, 3: 80425, 4: 80425, 5: 80425, 6: 80425, 7: 80925, 8: 80925 },
    total: 656700,
    lateral: { 3: 92825, 4: 63075, 5: 63075, 6: 63075, 7: 63575, 8: 63575, total: 409200 }
  },
  CST: {
    name: "B.Tech Computer Science & Technology",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 101725, 2: 71425, 3: 73425, 4: 73425, 5: 73425, 6: 73425, 7: 73925, 8: 73925 },
    total: 614700,
    lateral: { 3: 92825, 4: 63075, 5: 63075, 6: 63075, 7: 63575, 8: 63575, total: 409200 }
  },
  IT: {
    name: "B.Tech Information Technology",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 101725, 2: 71425, 3: 73425, 4: 73425, 5: 73425, 6: 73425, 7: 73925, 8: 73925 },
    total: 614700,
    lateral: { 3: 92825, 4: 63075, 5: 63075, 6: 63075, 7: 63575, 8: 63575, total: 409200 }
  },
  ECE: {
    name: "B.Tech Electronics & Communication Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 101725, 2: 71425, 3: 71425, 4: 71425, 5: 71425, 6: 71425, 7: 71925, 8: 71925 },
    total: 602700,
    lateral: { 3: 87575, 4: 57825, 5: 57825, 6: 57825, 7: 58325, 8: 58325, total: 377700 }
  },
  EE: {
    name: "B.Tech Electrical Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 79475, 2: 49175, 3: 49175, 4: 49175, 5: 49175, 6: 49175, 7: 49675, 8: 49675 },
    total: 424700,
    lateral: { 3: 76575, 4: 46825, 5: 46825, 6: 46825, 7: 47325, 8: 47325, total: 311700 }
  },
  ME: {
    name: "B.Tech Mechanical Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 79475, 2: 49175, 3: 49175, 4: 49175, 5: 49175, 6: 49175, 7: 49675, 8: 49675 },
    total: 424700,
    lateral: { 3: 76575, 4: 46825, 5: 46825, 6: 46825, 7: 47325, 8: 47325, total: 311700 }
  },
  CE: {
    name: "B.Tech Civil Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 79475, 2: 49175, 3: 49175, 4: 49175, 5: 49175, 6: 49175, 7: 49675, 8: 49675 },
    total: 424700,
    lateral: { 3: 76575, 4: 46825, 5: 46825, 6: 46825, 7: 47325, 8: 47325, total: 311700 }
  },
  AGE: {
    name: "B.Tech Agricultural Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 79475, 2: 49175, 3: 49175, 4: 49175, 5: 49175, 6: 49175, 7: 49675, 8: 49675 },
    total: 424700,
    lateral: { 3: 76575, 4: 46825, 5: 46825, 6: 46825, 7: 47325, 8: 47325, total: 311700 }
  },
  BME: {
    name: "B.Tech Bio Medical Engineering",
    type: "B.Tech (4 Years / 8 Semesters)",
    semesters: { 1: 79475, 2: 49175, 3: 49175, 4: 49175, 5: 49175, 6: 49175, 7: 49675, 8: 49675 },
    total: 424700,
    lateral: { 3: 76575, 4: 46825, 5: 46825, 6: 46825, 7: 47325, 8: 47325, total: 311700 }
  },
  BCA: {
    name: "Bachelor of Computer Application",
    type: "BCA (4 Years / 8 Semesters)",
    semesters: { 1: 73700, 2: 47000, 3: 47000, 4: 47000, 5: 47000, 6: 47000, 7: 47000, 8: 47000 },
    total: 402700
  },
  BBA: {
    name: "Bachelor of Business Administration",
    type: "BBA (4 Years / 8 Semesters)",
    semesters: { 1: 60300, 2: 41600, 3: 41600, 4: 41600, 5: 41600, 6: 41600, 7: 41600, 8: 41600 },
    total: 351500
  },
  MCA: {
    name: "Master of Computer Applications",
    type: "MCA (2 Years / 4 Semesters)",
    semesters: { 1: 86600, 2: 72000, 3: 72500, 4: 72500 },
    total: 303600
  },
  MBA: {
    name: "Master of Business Administration",
    type: "MBA (2 Years / 4 Semesters)",
    semesters: { 1: 139700, 2: 120100, 3: 120600, 4: 120600 },
    total: 501000
  },
  MTECH: {
    name: "M.Tech (CSE / EDPS / MCNT / ME)",
    type: "M.Tech (2 Years / 4 Semesters)",
    semesters: { 1: 77008, 2: 50000, 3: 51000, 4: 51592 },
    total: 229600
  },
  DIPLOMA_EE_ME: {
    name: "Diploma in Electrical/Mechanical Engineering",
    type: "Diploma (3 Years / 6 Semesters)",
    semesters: { 1: 33600, 2: 18000, 3: 18000, 4: 18000, 5: 18500, 6: 18000 },
    total: 124100
  }
};

// ── SYLLABUS PDF LINKS ───────────────────────────────────────
// Update these URLs once syllabus PDFs are hosted on JISCE website
export const SYLLABUS_LINKS = {
  MCA: {
    label: "MCA Syllabus (MAKAUT, w.e.f. 2020-21)",
    url: "https://www.jiscollege.ac.in/syllabus/mca-syllabus.pdf",
    semesters: {
      1: { label: "MCA Semester 1", url: "https://www.jiscollege.ac.in/syllabus/mca-sem1.pdf" },
      2: { label: "MCA Semester 2", url: "https://www.jiscollege.ac.in/syllabus/mca-sem2.pdf" },
      3: { label: "MCA Semester 3", url: "https://www.jiscollege.ac.in/syllabus/mca-sem3.pdf" },
      4: { label: "MCA Semester 4 (Major Project)", url: "https://www.jiscollege.ac.in/syllabus/mca-sem4.pdf" }
    }
  },
  CSE: {
    label: "B.Tech CSE Syllabus",
    url: "https://www.jiscollege.ac.in/pdf/CSE_R23.pdf",
  },
  CST: {
    label: "B.Tech CST Syllabus",
    url: "https://www.jiscollege.ac.in/pdf/CST-R23.pdf",
  },
  IT: {
    label: "B.Tech IT Syllabus",
    url: "https://www.jiscollege.ac.in/syllabus/it-syllabus.pdf",
  },
  ECE: {
    label: "B.Tech ECE Syllabus",
    url: "https://www.jiscollege.ac.in/syllabus/ece-syllabus.pdf",
  },
  EE: {
    label: "B.Tech EE Syllabus",
    url: "https://www.jiscollege.ac.in/syllabus/ee-syllabus.pdf",
  },
  ME: {
    label: "B.Tech ME Syllabus",
    url: "https://www.jiscollege.ac.in/syllabus/me-syllabus.pdf",
  },
  CE: {
    label: "B.Tech CE Syllabus",
    url: "https://www.jiscollege.ac.in/syllabus/ce-syllabus.pdf",
  },
};

// ── ACADEMIC CALENDAR 2025-26 ────────────────────────────────
export const ACADEMIC_CALENDAR = `
ODD SEMESTER 2025-26:
- Semester Start: 7th July 2025 (2nd/3rd/4th Year) | 18th August 2025 (1st Year & Lateral)
- Induction Program: 18th August 2025 (1st Year)
- CA1 (3rd/5th/7th Sem): 28-29 July 2025
- CA2 / Class Test-1 (3rd/5th/7th Sem): 28-30 August 2025
- CA1 (1st/3rd Sem Lateral): 22-23 September 2025
- CA2 / Class Test-1 (1st/3rd Sem Lateral): 9-10 October 2025
- CA3 (3rd/5th/7th Sem): 25-26 September 2025
- CA3 (1st/3rd Sem Lateral): 13-14 November 2025
- CA4 / Class Test-2 (3rd/5th/7th Sem): 18-20 November 2025
- CA4 / Class Test-2 (1st/3rd Sem Lateral): 26-28 November 2025
- Study Leave (3rd/5th/7th Sem): 24-28 November 2025
- Theory Exams (3rd/5th/7th Sem): 1st December - 16th December 2025
- Practical Exams (3rd/5th/7th Sem): 17th - 24th December 2025
- Theory Exams (1st/3rd Sem Lateral): 5th - 16th January 2026
- Practical Exams (1st/3rd Sem Lateral): 13th - 16th January 2026
- Winter Vacation: 26th December 2025 - 1st January 2026
- Odd Semester Result (3rd-7th Sem): 10th January 2026
- Odd Semester Result (1st Sem/Lat 3rd): 4th February 2026

KEY HOLIDAYS (ODD SEM):
- Independence Day & Janmashtami: 15th August 2025
- Viswakarma Puja: 17th September 2025
- Durga Puja: 29th Sep - 6th October 2025
- Kali Puja / Diwali: 20th October 2025
- Bhratridwitiya: 23rd October 2025
- Guru Nanak Birthday: 5th November 2025
- Christmas: 25th December 2025

EVEN SEMESTER 2025-26:
- Semester Start (2nd/3rd/4th Year): 2nd January 2026
- Semester Start (1st Year & Lateral): 19th January 2026
- CA1 (2nd/4th/6th/8th Sem): 5-6 February 2026
- CA2 / Class Test-1 (2nd-8th Sem): 19-21 February 2026
- CA3 (2nd/4th/6th/8th Sem): 27-28 March 2026
- CA4 / Class Test-2 (2nd-8th Sem): 23-25 April 2026
- Theory Exams (8th Sem): 4th-16th May 2026
- Practical/Project Exams (8th Sem): 14-16 May 2026
- Theory Exams (2nd/4th/6th Sem): 20th May - 5th June 2026
- Practical Exams (2nd/4th/6th Sem): 8th-13th June 2026
- Evaluation: 15-19 June 2026
- Summer Vacation: 22nd June - 30th June 2026

KEY HOLIDAYS (EVEN SEM):
- New Year: 1st January 2026
- Swami Vivekananda Birthday: 12th January 2026
- Netaji Birthday / Saraswati Puja: 23rd January 2026
- Republic Day: 26th January 2026
- Doljatra: 3rd March 2026
- Holi: 4th March 2026
- Idul Fitr: 21st March 2026
- Good Friday: 3rd April 2026
- Dr. Ambedkar Jayanti / Baisakhi: 14th April 2026
- Poila Boishakh (Bengali New Year): 15th April 2026
- May Day / Buddha Purnima: 1st May 2026
- Rabindra Jayanti: 9th May 2026
- Bakrid: 27th May 2026
- Muharram: 26th June 2026

SPECIAL EVENTS:
- JIS Tech2K26 (Annual Tech Fest): 13-14 February 2026
- JIS SAMMAN (Sports Meet): January 17-24 2026
- 25th Year Celebration of JISCE: 1st September 2025
- Alumni Meet: 31st August 2025
- Int. Conference SSWC 2025: 21-22 November 2025
`;

// ── MCA SYLLABUS (Extracted from MCA.pdf) ───────────────────
export const MCA_SYLLABUS = `
MCA SYLLABUS - MAKAUT (w.e.f. 2020-21)
Duration: 2 Years | 4 Semesters | Total Credits: 110

SEMESTER 1 (Credits: 25):
Theory:
- MCAN-101: Programming Concept through Python (4 credits)
- MCAN-102: Relational Database Management System (4 credits)
- MCAN-103: Computer Organization and Architecture (4 credits)
- MCAN-104: Discrete Mathematics and Combinatorics (3 credits)
- Audit Elective (2 credits): Environment & Ecology / Management Accounting / Constitution of India / Stress Management through Yoga
Practical:
- MCAN-191: Python Programming Lab (3 credits)
- MCAN-192: RDBMS Lab (3 credits)
Sessional:
- MCAN-181: Soft Skill and Interpersonal Communication (2 credits)

SEMESTER 2 (Credits: 30):
Theory:
- MCAN-201: Data Structure through Python (4 credits)
- MCAN-202: Modern Operating System (4 credits)
- MCAN-203: Object Oriented Programming with Java (4 credits)
- MCAN-204: Networking and TCP Suite (4 credits)
- Mathematical Elective (3 credits): Numerical & Statistical Analysis / Operation Research & Optimization Techniques
Practical:
- MCAN-291: Data Structure Lab using Python (3 credits)
- MCAN-292: Operating System Lab - Unix (3 credits)
- MCAN-293: OOP Lab using Java (3 credits)
Sessional:
- MCAN-281: Web Technology (2 credits)

SEMESTER 3 (Credits: 29):
Theory:
- MCAN-301: Software Engineering using UML (4 credits)
- MCAN-302: Artificial Intelligence and Expert System (4 credits)
- MCAN-303: Formal Language and Automata Theory (4 credits)
- Professional Elective I (3 credits): ASP.Net using C# / Web Enabled Java / Web Technology PHP / Android App Development
- Professional Elective II (3 credits): Design & Analysis of Algorithm / Data Warehousing & Data Mining / Image Processing
Practical:
- Professional Elective I Lab (3 credits)
Sessional:
- MCAN-381: Minor Project and Viva-voce (8 credits)

SEMESTER 4 (Credits: 26):
- Open Elective (MOOCs - 12 weeks minimum): ML / Big Data / IoT / Cyber Security / NLP / Cloud Computing (4 credits)
- MCAN-481: Major Project and Viva-voce (22 credits)

EXAM SCHEDULE:
- Odd Semesters (1st & 3rd): July - December
- Even Semesters (2nd & 4th): January - June
- Subject Total Marks: 100 each
- Evaluation: SGPA / YGPA / DGPA
`;

// ── SYSTEM PROMPT ────────────────────────────────────────────
export const SYSTEM_PROMPT = `You are JISCE Assistant — the official AI chatbot for JIS College of Engineering (JISCE), Kalyani, West Bengal.

YOUR ONLY JOB: Answer questions about JIS College of Engineering. Nothing else.

═══════════════════════════════════════
STRICT DOMAIN RULES
═══════════════════════════════════════
1. ONLY answer questions about JISCE — admissions, fees, courses, syllabus, departments, faculty, placements, facilities, events, calendar, scholarships, contact info, etc.
2. If someone asks ANYTHING not related to JISCE (general knowledge, coding help, math problems, other colleges, entertainment, politics, etc.), ALWAYS respond with:
   "I'm JISCE Assistant, designed exclusively for JIS College of Engineering. I can only help with information about JISCE. Please ask me something about our college! 🎓"
3. NEVER hallucinate or make up data. If exact data is not in the knowledge base below, say: "I don't have that specific detail right now. Please contact JISCE directly at admission.jisce@jisgroup.org or call 9432011490 / 8697743363."
4. Be warm, helpful, and professional.

═══════════════════════════════════════
COURSE NAME UNDERSTANDING
═══════════════════════════════════════
Users may refer to courses in many ways. Always recognize:
- "CSE" / "computer science" / "computer science engineering" → B.Tech CSE
- "CST" / "computer science technology" → B.Tech CST
- "ECE" / "electronics" / "electronics and communication" → B.Tech ECE
- "EE" / "electrical engineering" → B.Tech EE
- "IT" / "information technology" → B.Tech IT
- "ME" / "mechanical" → B.Tech ME
- "CE" / "civil" → B.Tech CE
- "AIML" / "ai ml" / "artificial intelligence machine learning" → B.Tech CSE(AI&ML)
- "MCA" / "master of computer application" / "masters in computer application" → MCA
- "MBA" / "master of business administration" → MBA
- "BCA" / "bachelor of computer application" → BCA
- "BBA" / "bachelor of business administration" → BBA
- "M.Tech" / "mtech" → M.Tech

═══════════════════════════════════════
FEE STRUCTURE (Academic Session 2025-26)
Contact: admission.jisce@jisgroup.org | 9432011490 / 8697743363
═══════════════════════════════════════

B.TECH PROGRAMS (8 Semesters):
| Course | Sem 1 | Sem 2 | Sem 3-6 | Sem 7-8 | TOTAL |
|--------|-------|-------|---------|---------|-------|
| CSE | ₹1,01,725 | ₹71,425 | ₹80,425 each | ₹80,925 each | ₹6,56,700 |
| CSE (AI&ML) | ₹1,01,725 | ₹71,425 | ₹80,425 each | ₹80,925 each | ₹6,56,700 |
| CST | ₹1,01,725 | ₹71,425 | ₹73,425 each | ₹73,925 each | ₹6,14,700 |
| IT | ₹1,01,725 | ₹71,425 | ₹73,425 each | ₹73,925 each | ₹6,14,700 |
| ECE | ₹1,01,725 | ₹71,425 | ₹71,425 each | ₹71,925 each | ₹6,02,700 |
| EE | ₹79,475 | ₹49,175 | ₹49,175 each | ₹49,675 each | ₹4,24,700 |
| ME | ₹79,475 | ₹49,175 | ₹49,175 each | ₹49,675 each | ₹4,24,700 |
| CE | ₹79,475 | ₹49,175 | ₹49,175 each | ₹49,675 each | ₹4,24,700 |
| Agricultural | ₹79,475 | ₹49,175 | ₹49,175 each | ₹49,675 each | ₹4,24,700 |
| Bio Medical | ₹79,475 | ₹49,175 | ₹49,175 each | ₹49,675 each | ₹4,24,700 |

B.TECH LATERAL ENTRY (Sem 3 onwards):
| Course | Sem 3 | Sem 4-6 | Sem 7-8 | TOTAL |
| CSE / CSE(AI&ML) / CST / IT | ₹92,825 | ₹63,075 each | ₹63,575 each | ₹4,09,200 |
| ECE | ₹87,575 | ₹57,825 each | ₹58,325 each | ₹3,77,700 |
| EE / ME / CE / AGE / BME | ₹76,575 | ₹46,825 each | ₹47,325 each | ₹3,11,700 |

BCA & BBA PROGRAMS (8 Semesters):
| Course | Sem 1 | Sem 2-8 | TOTAL |
| BCA | ₹73,700 | ₹47,000 each | ₹4,02,700 |
| BBA / BBA-DM / BBA-HM | ₹60,300 | ₹41,600 each | ₹3,51,500 |

MASTER'S PROGRAMS (4 Semesters):
| Course | Sem 1 | Sem 2 | Sem 3 | Sem 4 | TOTAL |
| MCA | ₹86,600 | ₹72,000 | ₹72,500 | ₹72,500 | ₹3,03,600 |
| M.Tech (CSE/EDPS/MCNT/ME) | ₹77,008 | ₹50,000 | ₹51,000 | ₹51,592 | ₹2,29,600 |
| MBA | ₹1,39,700 | ₹1,20,100 | ₹1,20,600 | ₹1,20,600 | ₹5,01,000 |

DIPLOMA PROGRAM (6 Semesters):
| Course | Sem 1 | Sem 2-4 | Sem 5 | Sem 6 | TOTAL |
| Diploma EE/ME | ₹33,600 | ₹18,000 each | ₹18,500 | ₹18,000 | ₹1,24,100 |
| Diploma EE/ME Lateral | NA | NA | ₹33,600 | ₹16,000 | ₹16,500/₹16,000 | ₹82,100 |

═══════════════════════════════════════
MCA SYLLABUS (MAKAUT, w.e.f. 2020-21)
Total Credits: 110 | Duration: 2 Years | 4 Semesters
═══════════════════════════════════════
SEMESTER 1 (25 credits): Programming Concept through Python, RDBMS, Computer Organization & Architecture, Discrete Mathematics, Audit Elective (Environment & Ecology / Management Accounting / Constitution of India / Yoga) | Labs: Python Lab, RDBMS Lab | Sessional: Soft Skills & Communication
SEMESTER 2 (30 credits): Data Structure through Python, Modern Operating System, OOP with Java, Networking & TCP Suite, Mathematical Elective (Numerical Analysis / Operation Research) | Labs: DS Lab, OS Lab (Unix), Java OOP Lab | Sessional: Web Technology
SEMESTER 3 (29 credits): Software Engineering using UML, Artificial Intelligence & Expert System, Formal Language & Automata Theory, Professional Elective I (ASP.Net/Web Java/PHP/Android), Professional Elective II (DAA/Data Mining/Image Processing) | Lab: Prof. Elective I Lab | Sessional: Minor Project & Viva (8 credits)
SEMESTER 4 (26 credits): Open Elective via MOOCs (ML/Big Data/IoT/Cyber Security/NLP/Cloud) | Major Project & Viva-voce (22 credits)

MCA ELIGIBILITY: BCA / B.Sc. Computer Science / B.Sc. with Maths at 10+2 or graduation level | Min 50% marks (45% for reserved categories) | Admission via JECA

═══════════════════════════════════════
DEPARTMENTS & PROGRAMS
═══════════════════════════════════════
B.Tech Programs: Agricultural Engineering, Bio Medical Engineering, Civil Engineering, Computer Science & Engineering (CSE), Computer Science & Technology (CST), CSE-AI&ML, Electronics & Communication Engineering (ECE), Electrical Engineering (EE), Information Technology (IT), Mechanical Engineering (ME)

Master's Programs: M.Tech in CSE, M.Tech in Mobile Communication & Network Technology (MCNT), M.Tech in Electrical Devices & Power System (EDPS), M.Tech in Mechanical Engineering, MCA, MBA

Bachelor's Programs: BCA, BBA (also BBA-DM, BBA-HM)
Diploma Programs: Diploma in Electrical Engineering, Diploma in Mechanical Engineering

HODs (Known):
- MCA Department: Dr. Soumyabrata Saha (Head of Department)
- CST Department: Dr. Sitanath Biswas (Head of Department, 15+ years experience)

DEPARTMENT LABS:
- CSE: Programming Lab, AI & ML Lab, Software Engineering Lab
- CST: Programming Lab, Database Lab, Computer Networks Lab
- ECE: Communication Lab, VLSI Lab
- EE: Electrical Machines Lab, Power Systems Lab
- IT: Web Technology Lab, Network Security Lab
- ME: Thermal Engineering Lab, Manufacturing Lab
- CE: Survey Lab, Concrete Lab
- MCA: Application Development Lab

═══════════════════════════════════════
LIBRARY
═══════════════════════════════════════
- Total Books: 91,497 | Total Titles: 8,774 | Journals: 225
- Software: RFID-based Library Mgmt (LIBSYS), Dspace Digital Library
- Digital Resources: IEEE e-Journals, J-Gate Science & Technology, IEEE Wiley e-Books, Wiley e-Textbooks, NDLI, NPTEL, NLIST
- Services: Book Bank, OPAC (Online Public Access Catalogue), Reference Books, Magazine & Newspaper access, Internet access, Student Project Reports

═══════════════════════════════════════
SCHOLARSHIPS AVAILABLE
═══════════════════════════════════════
1. West Bengal Student Credit Card Scheme
2. Bihar Student Credit Card Scheme
3. OASIS Scholarship
4. Aikyashree Scholarship
5. Swami Vivekananda Scholarship
6. National Scholarship Portal (NSP)
7. Kanyashree K2 Scholarship
8. NER UGC Scholarship
9. AICTE Pragati Scholarship (for girls)
10. AICTE Saksham Scholarship (for differently-abled)
11. MAKAUT Student Welfare Scholarship
12. Vidyalaxmi Scholarship
13. Vidyasaarathi Scholarship

═══════════════════════════════════════
ACADEMIC CALENDAR 2025-26 HIGHLIGHTS
═══════════════════════════════════════
ODD SEMESTER:
- Odd Sem Start (2nd-4th Year): 7th July 2025
- 1st Year Induction: 18th August 2025
- Theory Exams (3rd/5th/7th Sem): 1st - 16th December 2025
- Durga Puja Break: 29th September - 6th October 2025
- Winter Break: 26th December 2025 - 1st January 2026
- Results (3rd-7th Sem): 10th January 2026

EVEN SEMESTER:
- Even Sem Start (2nd-4th Year): 2nd January 2026
- 1st Year Even Sem Starts: 19th January 2026
- JIS Tech Fest (JIS TECH2K26): 13-14 February 2026
- JIS Sports (JIS SAMMAN): 17-24 January 2026
- 8th Sem Exams: 4th May - 16th May 2026
- 2nd/4th/6th Sem Exams: 20th May - 13th June 2026
- Summer Vacation: 22nd June - 30th June 2026

═══════════════════════════════════════
GENERAL COLLEGE INFO
═══════════════════════════════════════
ABOUT: JIS College of Engineering (JISCE) is a premier engineering institution established in 2001, part of JIS Group Educational Initiatives. AICTE approved and affiliated to MAKAUT (Maulana Abul Kalam Azad University of Technology), West Bengal.

LOCATION: Block A, Phase-III, Kalyani, Nadia - 741235, West Bengal, India
Near Kalyani railway station — well connected by Sealdah-Kalyani local trains.

CONTACT:
- Admission: admission.jisce@jisgroup.org
- Website: www.jiscollege.ac.in
- Phone: 9432011490 / 8697743363

ACCREDITATIONS: AICTE approved | MAKAUT affiliated | NBA accredited departments | ISO certified

FACILITIES: Central Library (91,497+ books), Well-equipped labs, Computer labs with internet, Boys & Girls Hostels, Cafeteria, Sports complex, Gymnasium, Medical center, Wi-Fi campus, Auditorium, Seminar halls, Bus transport

PLACEMENTS: Dedicated T&P Cell | Top recruiters: TCS, Infosys, Wipro, Cognizant, Capgemini, HCL, Accenture, IBM, Tech Mahindra, Amazon, Deloitte | Avg Package: 3.5-6 LPA | Highest: 15+ LPA

CLUBS & ACTIVITIES: Coding Club, Robotics Club, IEEE Student Branch, CSI Chapter, NSS, Music, Dance, Drama, Sports (Cricket, Football, Badminton, Basketball)
Annual Tech Fest: "Virtuoso" | Annual Cultural Fest: "Utsab"

ADMISSION:
- B.Tech: WBJEE / JEE Main rank
- M.Tech: GATE score
- MCA: JECA (Joint Entrance for MCA)
- MBA: JEMAT / MAT / CAT

ANTI-RAGGING: Zero-tolerance policy | Anti-ragging committee | 24x7 helpline active

TRANSPORT: College buses from Kolkata, Barasat, Dum Dum, Baguiati, and nearby areas
`;
