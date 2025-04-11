'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="font-mono text-tech-teal text-lg font-bold">
          DavidBatoDev
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            <span className="nav-link-number">01.</span>About
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-link-number">02.</span>Projects
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-link-number">03.</span>Skills
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-link-number">04.</span>Contact
          </a>
          <a 
            href="/resume.pdf" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-light hover:text-tech-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-tech-navy/95 flex flex-col justify-center items-center z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-center">
          <a 
            href="#about" 
            className="nav-link text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-number block">01.</span>About
          </a>
          <a 
            href="#projects" 
            className="nav-link text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-number block">02.</span>Projects
          </a>
          <a 
            href="#skills" 
            className="nav-link text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-number block">03.</span>Skills
          </a>
          <a 
            href="#contact" 
            className="nav-link text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-number block">04.</span>Contact
          </a>
          <a 
            href="/resume.pdf" 
            className="btn btn-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
