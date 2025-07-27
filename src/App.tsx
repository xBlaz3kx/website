import React, { useState } from 'react';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactInfo from './components/ContactInfo';
import SocialLinks from './components/SocialLinks';

import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div className="vcard-layout">
      {/* Profile Sidebar */}
      <div className="vcard-sidebar">
        {/* Profile Image */}
        <div className="profile-section">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFKY6dhB_szQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646593313974?e=1756339200&v=beta&t=qQHvo37Tky4rUkPX2ni1wF-VMRnvL9B49WYEN28ykO8"
            alt="Profile"
            className="profile-image"
          />
          <h1 className="profile-name">Blaž Dular</h1>
          <div className="profile-title">Backend Software Engineer</div>
        </div>

        {/* Contact Info */}
        <ContactInfo />

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Main Content */}
      <div className="vcard-main"> 
        {/* Navigation */}
        <nav className="vcard-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="vcard-content"> {/* New content class */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
