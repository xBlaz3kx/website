import React from 'react';

const About: React.FC = () => (
  <div>
    {/* Description Section */}
    <div className="vcard-card p-10 mb-8">
      <h1 className="text-6xl font-bold gradient-text mb-6 text-center">Blaž Dular</h1>
      <h2 className="text-2xl text-vcard-muted mb-8 font-medium text-center">Backend Software Engineer</h2>
      <p className="text-xl text-vcard-muted max-w-4xl mx-auto leading-relaxed text-center">
        Experienced backend software engineer with a passion for building scalable and efficient systems in Go using cutting-edge technologies.
      </p>
    </div>

    {/* Skills Section */}
    <div className="vcard-card p-10">
      <h3 className="text-3xl font-bold gradient-text mb-8 text-center">Skills & Technologies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-vcard-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-vcard-text mb-4">Backend</h4>
          <ul className="space-y-2 text-vcard-muted">
            <li>Go, Python</li>
            <li>Terraform</li>
            <li>gRPC, HTTP, Websockets</li>
            <li>Kafka, RabbitMQ</li>
            <li>SQL and NoSQL databases (Mongo, Postgres, MySQL, Redis, InfluxDB)</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-vcard-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-vcard-text mb-4">Tools & Others</h4>
          <ul className="space-y-2 text-vcard-muted">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Helm</li>
            <li>Observability (OpenTelemetry)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About; 