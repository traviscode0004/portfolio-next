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
            description="I specialize in creating high-performance, user-friendly applications using React.js, Next.js, and AWS. My expertise includes leveraging GraphQL to streamline data queries and optimize API interactions, ensuring seamless communication between front-end and back-end systems. By using modern frameworks like TypeScript and Tailwind CSS, I deliver responsive and visually appealing designs."
          />

          {/* ======== Cloud Solutions & Automation ======== */}
          <Card
            iconClass="fas fa-bolt breathQl"
            title="Cloud Solutions & Automation"
            description="With expertise in AWS services like Amplify, AppSync, Lambda, and DynamoDB, I build scalable cloud solutions tailored to your business. By integrating AI APIs, I enhance applications with advanced features like satellite imagery analysis, predictive insights, and automation. My work includes creating efficient Twilio-based reminder systems and interactive mapping tools that simplify complex workflows."
          />

          {/* ======== Data-Driven Applications ======== */}
          <Card
            iconClass="fas fa-database breathDb"
            title="Data-Driven Applications"
            description="I thrive on creating applications where data powers the user experience. Whether it’s real-time integrations via GraphQL and Node.js, type-safe code with TypeScript, or AWS AppSync with DynamoDB for a fully managed backend, I focus on building solutions that run smoothly and efficiently. I also integrate third-party APIs like Google Maps to add interactive features that enhance the overall experience."
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
