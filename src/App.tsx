// src/App.tsx
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioGoogle from './pages/PortfolioGoogle';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import ProjectDetail from './components/ProjectDetail';
import TypographySwitch from './components/TypographySwitch';
import { useTypographyPreference, type Typography } from './hooks/useTypographyPreference';

function MainTypographyControl({ value, onChange }: { value: Typography; onChange: (value: Typography) => void }) {
  const { pathname } = useLocation();
  // Writeups have their own independent control next to the back link.
  if (pathname.startsWith('/portfolio/')) return null;
  return <div className="typography-toolbar"><TypographySwitch label="UI font" value={value} onChange={onChange} /></div>;
}

export default function App() {
  const [uiTypography, setUiTypography] = useTypographyPreference('ui');
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') return false;
      return true; // default to dark
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={`site-shell min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`} data-ui-font={uiTypography}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow bg-white dark:bg-[hsl(60,2%,16%)] text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <MainTypographyControl value={uiTypography} onChange={setUiTypography} />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tm-portfolio" element={<PortfolioGoogle />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
