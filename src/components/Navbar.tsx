import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import BashName from './BashName';

export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  return <header className="site-header">
    <div className="site-nav">
      <BashName />
      <nav aria-label="Main navigation">
        <Link to="/?section=experience">Experience</Link>
        <Link to="/?section=projects">Projects</Link>
        <Link to="/?section=research">Research</Link>
        <Link to="/?section=contact">Contact</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}>
        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </div>
  </header>;
}
