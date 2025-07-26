import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tags }) => {
  return (
    <div className="vcard-card overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-vcard-text mb-2">{title}</h3>
        <p className="text-vcard-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gold text-vcard-bg rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gold text-vcard-bg rounded-lg font-medium hover:bg-yellow-400 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 