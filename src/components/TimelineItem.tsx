import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, description }) => {
  return (
    <div className="relative pl-8 border-l-2 border-gold">
      <div className="absolute -left-4 top-1.5 w-3 h-3 bg-gold rounded-full border-2 border-vcard-card" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
        <h4 className="text-lg font-bold text-vcard-text">{title}</h4>
        <span className="text-sm text-vcard-muted font-medium">{period}</span>
      </div>
      <div className="font-medium text-vcard-muted mb-1">{subtitle}</div>
      <div className="text-sm text-vcard-muted">{description}</div>
    </div>
  );
};

export default TimelineItem; 