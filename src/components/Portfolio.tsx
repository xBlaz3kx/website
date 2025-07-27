import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'ChargePi',
        description: 'An open-source electric vehicle charging station framework with a user-friendly management interface, real-time monitoring, and APIs.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: 'https://github.com/ChargePi/ChargePi-go',
        tags: ['Go', 'SQLite', 'gRPC', 'React', 'OCPP', 'Docker']
    },
    {
        title: 'Spectre',
        description: 'A modern, scalable charge point management system with a focus on performance and user experience.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: '',
        tags: ['Go', 'gRPC', 'HTTP', 'OCPP', 'MongoDB', 'Redis', 'InfluxDB', 'OpenTelemetry', 'Kubernetes', 'Docker']
    },
    {
        title: 'Chargeflow',
        description: 'A CLI tool for analyzing and validating OCPP messages.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: 'https://github.com/ChargePi/chargeflow',
        tags: ['Go', 'CLI', 'OCPP']
    },
    {
        title: 'Contributing to Testcontainers',
        description: 'Contributed to the Testcontainers project by adding support for InfluxDB v2.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: 'https://github.com/xBlaz3kx/testcontainers-go',
        tags: ['Go', 'Docker', 'Testcontainers']
    },
    {
        title: 'Contributing to ocpp-go',
        description: 'Contributed to the ocpp-go project by implementing observability features, improving the codebase, adding support for OCPP 1.6 security extensions and OCPP 2.1 implementation.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: 'https://github.com/xBlaz3kx/ocpp-go',
        tags: ['Go', 'OCPP', 'OpenTelemetry', 'Websockets']
    },
    {
        title: 'Contributing to dkron',
        description: 'Contributed to the Dkron project by adding tracing and observability features and improving the codebase.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: 'https://github.com/distribworks/dkron',
        tags: ['Go', 'Raft', 'Scheduler', 'Distributed Systems', 'OpenTelemetry', 'Docker']
    },
    {
        title: 'BigVerify scalable email verification backend',
        description: 'Helped a friend build a scalable email verification backend.',
        image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        link: '',
        tags: ['Go', 'Redis', 'Mongo', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes']
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