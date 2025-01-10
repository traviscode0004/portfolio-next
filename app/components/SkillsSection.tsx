'use client';

import { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/scrollAnimations';
import styles from '../styles/SkillsSection.module.css';

export default function SkillsSection() {
  const skills = [
    { name: 'React.js', color: 'reactColor' },
    { name: 'Next.js', color: 'jColor' },
    { name: 'AWS (Amplify, Lambda)', color: 'dbColor' },
    { name: 'Typescript', color: 'qlColor' },
    { name: 'GraphQL', color: 'aiColor' },
    { name: 'Tailwind CSS', color: 'reactColor' },
    { name: 'JavaScript', color: 'jColor' },
    { name: 'Node.js', color: 'dbColor' },
    { name: 'PostgreSQL', color: 'qlColor' },
    { name: 'Bootstrap', color: 'aiColor' },
    { name: 'AppSync', color: 'reactColor' },
    { name: 'Twilio', color: 'jColor' },
    { name: 'Python', color: 'dbColor' },
    { name: 'Responsive Design', color: 'qlColor' },
    { name: 'REST APIs', color: 'aiColor' },
    { name: 'Kendo React', color: 'reactColor' },
  ];

  useEffect(() => {
    setupScrollAnimations(); // Initialize scroll animations on mount
  }, []);

  return (
    <section
      id="skills"
      className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h3
          className={`text-3xl font-bold text-center mb-8 ${styles.fadeUp}`}
          data-scroll="out"
        >
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard}`} // New skill card class for style & animation
              data-scroll="out"
              style={{ transitionDelay: `${index * 0.1}s` }} // stagger effect
            >
              <span className={`${skill.color} ${styles.skillName}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
