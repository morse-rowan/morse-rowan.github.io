import { useEffect, useState, type MouseEvent } from 'react';
import { ArrowUpRight, ArrowLeft, Moon, Sun, Pause, Play } from 'lucide-react';
import './design-gallery.css';
import './index-studies.css';
import './sidebar-studies.css';
import AsciiGlobe from './AsciiGlobe';

// Disposable visual prototypes. Keep production components and preferences separate.
const designs = [
  { id: 'familiar', letter: 'A', name: 'Familiar', description: 'Your current site, quieter.', detail: 'Purple, a soft lava banner, rounded project panels. The closest evolution of your current website.' },
  { id: 'fieldnotes', letter: 'B', name: 'Fieldnotes', description: 'A narrow column on warm paper.', detail: 'Airy spacing, labels in the margin, and a slow wave stretching beyond the reading column.' },
  { id: 'index', letter: 'C', name: 'Research index', description: 'Compact, structured, research first.', detail: 'A persistent profile column, numbered entries, fine rules, and a small orbital sketch.' },
  { id: 'studio', letter: 'D', name: 'Visual portfolio', description: 'More space for the work itself.', detail: 'An offset introduction, a sage palette, and larger project images. More visual, still restrained.' },
  { id: 'lava-index', letter: 'E', name: 'Lava index', description: 'A little purple. A quieter lamp.', detail: 'A shallow lava ribbon above a compact one-page index. Purple appears in small details; the text stays on a calm, solid background.' },
  { id: 'light-index', letter: 'F', name: 'Light index', description: 'One column. Fine rules. Nothing extra.', detail: 'The compactness of Research Index with a single reading column and section labels in the margin. Work comes first; the order is still open.' },
  { id: 'ledger', letter: 'G', name: 'Margin ledger', description: 'A slim rail and numbered entries.', detail: 'A narrow section index beside one continuous page, warm paper, small entry numbers, and a fine vertical rule connecting the work.' },
  { id: 'contour', letter: 'H', name: 'Contour index', description: 'A small drawing and visual footnotes.', detail: 'A quiet contour sketch beside the introduction, blue accents, and small project thumbnails. All the content keeps the same compact rhythm.' },
  { id: 'lava-rail', letter: 'I', name: 'Lava sidebar', description: 'Original colors. Compact frame.', detail: 'Your original purple and pink lamp colors in a shallow ribbon. A stable profile sidebar and one continuous page beneath it.' },
  { id: 'paper-rail', letter: 'J', name: 'Paper sidebar', description: 'The clean, light baseline.', detail: 'A compact profile beside a narrow work column. Small section labels, fine rules, and no decorative animation.' },
  { id: 'ascii-rail', letter: 'K', name: 'ASCII atlas', description: 'A slowly turning text globe.', detail: 'A small animated ASCII globe, warm white, and ink-colored entries. One quiet drawing in the profile; the work stays easy to scan.' },
  { id: 'contour-rail', letter: 'L', name: 'Contour sidebar', description: 'Moving lines. Blue-gray ink.', detail: 'A gently changing contour drawing and thumbnail details, with the same compact profile-and-content layout.' },
  { id: 'profile-lava', letter: 'M', name: 'Profile lamp', description: 'Lamp beside your identity.', detail: 'The original lamp colors in a small panel above your name. Charcoal text and neutral rules let that one area carry the color.' },
  { id: 'content-lava', letter: 'N', name: 'Work-column lamp', description: 'A ribbon above the work.', detail: 'The lamp sits at the top of the work column while the profile stays plain. Blue-gray text and cool paper give the rest of the page a different feel.' },
  { id: 'navbar-lava', letter: 'O', name: 'Navbar lamp', description: 'Lava behind the navigation.', detail: 'The original purple and pink lamp fills the top navbar, with your original navigation font over it. The compact sidebar and work column stay on a solid background.' },
] as const;
type Design = typeof designs[number]['id'];
const indexDesigns: readonly Design[] = ['lava-index', 'light-index', 'ledger', 'contour'];
const sidebarDesigns: readonly Design[] = ['lava-rail', 'paper-rail', 'ascii-rail', 'contour-rail', 'profile-lava', 'content-lava', 'navbar-lava'];
const lavaPlacementDesigns: readonly Design[] = ['profile-lava', 'content-lava', 'navbar-lava'];
const publication = {
  title: 'Exploring the Performance of Perforated Backpropagation through Further Experiments',
  authors: 'Rorry Brenner, Evan Davis, Rushi Chaudhari, Rowan Morse, Jingyao Chen, Xirui Liu, Zhaoyi You, Laurent Itti',
  url: 'https://arxiv.org/abs/2506.00356',
};
const projects = [
  { title: 'Satellite Image Generator', description: 'Diffusion from scratch to generate 64×64 synthetic Sentinel-2 imagery.', tags: 'PyTorch / DDPM / DDIM', image: '/sat_diffusion/sd_results.png', alt: 'Grid of generated satellite imagery', url: '?page=writing', source: 'https://github.com/morse-rowan/satellite_diffusion' },
  { title: 'SafeNet', description: 'A lightweight ConvNet architecture for edge-based UAV navigation in disaster zones.', tags: 'TensorFlow / Computer vision', image: '/safenet.png', alt: 'SafeNet project illustration', url: '/#/portfolio/safenet', source: 'https://github.com/morse-rowan/SafeNet' },
];
function OutArrow() { return <ArrowUpRight size={15} aria-hidden="true" />; }
function SocialLinks() {
  return <div className="concept-links"><a href="mailto:rowan.morse16@gmail.com">Email <OutArrow /></a><a href="https://github.com/morse-rowan">GitHub <OutArrow /></a><a href="https://www.linkedin.com/in/rowan-morse/">LinkedIn <OutArrow /></a></div>;
}
function ResearchBlock({ number }: { number: string }) {
  return <section className="concept-section" id="research" tabIndex={-1}>
    <h2><span>{number}</span> Research</h2>
    <article className="concept-paper"><p className="concept-kicker">Publication</p><h3><a href={publication.url}>{publication.title}</a></h3><p className="concept-authors">{publication.authors.split('Rowan Morse').map((part, i) => <span key={i}>{i > 0 && <strong>Rowan Morse</strong>}{part}</span>)}</p><p className="concept-recognition">Perforated AI · $1,000 award</p><a className="concept-action" href={publication.url}>Read paper <OutArrow /></a></article>
  </section>;
}
function ContourSketch() {
  return <svg className="index-contours" viewBox="0 0 180 140" aria-hidden="true">
    {Array.from({ length: 7 }, (_, i) => <ellipse key={i} cx="90" cy="70" rx={18 + i * 10} ry={10 + i * 7} transform={`rotate(${-25 + i * 6} 90 70)`} />)}
    <path d="M90 62v16M82 70h16" />
  </svg>;
}
function Artwork() {
  return <div className="concept-art" aria-hidden="true">
    <div className="concept-lava"><i /><i /><i /></div>
    <svg className="concept-wave" viewBox="0 0 1440 180" preserveAspectRatio="none"><path d="M-200 90 Q100 -10 450 75 T1100 65 T1650 70 L1650 220 L-200 220Z" /><path d="M-200 110 Q150 10 480 95 T1150 85 T1650 95" /></svg>
    <svg className="concept-orbit" viewBox="0 0 200 160"><ellipse cx="100" cy="80" rx="85" ry="30" /><ellipse cx="100" cy="80" rx="85" ry="30" transform="rotate(60 100 80)" /><ellipse cx="100" cy="80" rx="85" ry="30" transform="rotate(120 100 80)" /><circle cx="100" cy="80" r="4" /></svg>
    <div className="concept-landscape"><i /><i /><i /></div>
  </div>;
}

