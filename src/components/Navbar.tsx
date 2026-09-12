import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  return <header className="site-header">
    <div className="site-nav">
      <Link className="site-brand" to="/">Rowan Morse<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation">
        <Link to="/?section=work">Work</Link>
        <Link to="/?section=research">Research</Link>
        <Link to="/?section=contact">Contact</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}>
        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </div>
  </header>;
}
