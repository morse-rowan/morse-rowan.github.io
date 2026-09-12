import { useEffect, useState, type MouseEvent } from 'react';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';
import './type-study.css';
import { useTypographyPreference } from '../hooks/useTypographyPreference';

// A shared sample for both type treatments. Source: About.tsx and Portfolio.tsx.
// This is a temporary design study; the production content refactor is round 2.
const publication = {
  title: 'Exploring the Performance of Perforated Backpropagation through Further Experiments',
  authors: ['Rorry Brenner', 'Evan Davis', 'Rushi Chaudhari', 'Rowan Morse',
    'Jingyao Chen', 'Xirui Liu', 'Zhaoyi You', 'Laurent Itti'],
  recognition: 'Perforated AI · $1,000 award',
  url: 'https://arxiv.org/abs/2506.00356',
};

export default function TypeStudy() {
  const [type, setType] = useTypographyPreference('ui');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Rowan Morse — Typography study';
    return () => { document.title = previousTitle; };
  }, []);

  function navigateSection(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest('a');
    const href = link?.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const section = document.getElementById(href.slice(1));
    if (!section) return;
    event.preventDefault();
    window.history.pushState(null, '', href);
    section.focus({ preventScroll: true });
    section.scrollIntoView({ block: 'start', behavior: 'auto' });
  }

  return (
    <div className="type-study" data-type={type} data-theme={theme} onClick={navigateSection}>
      <a className="study-skip" href="#study-main">Skip to content</a>
      <aside className="study-tools" aria-label="Design comparison controls">
        <div className="study-tools-inner">
          <span className="study-tool-title">Typography study</span>
          <fieldset className="study-type-options">
            <legend className="study-sr-only">Typography</legend>
            <label>
              <input type="radio" name="typography" value="reading" checked={type === 'reading'}
                onChange={() => setType('reading')} />
              <span><b>A</b> Reading</span>
            </label>
            <label>
              <input type="radio" name="typography" value="mono" checked={type === 'mono'}
                onChange={() => setType('mono')} />
              <span><b>B</b> Mono</span>
            </label>
          </fieldset>
          <button className="study-theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {theme === 'light' ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
          </button>
          <a className="study-original" href="/">Current site <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </aside>

      <header className="study-header">
        <div className="study-column study-nav">
          <a className="study-name" href="#intro">Rowan Morse</a>
          <nav aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="study-header-art" aria-hidden="true">
          <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
            <path className="study-wave-fill" d="M0 35 C300 100 440 8 760 43 S1150 118 1440 40 V130 H0Z" />
            <path className="study-wave-line" d="M0 35 C300 100 440 8 760 43 S1150 118 1440 40" />
            <path className="study-wave-line study-wave-secondary" d="M0 59 C300 124 440 32 760 67 S1150 142 1440 64" />
          </svg>
        </div>
      </header>

      <main id="study-main" tabIndex={-1}>
        <section className="study-column study-intro" id="intro" tabIndex={-1} aria-labelledby="intro-heading">
          <p className="study-eyebrow">Computer science undergraduate</p>
          <h1 id="intro-heading">Rowan Morse</h1>
          <p className="study-bio">My interests are in computer vision, machine learning,
            vision-language models, diffusion techniques, and artificial intelligence.</p>
          <p className="study-meta study-location"><span>Pittsburgh, PA</span><span>Expected graduation · April 2027</span></p>
          <div className="study-links">
            <a href="mailto:rowan.morse16@gmail.com">Email <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://github.com/morse-rowan">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/rowan-morse/">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="study-section" id="research" tabIndex={-1} aria-labelledby="research-heading">
          <div className="study-column study-section-inner">
            <h2 className="study-section-label" id="research-heading"><span>01</span> Research</h2>
            <article>
              <h3><a href={publication.url}>{publication.title}</a></h3>
              <p className="study-authors">{publication.authors.map((author, i) => (
                <span key={author}>{i > 0 && ', '}{author === 'Rowan Morse' ? <strong>{author}</strong> : author}</span>
              ))}</p>
              <p className="study-meta study-recognition">{publication.recognition}</p>
              <div className="study-links"><a href={publication.url}>Read paper <ArrowUpRight size={15} aria-hidden="true" /></a></div>
            </article>
          </div>
        </section>

        <section className="study-section" id="work" tabIndex={-1} aria-labelledby="work-heading">
          <div className="study-column study-section-inner">
            <h2 className="study-section-label" id="work-heading"><span>02</span> Selected work</h2>
            <article className="study-project">
              <div>
                <h3><a href="/#/portfolio/sat_diffusion">Satellite Image Generator</a></h3>
                <p>Diffusion from scratch (DDIM/DDPM) to generate 64×64 synthetic Sentinel-2 imagery.</p>
                <p className="study-meta study-project-meta">PyTorch · Diffusion · DDPM · DDIM</p>
                <div className="study-links">
                  <a href="/#/portfolio/sat_diffusion">Writeup <ArrowUpRight size={15} aria-hidden="true" /></a>
                  <a href="https://github.com/morse-rowan/satellite_diffusion">Source code <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
              <a className="study-project-image" href="/#/portfolio/sat_diffusion" aria-label="Read the Satellite Image Generator writeup">
                <img src="/sat_diffusion/sd_results.png" alt="Grid of generated satellite imagery" loading="lazy" width="200" height="150" />
              </a>
            </article>
          </div>
        </section>

        <section className="study-section study-contact" id="contact" tabIndex={-1} aria-labelledby="contact-heading">
          <div className="study-column study-section-inner">
            <h2 className="study-section-label" id="contact-heading"><span>03</span> Contact</h2>
            <a className="study-email" href="mailto:rowan.morse16@gmail.com">rowan.morse16@gmail.com <ArrowUpRight size={18} aria-hidden="true" /></a>
            <div className="study-links">
              <a href="https://github.com/morse-rowan">GitHub</a>
              <a href="https://www.linkedin.com/in/rowan-morse/">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="study-column study-footer"><span>Rowan Morse</span><a href="#intro">Back to top ↑</a></footer>
    </div>
  );
}
