import { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PortfolioGoogle from './pages/PortfolioGoogle';
import './styles/graphite.css';

const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

function RoutePosition() {
  const location = useLocation();
  useEffect(() => {
    // HashRouter owns the hash; section destinations use its query string.
    const requestedSection = new URLSearchParams(location.search).get('section')
      || (location.pathname === '/contact' ? 'contact' : location.pathname === '/portfolio' ? 'work' : '');
    const section = requestedSection === 'work' || requestedSection === 'awards' ? 'projects' : requestedSection;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(section || 'main-content');
      if (target) {
        target.focus({ preventScroll: true });
        if (section) target.scrollIntoView({ behavior: 'instant', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.search]);
  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('theme') !== 'light'; } catch { return true; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try { localStorage.setItem('theme', darkMode ? 'dark' : 'light'); } catch { /* In-memory theme still works. */ }
  }, [darkMode]);

  return <HashRouter>
    <div className={`site-shell graphite-site${darkMode ? ' dark' : ''}`} data-ui-font="mono" data-paper="ruled">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        document.getElementById('main-content')?.focus();
      }}>Skip to content</a>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(value => !value)} />
      <RoutePosition />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<div className="article-layout" role="status">Loading writeup…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/tm-portfolio" element={<PortfolioGoogle />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<div className="article-layout"><h1>Page not found</h1><Link to="/">Return home</Link></div>} />
          </Routes>
        </Suspense>
      </main>
      <footer className="site-footer">
        <span>Rowan Morse · Computer vision & machine learning</span>
      </footer>
    </div>
  </HashRouter>;
}
