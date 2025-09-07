'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        const currentScrollY = window.scrollY;
        
        // Navbar visible ketika di top (scroll Y < 10) atau scroll ke atas
        if (currentScrollY < 10 || currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setIsMenuOpen(false); // Tutup mobile menu saat navbar hide
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-rose-400">Portfolio</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-rose-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 bg-gray-800/90 p-4 rounded-lg">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-300 hover:text-rose-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-gray-300 hover:text-rose-400 transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-300 hover:text-rose-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-300 hover:text-rose-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
