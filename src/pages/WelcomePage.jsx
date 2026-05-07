import React, { useState } from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onNavigate }) => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: 'Kinora',
      tagline: 'Your neighborhood, connected. Discover events, trade items, chat with neighbors, and build community, all in one place.',
      features: [
        {
          id: 'feed',
          title: 'Community Feed',
          description: 'Share updates, ask for favors and connect with neighbours',
          icon: '🌊'
        },
        {
          id: 'events',
          title: 'Events & Clubs',
          description: 'Connect with your neighbours through local events and clubs',
          icon: '🌎'
        },
        {
          id: 'places',
          title: 'Discover places',
          description: 'Find the best spots in your area',
          icon: '🏘️'
        },
        {
          id: 'marketplace',
          title: 'Marketplace',
          description: 'Trade items in your neighbourhood',
          icon: '💚'
        },
        {
          id: 'chat',
          title: 'Chat',
          description: 'Message neighbours directly',
          icon: '☁️'
        },
        {
          id: 'aura',
          title: 'Aura points',
          description: 'Earn rewards for community involvement',
          icon: '⭐'
        }
      ],
      signUp: 'Sign up'
    },
    nl: {
      title: 'Kinora',
      tagline: 'Jouw buurt, verbonden. Ontdek evenementen, ruil items, chat met buren en bouw gemeenschap, allemaal op één plek.',
      features: [
        {
          id: 'feed',
          title: 'Community Feed',
          description: 'Deel updates, vraag om hulp en verbind met buren',
          icon: '🌊'
        },
        {
          id: 'events',
          title: 'Evenementen & Clubs',
          description: 'Verbind met je buren via lokale evenementen en clubs',
          icon: '🌎'
        },
        {
          id: 'places',
          title: 'Ontdek plekken',
          description: 'Vind de beste plekken in je buurt',
          icon: '🏘️'
        },
        {
          id: 'marketplace',
          title: 'Marktplaats',
          description: 'Ruil items in je buurt',
          icon: '💚'
        },
        {
          id: 'chat',
          title: 'Chat',
          description: 'Berichten rechtstreeks naar buren',
          icon: '☁️'
        },
        {
          id: 'aura',
          title: 'Aura punten',
          description: 'Verdien beloningen voor betrokkenheid in de gemeenschap',
          icon: '⭐'
        }
      ],
      signUp: 'Registreer'
    }
  };

  const t = content[language];

  return (
    <div className="welcome-page">
      {/* Language Toggle */}
      <div className="language-toggle">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <span className="lang-separator">/</span>
        <button
          className={`lang-btn ${language === 'nl' ? 'active' : ''}`}
          onClick={() => setLanguage('nl')}
        >
          NL
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="illustration-container">
          <svg className="hero-illustration" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            {/* Background - light blue gradient effect */}
            <defs>
              <radialGradient id="cloudGrad1" cx="35%" cy="40%">
                <stop offset="0%" style={{ stopColor: '#B3E5FC', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#81D4FA', stopOpacity: 1 }} />
              </radialGradient>
              <radialGradient id="cloudGrad2" cx="35%" cy="40%">
                <stop offset="0%" style={{ stopColor: '#81D4FA', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4FC3F7', stopOpacity: 1 }} />
              </radialGradient>
              <filter id="cloudShadow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>

            {/* Large fluffy cloud - left */}
            <g filter="url(#cloudShadow)">
              <circle cx="80" cy="70" r="45" fill="url(#cloudGrad1)" opacity="0.9" />
              <circle cx="50" cy="80" r="35" fill="url(#cloudGrad1)" opacity="0.9" />
              <circle cx="110" cy="85" r="30" fill="url(#cloudGrad1)" opacity="0.9" />
              {/* Eyes */}
              <ellipse cx="65" cy="65" rx="6" ry="10" fill="#1a1a1a" />
              <ellipse cx="85" cy="65" rx="6" ry="10" fill="#1a1a1a" />
            </g>

            {/* Medium cloud - right with star */}
            <g filter="url(#cloudShadow)">
              <circle cx="220" cy="55" r="35" fill="url(#cloudGrad2)" opacity="0.95" />
              <circle cx="190" cy="65" r="28" fill="url(#cloudGrad2)" opacity="0.95" />
              <circle cx="245" cy="70" r="25" fill="url(#cloudGrad2)" opacity="0.95" />
              {/* Eyes */}
              <ellipse cx="210" cy="55" rx="5" ry="8" fill="#1a1a1a" />
              <ellipse cx="225" cy="55" rx="5" ry="8" fill="#1a1a1a" />
              {/* Star */}
              <g transform="translate(235, 35)">
                <polygon points="0,-12 3,-4 12,-2 6,4 7,13 0,9 -7,13 -6,4 -12,-2 -3,-4" fill="#FFD700" stroke="#1565C0" strokeWidth="1.5" />
              </g>
            </g>

            {/* Small cloud bottom right */}
            <g filter="url(#cloudShadow)" opacity="0.8">
              <circle cx="260" cy="130" r="22" fill="url(#cloudGrad1)" />
              <circle cx="240" cy="135" r="18" fill="url(#cloudGrad1)" />
              {/* Eyes */}
              <ellipse cx="250" cy="128" rx="4" ry="6" fill="#1a1a1a" />
              <ellipse cx="262" cy="128" rx="4" ry="6" fill="#1a1a1a" />
            </g>
          </svg>
        </div>

        <div className="hero-content">
          <h1 className="app-title">Kinora</h1>
          <p className="app-tagline">{t.tagline}</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <div className="features-grid">
          {t.features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="cta-section">
        <button
          className="signup-button"
          onClick={() => onNavigate?.('login')}
        >
          {t.signUp}
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
