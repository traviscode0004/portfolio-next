'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-[506px] bg-gradient-to-br from-reactColor to-[#282c34] text-center py-10 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
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
          className="bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center justify-center transition-shadow duration-300"
          style={{ maxWidth: '500px' }}
        >
          {/* Name */}
          <h4 className="text-2xl font-semibold text-black mb-4">
            Travis Decker{' '}
            <span className="bg-dbColor text-white py-1 px-3 rounded-full whitespace-nowrap text-sm sm:text-base">
              Ready to Work!
            </span>
          </h4>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed text-center">
            I specialize in creating scalable, user-centric applications using modern technologies
            like React, Python, PostgreSQL, and AI APIs. While I&apos;m not a data scientist, I
            seamlessly integrate AI and cloud services to add powerful features like predictive
            insights and automation. Whether building for healthcare, mapping, or creative
            projects, I thrive on turning challenges into innovative solutions.
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
            &quot;Let&apos;s work together to bring your vision to life!&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
