'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  // Track scroll to replicate your "menu--scrolled" effect
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  // This tracks if the navbar has "loaded" for the first time
  const [loaded, setLoaded] = useState(false);

  // 1. On component mount, set loaded to true
  useEffect(() => {
    setLoaded(true);
  }, []);

  // 2. Track scrolling to shrink/expand navbar
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 378) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="menu"
      className={`
        fixed top-0 left-0 w-full z-50
        border-b border-gray-700
        transition-all duration-500
        flex items-center
        /* Our module classes: */
        ${styles.navBarLoad}
        ${loaded ? styles.active : ''} 
        ${scrolled 
          ? 'bg-[rgba(12.5,13.7,16.5,1)] min-h-[50px]' 
          : 'bg-[rgba(12.5,13.7,16.5,0.5)] min-h-[75px]'
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo/Brand */}
        <Link href="#top">
          <span className="text-white text-xl">
            &lt;/
            <span className="text-reactColor">TravisCode</span>
            &gt;
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navbar Links */}
        <div
          className={`
            md:flex md:space-x-8 md:items-center 
            ${menuOpen ? 'block' : 'hidden'} 
            absolute md:static top-full left-0 w-full md:w-auto 
            bg-[rgba(12.5,13.7,16.5,1)] md:bg-transparent
          `}
        >
          <Link
            href="#portfolio"
            className="block md:inline-block text-white hover:text-white px-4 py-2 md:py-0"
            onClick={() => setMenuOpen(false)}
          >
            PORTFOLIO
          </Link>
          <Link
            href="#about"
            className="block md:inline-block text-white hover:text-white px-4 py-2 md:py-0"
            onClick={() => setMenuOpen(false)}
          >
            RESUME
          </Link>
          <Link
            href="#skills"
            className="block md:inline-block text-white hover:text-white px-4 py-2 md:py-0"
            onClick={() => setMenuOpen(false)}
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="block md:inline-block text-white hover:text-white px-4 py-2 md:py-0"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
}
