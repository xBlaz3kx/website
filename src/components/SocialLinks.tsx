import React from 'react';

interface SocialLinksProps {
  className?: string;
  showLinkedIn?: boolean;
  showGitHub?: boolean;
  showLinktree?: boolean;
  linkedInUrl?: string;
  githubUrl?: string;
  linktreeUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  showLinkedIn = true,
  showGitHub = true,
  showLinktree = true,
  linkedInUrl = 'https://linkedin.com/in/blazdular',
  githubUrl = 'https://github.com/xBlaz3kx',
  linktreeUrl = 'https://links.blazdular.cc/'
}) => {
  return (
    <div className={`social-links ${className}`}>
      {showLinkedIn && (
        <a href={linkedInUrl} className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
          </svg>
        </a>
      )}
      {showGitHub && (
        <a href={githubUrl} className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      )}
      {showLinktree && (
        <a href={linktreeUrl} className="social-link" target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default SocialLinks; 