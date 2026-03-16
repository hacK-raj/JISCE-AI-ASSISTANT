import React from 'react';

export default function Header({ darkMode, toggleDark }) {
  return (
    <header className="header">
      <div className="header-left">

        {/* Real JIS Logo with animated ring */}
        <div className="header-logo-wrap">
          <div className="header-logo-ring" />
          <div className="header-logo-ring header-logo-ring-2" />
          <img
            src="/jis-logo.png"
            alt="JIS College of Engineering"
            className="header-logo-img"
          />
        </div>

        <div className="header-text">
          <h1>JISCE Assistant</h1>
          <p>JIS College of Engineering · AI Helpdesk</p>
        </div>
      </div>

      <div className="header-right">
        <div className="live-badge">
          <span className="live-dot" />
          Online
        </div>
        <button className="theme-toggle" onClick={toggleDark} title="Toggle dark/light mode">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
