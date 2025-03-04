// src/components/Navbar.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import '../styles/lavaLamp.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative h-36 w-full z-10">
      {/* Lava Lamp Background */}
      <div className="lamp absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="lava">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
        </div>
      </div>
      
      {/* SVG Filter for Lava Lamp */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* Nav Content */}
      <nav className="absolute bottom-0 left-0 w-full flex justify-between items-center p-4 font-mono">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white">Rowan Morse</h1>
          <p className="text-sm text-white">Undergraduate in Computer Science</p>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-2 py-1 rounded-md text-white hover:text-[hsl(251,84.6%,74.5%)] transition-colors ${
                isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
              }`
            }
          >
            About
          </NavLink>
          <span className="text-white">/</span>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `px-2 py-1 rounded-md text-white hover:text-[hsl(251,84.6%,74.5%)] transition-colors ${
                isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
              }`
            }
          >
            Resume
          </NavLink>
          <span className="text-white">/</span>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `px-2 py-1 rounded-md text-white hover:text-[hsl(251,84.6%,74.5%)] transition-colors ${
                isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
              }`
            }
          >
            Portfolio
          </NavLink>
          <span className="text-white">/</span>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `px-2 py-1 rounded-md text-white hover:text-[hsl(251,84.6%,74.5%)] transition-colors ${
                isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
              }`
            }
          >
            Contact
          </NavLink>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="relative md:hidden bg-[hsl(250,25.3%,19.4%)] p-4">
          <div className="flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-2 py-1 text-white hover:text-[hsl(251,84.6%,74.5%)] ${
                  isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                `px-2 py-1 text-white hover:text-[hsl(251,84.6%,74.5%)] ${
                  isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `px-2 py-1 text-white hover:text-[hsl(251,84.6%,74.5%)] ${
                  isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-2 py-1 text-white hover:text-[hsl(251,84.6%,74.5%)] ${
                  isActive ? 'text-[hsl(251,84.6%,74.5%)]' : ''
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <span className="ml-2 text-white">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;