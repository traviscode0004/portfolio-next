'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // Track scroll state for shrinking navbar
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [loaded, setLoaded] = useState(false); // Navbar load animation state

  // Ensure the navbar runs its load animation on mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Track scrolling for shrinking the navbar
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

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav
      id="menu"
      className={`
        fixed top-0 left-0 w-full z-50
        border-b border-gray-700
        flex items-center
        transition-all duration-500
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
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`
            ${styles.mobileMenu} 
            ${menuOpen ? styles.menuOpen : styles.menuClosed}
          `}
        >
          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <Link
            href="#portfolio"
            className="block text-white px-4 py-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            PORTFOLIO
          </Link>
          <Link
            href="#about"
            className="block text-white px-4 py-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            RESUME
          </Link>
          <Link
            href="#skills"
            className="block text-white px-4 py-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="block text-white px-4 py-2 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT ME
          </Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:space-x-8 md:items-center">
          <Link
            href="#portfolio"
            className="text-white hover:text-gray-400"
          >
            PORTFOLIO
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-gray-400"
          >
            RESUME
          </Link>
          <Link
            href="#skills"
            className="text-white hover:text-gray-400"
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-gray-400"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
}