export default function DesignGallery() {
  const params = new URLSearchParams(window.location.search);
  const [design, setDesign] = useState<Design>(() => designs.find(d => d.id === params.get('design'))?.id ?? 'paper-rail');
  const [page, setPage] = useState<'home' | 'writing'>(params.get('page') === 'writing' ? 'writing' : 'home');
  const [dark, setDark] = useState(false);
  const [motion, setMotion] = useState(true);
  const [font, setFont] = useState('mono');
  const [readingFont, setReadingFont] = useState('reading');
  const [mobilePreview, setMobilePreview] = useState(false);
  const [lavaPalettes, setLavaPalettes] = useState<Record<string, string>>({});
  const selected = designs.find(d => d.id === design)!;
  const sidebar = sidebarDesigns.includes(design);
  const lavaPlacement = lavaPlacementDesigns.includes(design);
  const lava = lavaPlacement || design === 'lava-rail';
  const lavaPalette = lavaPalettes[design] ?? (design === 'profile-lava' ? 'graphite' : design === 'content-lava' ? 'slate' : 'violet');
  const refined = indexDesigns.includes(design) || sidebar;
  const visibleDesigns = designs.filter(d => lavaPlacement ? lavaPlacementDesigns.includes(d.id) : sidebar ? sidebarDesigns.includes(d.id) && !lavaPlacementDesigns.includes(d.id) :
    indexDesigns.includes(d.id) === refined && !sidebarDesigns.includes(d.id));

  useEffect(() => {
    document.title = `${selected.name} — Rowan Morse design playground`;
    const next = new URL(window.location.href);
    next.searchParams.set('design', design);
    next.searchParams.set('page', page);
    window.history.replaceState(null, '', next);
  }, [design, page, selected.name]);

  function navigate(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest('a');
    const href = anchor?.getAttribute('href');
    if (href?.startsWith('?') && new URLSearchParams(href.slice(1)).get('page') === 'writing') {
      event.preventDefault(); setPage('writing');
      document.getElementById('concept-preview')?.scrollIntoView({ behavior: 'instant' });
      return;
    }
    if (!href?.startsWith('#')) return;
    event.preventDefault();
    if (href !== '#design-controls') setPage('home');
    requestAnimationFrame(() => {
      const section = document.getElementById(href.slice(1));
      section?.focus({ preventScroll: true });
      section?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }

  return <div className="design-playground" onClick={navigate}>
    <aside id="design-controls" className="gallery-controls" aria-label="Design playground" tabIndex={-1}>
      <div className="gallery-top"><div><strong>Design playground</strong><span>{sidebar ? 'Round 3 · Sidebar + one page' : refined ? 'Round 2 · Compact one-page studies' : 'Round 1 · Original directions'}</span></div><a href="/">Current site <OutArrow /></a></div>
      <div className="gallery-rounds" aria-label="Design round"><button aria-pressed={lavaPlacement} onClick={() => setDesign('profile-lava')}>Lava placements <span>New</span></button><button aria-pressed={sidebar && !lavaPlacement} onClick={() => setDesign('paper-rail')}>Sidebar studies</button><button aria-pressed={refined && !sidebar} onClick={() => setDesign('light-index')}>Index studies</button><button aria-pressed={!refined} onClick={() => setDesign('index')}>Original directions</button></div>
      <div className={`gallery-designs${lavaPlacement ? ' gallery-design-pair' : ''}`} aria-label="Choose a design">
        {visibleDesigns.map(d => <button key={d.id} onClick={() => setDesign(d.id)} aria-pressed={design === d.id}>
          <span className={`gallery-swatch swatch-${d.id}`} aria-hidden="true"><i /><i /><i /></span>
          <span><b>{d.letter} / {d.name}</b><small>{d.description}</small></span>
        </button>)}
      </div>
      <div className="gallery-options">
        <div className="gallery-pages"><button aria-pressed={page === 'home'} onClick={() => setPage('home')}>Homepage</button><button aria-pressed={page === 'writing'} onClick={() => setPage('writing')}>Sample writeup</button></div>
        {sidebar && <label>Preview<select value={mobilePreview ? 'mobile' : 'desktop'} onChange={e => setMobilePreview(e.target.value === 'mobile')}><option value="desktop">Desktop</option><option value="mobile">Mobile · 390px</option></select></label>}
        {lava && <label>Page palette<select aria-label="Page palette" value={lavaPalette} onChange={e => setLavaPalettes(previous => ({...previous, [design]:e.target.value}))}><option value="violet">Violet</option><option value="graphite">Graphite</option><option value="slate">Blue-gray</option><option value="sage">Sage</option></select></label>}
        <label>{page === 'home' ? 'UI font' : 'Writeup font'}<select value={page === 'home' ? font : readingFont} onChange={e => page === 'home' ? setFont(e.target.value) : setReadingFont(e.target.value)}><option value="mono">Mono</option><option value="reading">Reading</option></select></label>
        <button className="gallery-icon" onClick={() => setDark(!dark)} aria-label={dark ? 'Use light theme' : 'Use dark theme'}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
        <button className="gallery-icon" onClick={() => setMotion(!motion)} aria-label={motion ? 'Pause decoration' : 'Play decoration'}>{motion ? <Pause size={16} /> : <Play size={16} />}</button>
      </div>
      <p className="gallery-caption"><b>{selected.letter} / {selected.name}.</b> {selected.detail}</p>
      {sidebar && <p className="gallery-mobile-note">Desktop: profile on the left. Below 760px: profile above the work, with a short row of section links.</p>}
      {lava && <p className="gallery-mobile-note">Page palette changes text, links, rules, and backgrounds. The lamp always keeps its original purple and pink. {lavaPlacement && <button className="gallery-reference" onClick={() => setDesign('lava-rail')}>Compare the full-width ribbon ↗</button>}</p>}
    </aside>

    <div className={`concept-frame${sidebar && mobilePreview ? ' concept-frame-mobile' : ''}`}>
    <div id="concept-preview" className={`concept concept-${design}${refined ? ' concept-refined' : ''}${sidebar ? ' concept-sidebar' : ''}`} data-dark={dark} data-motion={motion} data-font={font} data-reading={readingFont} data-lava-palette={lava ? lavaPalette : undefined}>
      <header className={`concept-header${design === 'navbar-lava' ? ' lava-sample navbar-lamp' : ''}`}>
        <div className="concept-nav"><a href="#introduction" className="concept-brand">Rowan Morse<span>Computer science undergraduate</span></a><nav aria-label="Preview navigation">{refined ? <><a href="#work">Work</a><a href="#research">Research</a></> : <><a href="#research">Research</a><a href="#work">Work</a></>}<a href="#contact">Contact</a></nav></div>
        <Artwork />
      </header>

      {page === 'home' ? <main className="concept-layout">
        {refined && !sidebar && <nav className="index-rail" aria-label="Page sections"><span>On this page</span><a href="#introduction">About</a><a href="#work">01 / Work</a><a href="#research">02 / Research</a><a href="#contact">03 / Contact</a></nav>}
        <section className="concept-intro" id="introduction" tabIndex={-1}>
          {design === 'profile-lava' && <div className="lava-sample sidebar-lamp"><Artwork /></div>}
          {sidebar && <div className="sidebar-signature" aria-hidden="true">rm<span> / </span></div>}
          {design === 'contour' && <ContourSketch />}
          <p className="concept-kicker">Pittsburgh, PA / Computer science</p>
          <h1>Rowan Morse<span className="concept-period">.</span></h1>
          <p className="concept-bio">My interests are in computer vision, machine learning, vision-language models, diffusion techniques, and artificial intelligence.</p>
          <p className="concept-meta">Expected graduation · April 2027</p>
          <SocialLinks />
          {sidebar ? <nav className="sidebar-page-links" aria-label="Page sections"><a href="#work"><span>01</span> Work</a><a href="#research"><span>02</span> Research</a><a href="#contact"><span>03</span> Contact</a></nav> : <div className="concept-side-index"><a href="#research">01 — Research</a><a href="#work">02 — Selected work</a><a href="#contact">03 — Contact</a></div>}
          {design === 'ascii-rail' && <div className="sidebar-drawing"><AsciiGlobe playing={motion} /></div>}
          {design === 'contour-rail' && <div className="sidebar-drawing"><ContourSketch /></div>}
        </section>
        <div className="concept-content">
          {design === 'content-lava' && <div className="lava-sample content-lamp"><Artwork /></div>}
          {!refined && <ResearchBlock number="01" />}
          <section className="concept-section" id="work" tabIndex={-1}>
            <h2><span>{refined ? '01' : '02'}</span> Selected work</h2>
            <div className="concept-projects">{projects.map((original, index) => {
              const project = { ...original, url: original.url === '?page=writing' ? `?design=${design}&page=writing` : original.url };
              return <article className="concept-project" key={project.title}>
              {refined && <span className="index-entry-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
              <a className="concept-image" href={project.url}><img src={project.image} alt={project.alt} loading="lazy" /><span aria-hidden="true">0{index + 1} <OutArrow /></span></a>
              <div className="concept-project-copy"><p className="concept-kicker">{project.tags}</p><h3><a href={project.url}>{project.title}</a></h3><p>{project.description}</p><div className="concept-links"><a href={project.url}>Writeup <OutArrow /></a><a href={project.source}>Source <OutArrow /></a></div></div>
            </article>; })}</div>
          </section>
          {refined && <ResearchBlock number="02" />}
          <section className="concept-section concept-contact" id="contact" tabIndex={-1}><h2><span>03</span> Contact</h2><a className="concept-email" href="mailto:rowan.morse16@gmail.com">rowan.morse16@gmail.com <OutArrow /></a><SocialLinks /></section>
        </div>
      </main> : <main className="concept-writeup">
        {lavaPlacement && design !== 'navbar-lava' && <div className="lava-sample writeup-lamp"><Artwork /></div>}
        <button className="concept-back" onClick={() => setPage('home')}><ArrowLeft size={15} /> Back to selected work</button>
        <p className="concept-kicker">Project notes / Diffusion</p><h1>Satellite Image Generator</h1>
        <div className="concept-article-body"><p className="concept-standfirst">Diffusion (DDIM or DDPM) from scratch to generate Sentinel-2 10m resolution synthetic imagery.</p>
          <div className="concept-article-facts"><span>64 × 64 px images</span><span>2 hours on A100</span></div>
          <h2>Description</h2><p>Quick hack I put together. Images generated are only 64×64px. Took 2 hours to train on A100.</p>
          <figure><img src="/sat_diffusion/sd_results.png" alt="Grid of satellite images generated by the diffusion model" /><figcaption>Results — 60 epochs, more than 20,000 steps.</figcaption></figure>
          <h2>Next experiments</h2><p>In the future (when my Google Colab credits refresh), I plan on trying the following:</p><ol><li>Increasing image size (e.g. 128px, 256px)</li><li>Latent diffusion, to enable larger image sizes</li><li>Use higher resolution satellite images (NAIP, 1m resolution)</li><li>Use text embeddings to guide image generation (maybe simple biomes like “urban” or “desert”)</li><li>Cleanup data to have less variability</li></ol>
          <div className="concept-links"><a href="https://github.com/morse-rowan/satellite_diffusion">View source <OutArrow /></a><a href="/#/portfolio/sat_diffusion">Full existing writeup <OutArrow /></a></div>
        </div>
      </main>}
      <footer className="concept-footer"><span>Rowan Morse</span><span>Computer vision · Machine learning</span></footer>
    </div>
    </div>
    <a className="gallery-return" href="#design-controls">↑ Compare drafts</a>
  </div>;
}
