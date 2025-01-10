'use client';

import React, { useEffect, useRef } from 'react';
import styles from '../styles/FeaturesSection.module.css';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Trigger animations after a slight delay to ensure elements are rendered
      setTimeout(() => {
        sectionRef.current?.classList.add(styles.animateCards);
      }, 500);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-gradient-to-b from-gray-50 to-white ${styles.container}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${styles.cardGrid}`}>
          <Card
            iconClass="fab fa-react breath"
            title="Full-Stack Web Development"
            description="Building robust, scalable web applications with a focus on React.js, GraphQL, and AWS."
          />
          <Card
            iconClass="fas fa-bolt breathQl"
            title="Cloud Solutions & Automation"
            description="Leveraging AWS (AppSync, Lambda, Amplify) and Twilio to create automated, cloud-based solutions."
          />
          <Card
            iconClass="fas fa-database breathDb"
            title="Data-Driven Applications"
            description="Specializing in data integration using GraphQL and Node.js to power dynamic applications."
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
    <div className={`bg-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-between h-full ${styles.card}`}>
      <div className="reactFont">
        <i className={`${iconClass} text-6xl`} aria-hidden="true"></i>
      </div>
      <h5 className="reactColor mt-4 text-xl font-semibold">{title}</h5>
      <p className="mt-4 text-gray-700 flex-grow">{description}</p>
    </div>
  );
}
