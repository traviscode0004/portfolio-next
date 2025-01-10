'use client';

import styles from '../styles/HeroSection.module.css'; // import your new module

export default function HeroSection() {
  return (
    <section
      id="top"
      // Add the container class from the module
      className={`
        section1
        relative 
        flex 
        items-center 
        justify-center 
        w-full 
        text-white 
        min-h-[450px]
        max-h-[450px]
        pt-16
        px-4
        ${styles.heroSection} 
      `}
    >
      {/* Centered content */}
      <div className={`
        text-center 
        mx-auto 
        max-w-4xl 
        space-y-4
        ${styles.heroTextCenter}
      `}>
        {/* Name (first child) */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl italic mb-2'>
          Travis Decker
        </h1>
        
        {/* Roles (second child) */}
        <h3 className='text-xl sm:text-2xl md:text-3xl flex flex-wrap justify-center gap-4'>
          <span className='qlColor'>Full-Stack Developer</span>
          <span className='text-gray-400'>|</span>
          <span className='reactColor'>React Specialist</span>
          <span className='text-gray-400'>|</span>
          <span className='dbColor'>Web Strategist</span>
        </h3>

        {/* Description (third child) */}
        <h6 className='text-sm sm:text-base md:text-lg mb-4 leading-relaxed'>
          I specialize in building dynamic, scalable web applications with{' '}
          <span className='reactColor'>React</span>,{' '}
          <span className='jColor'>Next.js</span>, and{' '}
          <span className='dbColor'>AWS</span>. Leveraging tools like{' '}
          <span className='qlColor'>Python</span> with{' '}
          <span className='aiColor'>GraphQL or SQL</span>, I create innovative
          solutions that deliver actionable insights and improved workflows.
        </h6>

        {/* Tagline (fourth child) */}
        <p className='text-sm sm:text-lg italic'>
          &quot;Whatever your stack, I&apos;ll make it work for you—
          creatively and efficiently!&quot;
        </p>
      </div>
    </section>
  );
}
