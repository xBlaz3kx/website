import React from 'react';
import TimelineItem from './TimelineItem';

const experience = [
  {
    title: 'Software Engineer',
    company: 'Bitstamp',
    period: '2024 - Present',
    description: 'Working in the trading division of Bitstamp. Mainly working on the derivatives trading platform. Developing new features, proposing new solutions and improving existing ones.',
  },
  {
    title: 'Lead Software Engineer',
    company: 'GL Charge',
    period: '2023 - 2024',
    description: 'Leading a team of 3 software engineers to build a scalable charging station management system in Go.'
  },
  {
    title: 'Software Engineer',
    company: 'GL Charge',
    period: '2021 - 2023',
    description: 'Worked on a charging station with integrated payment system and a charging station management system.'
  },
  {
    title: 'Developer Intern',
    company: 'Syphony Retail AI',
    period: '2018 - 2020',
    description: 'Worked as an intern in the development team of Symphony Retail AI. Bug fixing and occasionally implementing new features.'
  }
];

const education = [
  {
    degree: 'Bachelor\'s Degree',
    school: 'University of Ljubljana, Faculty of Electrical Engineering',
    period: '2018 - 2022',
    description: 'Studied electrical engineering with focus on Information and Communication Technology.'
  }
];

const Resume: React.FC = () => (
  <div>
    <h2 className="text-4xl font-bold gradient-text text-center mb-12">Resume</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Experience */}
      <div className="vcard-card p-10">
        <h3 className="text-2xl font-bold text-gold mb-6">Experience</h3>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <TimelineItem
              key={idx}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="vcard-card p-10">
        <h3 className="text-2xl font-bold text-gold mb-6">Education</h3>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.degree}
              subtitle={edu.school}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Resume; 