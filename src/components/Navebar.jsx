import  { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navebar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const offsetTop = rect.top;
        const offsetBottom = rect.bottom;
        // If section top is near top third of viewport, consider it active
        if (offsetTop <= window.innerHeight * 0.35 && offsetBottom > window.innerHeight * 0.15) {
          current = link.id;
          break;
        }
      }
      setActiveLink(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 bg-black/50 backdrop-blur-md border-b border-white/5 hover:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg md:text-2xl font-bold text-white tracking-wider">
            AJ<span className="text-yellow-400">.</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <button    
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="relative group px-2"
            >
              {/* Active indicator */}
              <span className={`absolute -left-5 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-200 ${
                activeLink === link.id ? 'bg-yellow-400 shadow-lg' : 'bg-white/20 opacity-0 group-hover:opacity-100'
              }`} />

              <span className={`text-xs md:text-sm font-medium tracking-widest transition-colors duration-300 ${
                activeLink === link.id
                  ? 'text-yellow-400'
                  : 'text-white/70 hover:text-yellow-400'
              }`}>
                <span className="text-white/40 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                {link.label}
              </span>
              
              {/* Neon underline for active link */}
              {activeLink === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 shadow-lg shadow-yellow-400/50 rounded-full"></span>
              )}
              
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-yellow-400/50 opacity-0 group-hover:opacity-100"></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleLinkClick('contact')}
            className="group relative px-6 py-3 border border-purple-500 rounded-lg text-sm font-medium text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            {/* Background glow on hover */}
            <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300"></span>
            
            {/* Content */}
            <span className="relative flex items-center gap-2">
              Let's Connect
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-yellow-400 transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 mt-0">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeLink === link.id
                    ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30'
                    : 'text-white/70 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                <span className="text-xs font-medium tracking-widest">
                  <span className="text-white/40 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                  {link.label}
                </span>
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-4 px-4 py-3 border border-purple-500 rounded-lg text-xs font-medium text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="flex items-center justify-center gap-2">
                Let's Connect
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navebar;
