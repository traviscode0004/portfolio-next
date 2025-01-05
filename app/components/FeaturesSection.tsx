'use client';
import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ======== Full-Stack Web Development ======== */}
          <Card
            iconClass="fab fa-react breath"
            title="Full-Stack Web Development"
            description="Building robust, scalable web applications with a focus on React.js, GraphQL, and AWS. Experienced in developing responsive and user-centric interfaces that drive engagement, with optimized API integrations for seamless data flow."
          />

          {/* ======== Cloud Solutions & Automation ======== */}
          <Card
            iconClass="fas fa-bolt breathQl"
            title="Cloud Solutions & Automation"
            description="Leveraging AWS (AppSync, Lambda, Amplify) and Twilio to create automated, cloud-based solutions. Notably developed a Twilio reminder system for a major medical provider, enhancing communication and operational efficiency."
          />

          {/* ======== Data-Driven Applications ======== */}
          <Card
            iconClass="fas fa-database breathDb"
            title="Data-Driven Applications"
            description="Specializing in data integration using GraphQL and Node.js to power dynamic applications. Proven success in projects requiring real-time data handling, such as integrating mapping APIs for real-time tracking in web applications."
          />
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  iconClass: string;
  title: string;
  description: string;
}

function Card({ iconClass, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div className="reactFont">
        <i className={`${iconClass} text-6xl`} aria-hidden="true"></i>
      </div>
      <h5 className="reactColor mt-4 text-xl font-semibold">{title}</h5>
      <p className="mt-4 text-gray-700 flex-grow">{description}</p>
    </div>
  );
}
