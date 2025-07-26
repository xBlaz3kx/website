import React, { useState } from 'react';

interface ContactInfoProps {
  email?: string;
  showEmail?: boolean;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  email = process.env.REACT_APP_EMAIL || 'your.email@example.com',
  showEmail = true,
  className = ''
}) => {
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <div className={`contact-info ${className}`}>
      {showEmail && (
        <div className="contact-item" onClick={() => setEmailRevealed(!emailRevealed)}>
          <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xs text-gold uppercase tracking-wide font-semibold">Email</span>
            <span className="cursor-pointer hover:text-gold transition-colors duration-200">
              {emailRevealed ? email : 'Click to reveal'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo; 