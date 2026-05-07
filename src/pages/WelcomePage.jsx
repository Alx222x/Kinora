import React, { useState } from 'react';
import './WelcomePage.css';
import communityBanner from '../photos/community_trees.jpeg';
import hugImg from '../photos/hug.png';
import eventsImg from '../photos/events.png';
import locationsImg from '../photos/locations.png';
import clubsImg from '../photos/clubs.png';
import familyImg from '../photos/family-hug.png';
import starsImg from '../photos/stars.png';

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
          image: hugImg
        },
        {
          id: 'events',
          title: 'Events & Clubs',
          description: 'Connect with your neighbours through local events and clubs',
          image: eventsImg
        },
        {
          id: 'places',
          title: 'Discover places',
          description: 'Find the best spots in your area',
          image: locationsImg
        },
        {
          id: 'marketplace',
          title: 'Marketplace',
          description: 'Trade items in your neighbourhood',
          image: clubsImg
        },
        {
          id: 'chat',
          title: 'Chat',
          description: 'Message neighbours directly',
          image: familyImg
        },
        {
          id: 'aura',
          title: 'Aura points',
          description: 'Earn rewards for community involvement',
          image: starsImg
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
          image: hugImg
        },
        {
          id: 'events',
          title: 'Evenementen & Clubs',
          description: 'Verbind met je buren via lokale evenementen en clubs',
          image: eventsImg
        },
        {
          id: 'places',
          title: 'Ontdek plekken',
          description: 'Vind de beste plekken in je buurt',
          image: locationsImg
        },
        {
          id: 'marketplace',
          title: 'Marktplaats',
          description: 'Ruil items in je buurt',
          image: clubsImg
        },
        {
          id: 'chat',
          title: 'Chat',
          description: 'Berichten rechtstreeks naar buren',
          image: familyImg
        },
        {
          id: 'aura',
          title: 'Aura punten',
          description: 'Verdien beloningen voor betrokkenheid in de gemeenschap',
          image: starsImg
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
          <img 
             src={communityBanner}
            alt="Community illustration" 
            className="hero-illustration"
          />
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
              <div className="feature-icon">
                <img
                 src={feature.image}
                 alt={feature.title}
                 className="feature-image"
                    />
              </div>          
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
