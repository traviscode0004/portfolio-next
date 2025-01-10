'use client';

import Image from 'next/image';
import styles from '../styles/AboutSection.module.css'; // import your new module
import { setupScrollAnimations } from '../utils/scrollAnimations';
import { useEffect } from 'react';

export default function AboutSection() {

  useEffect(() => {
      setupScrollAnimations(); // Initialize scroll animations on mount
    }, []);
    
  return (
    <section
      id="about"
      className="min-h-[506px] bg-gradient-to-br from-reactColor to-[#282c34] text-center py-10 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div
          className={`md:w-1/2 flex justify-center ${styles.fadeInLeft}`}
          data-scroll="out"
        >
          <Image
            src="/me-no-background.png"
            alt="Picture of Travis Decker"
            width={306}
            height={306}
            className="object-contain"
          />
        </div>

        {/* Right: Card */}
        <div
          className={`bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center justify-center transition-shadow duration-300 ${styles.fadeInRight}`}
          style={{ maxWidth: '500px' }}
          data-scroll="out"
        >
          {/* Name */}
          <h4 className="text-2xl font-semibold text-black mb-4">
            Travis Decker{' '}
            <span className="bg-dbColor text-white py-1 px-3 rounded-full whitespace-nowrap text-sm sm:text-base">
              Available Now*
            </span>
          </h4>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed text-center">
            Looking to elevate your next project? With expertise in React.js, GraphQL, 
            and AWS, I can build dynamic, scalable applications tailored to your needs. 
            Whether you’re after a custom WordPress solution, a cloud-integrated 
            application, or an MVP to showcase to stakeholders, I’m ready to bring your 
            vision to life. Let’s connect and make it happen!
          </p>

          {/* Resume Button */}
          <button
            type="button"
            onClick={() =>
              window.open('/Travis_Decker_resume.pdf', '_blank', 'noopener,noreferrer')
            }
            className="resumeBtn mb-4"
          >
            Resume
          </button>

          {/* Tagline */}
          <p className="text-xs text-gray-500 text-center">
            &quot;*For web development work. Sorry Ladies I am taken.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
