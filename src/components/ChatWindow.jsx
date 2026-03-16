import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

const SUGGESTIONS = [
  { icon: '💰', text: 'Total fee for MCA?' },
  { icon: '💰', text: 'Fee structure for CSE?' },
  { icon: '📚', text: 'MCA syllabus & subjects?' },
  { icon: '📅', text: 'Academic calendar 2025-26?' },
  { icon: '🏢', text: 'Top placement companies?' },
  { icon: '🎓', text: 'Scholarships available?' },
  { icon: '📄', text: 'CST syllabus PDF?' },
  { icon: '📍', text: 'How to reach JISCE?' },
];

export default function ChatWindow({ messages, isLoading, onSuggestion }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <div className="welcome">

          {/* Big animated JIS logo in center */}
          <div className="welcome-logo-wrap">
            <div className="welcome-logo-ring welcome-logo-ring-1" />
            <div className="welcome-logo-ring welcome-logo-ring-2" />
            <div className="welcome-logo-ring welcome-logo-ring-3" />
            <div className="welcome-logo-glow" />
            <img
              src="/jis-logo.png"
              alt="JIS College of Engineering"
              className="welcome-logo-img"
            />
          </div>

          <h2>Welcome to JISCE Assistant</h2>
          <p className="welcome-tagline">
            Your AI-powered guide for JIS College of Engineering, Kalyani
          </p>

          {/* Quick stats */}
          <div className="welcome-stats">
            <div className="stat-pill"><span>📚</span> 91,497 Books</div>
            <div className="stat-pill"><span>🎯</span> 13 Scholarships</div>
            <div className="stat-pill"><span>🏛️</span> 14+ Programs</div>
          </div>

          <p className="suggestions-label">Quick Questions</p>

          <div className="suggestions">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="chip" onClick={() => onSuggestion(s.text)}>
                {s.icon} {s.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}

      {isLoading && (
        <div className="message-row bot-row">
          <div className="avatar bot-avatar">
            <img src="/jis-logo.png" alt="AI" className="avatar-logo" />
          </div>
          <div className="bubble bot-bubble typing">
            <span /><span /><span />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
