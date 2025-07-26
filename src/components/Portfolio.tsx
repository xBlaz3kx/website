import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
    image: 'https://via.placeholder.com/400x250/232336/FFD700?text=E-commerce+App',
    link: 'https://github.com/yourusername/ecommerce-app',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: 'https://via.placeholder.com/400x250/232336/FFD700?text=Task+Manager',
    link: 'https://github.com/yourusername/task-manager',
    tags: ['React', 'TypeScript', 'Firebase']
  },
  {
    title: 'Personal Portfolio',
    description: 'This website! Built with React, TypeScript, and Tailwind CSS. Using Cursor to generate the code.',
    image: 'https://via.placeholder.com/400x250/232336/FFD700?text=Portfolio',
    link: 'https://github.com/xBlaz3kx/website',
    tags: ['React', 'TypeScript', 'Tailwind', 'Cursor']
  }
];

const Portfolio: React.FC = () => (
  <div>
    <h2 className="text-4xl font-bold gradient-text text-center mb-12">Portfolio</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          tags={project.tags}
        />
      ))}
    </div>
  </div>
);

export default Portfolio; 