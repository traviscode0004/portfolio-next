'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className='
        section1
        relative 
        flex 
        items-center 
        justify-center 
        w-full 
        text-white 
        border-b 
        border-gray-400 
        overflow-hidden
        min-h-[450px]
        max-h-[450px]
        pt-16
        px-4 // Adds padding for mobile
      '
    >
      {/* Centered content */}
      <div className='text-center mx-auto max-w-4xl space-y-4'>
        {/* Name */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl italic mb-2'>Travis Decker</h1>
        
        {/* Roles */}
        <h3 className='text-xl sm:text-2xl md:text-3xl flex flex-wrap justify-center gap-4'>
          <span className='qlColor'>Full-Stack Developer</span>
          <span className='text-gray-400'>|</span>
          <span className='reactColor'>React Specialist</span>
          <span className='text-gray-400'>|</span>
          <span className='dbColor'>Web Strategist</span>
        </h3>

        {/* Description */}
        <h6 className='text-sm sm:text-base md:text-lg mb-4 leading-relaxed'>
          I specialize in building dynamic, scalable web applications with{' '}
          <span className='reactColor'>React</span>,{' '}
          <span className='jColor'>Next.js</span>, and{' '}
          <span className='dbColor'>AWS</span>. Leveraging modern tools like{' '}
          <span className='qlColor'>Python</span> and{' '}
          <span className='aiColor'>AI APIs</span>, I create innovative
          solutions that deliver actionable insights and improved workflows.
        </h6>

        {/* Tagline */}
        <p className='text-sm sm:text-lg italic'>
          "Whatever your stack, I'll make it work for you—creatively and
          efficiently!"
        </p>
      </div>
    </section>
  );
}
