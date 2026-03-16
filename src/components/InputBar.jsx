import React, { useState } from 'react';

export default function InputBar({ onSend, isLoading, isListening, onVoiceStart, onVoiceStop }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  const handleChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  return (
    <div className="input-bar">
      <textarea
        className="input-field"
        placeholder={isListening ? '🎙️ Listening… speak now' : 'Ask anything about JISCE…'}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKey}
        rows={1}
        disabled={isLoading || isListening}
      />
      <div className="input-actions">
        {/* Voice INPUT only — no voice output */}
        <button
          className={`action-btn voice-btn ${isListening ? 'listening' : ''}`}
          onClick={isListening ? onVoiceStop : onVoiceStart}
          title={isListening ? 'Stop listening' : 'Voice input'}
          disabled={isLoading}
        >
          {isListening ? '⏹' : '🎙️'}
        </button>

        <button
          className="action-btn send-btn"
          onClick={handleSend}
          disabled={isLoading || !input.trim() || isListening}
          title="Send"
        >
          {isLoading ? <span className="spinner" /> : '➤'}
        </button>
      </div>
    </div>
  );
}
