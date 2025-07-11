import React, { useState, useEffect } from 'react';
import { Menu, X, Mic, Play, Pause } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/Logo.png" alt="Fisching for Energy" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`font-medium transition-colors hover:text-[#FF463C] ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Über uns
            </a>
            <a href="#episodes" className={`font-medium transition-colors hover:text-[#FF463C] ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Episoden
            </a>
            <a href="#contact" className={`font-medium transition-colors hover:text-[#FF463C] ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Kontakt
            </a>
            <a href="#newsletter" className="bg-[#FF463C] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e63d34] transition-colors">
              Abonnieren
            </a>
          </nav>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <a href="#about" className="block text-white font-medium hover:text-[#FF463C]">
              Über uns
            </a>
            <a href="#episodes" className="block text-white font-medium hover:text-[#FF463C]">
              Episoden
            </a>
            <a href="#contact" className="block text-white font-medium hover:text-[#FF463C]">
              Kontakt
            </a>
            <a href="#newsletter" className="w-full bg-[#FF463C] text-white px-6 py-2 rounded-full font-medium hover:bg-[#e63d34] transition-colors text-center">
              Abonnieren
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;