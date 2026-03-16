import React from 'react';
import ReactMarkdown from 'react-markdown';
function PdfLinkCard({ href, children }) {
  if (href && href.endsWith('.pdf')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="pdf-link-card">
        <span className="pdf-icon">📄</span>
        <span className="pdf-text">{children || 'Download PDF'}</span>
        <span className="pdf-arrow">↗</span>
      </a>
    );
  }
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`message-row ${isUser ? 'user-row' : 'bot-row'}`}>
      {!isUser && <div className="avatar bot-avatar">AI</div>}
      <div className={`bubble ${isUser ? 'user-bubble' : 'bot-bubble'}`}>
        {isUser ? <p>{message.content}</p> : (
          <ReactMarkdown components={{ a: ({ href, children }) => <PdfLinkCard href={href}>{children}</PdfLinkCard> }}>
            {message.content}
          </ReactMarkdown>
        )}
        <span className="timestamp">{message.time}</span>
      </div>
      {isUser && <div className="avatar user-avatar">You</div>}
    </div>
  );
}
