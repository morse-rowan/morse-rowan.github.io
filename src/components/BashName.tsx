import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const firstName = 'rowan ';
const surname = 'morse';
// International Morse for MORSE, rendered with underscores as dashes.
const code = '__ ___ ._. ... .';
type Frame = { first: string; last: string; duration: number };
const frames: Frame[] = [];
for (let i = 1; i <= firstName.length; i++) frames.push({ first: firstName.slice(0, i), last: '', duration: 90 });
const repeatFrom = frames.length;
for (const [text, step] of [[code, 55], [surname, 105]] as const) {
  for (let i = 1; i <= text.length; i++) frames.push({ first: firstName, last: text.slice(0, i), duration: step });
  frames.push({ first: firstName, last: text, duration: 3200 });
  for (let i = text.length - 1; i >= 0; i--) frames.push({ first: firstName, last: text.slice(0, i), duration: 40 });
  frames.push({ first: firstName, last: '', duration: 220 });
}

export default function BashName() {
  const element = useRef<HTMLAnchorElement>(null);
  const progress = useRef({ index: 0, remaining: frames[0].duration });
  const [frame, setFrame] = useState(frames[0]);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(preference.matches);
    preference.addEventListener('change', change);
    return () => preference.removeEventListener('change', change);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let visible = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let started = 0;
    const stop = () => {
      if (timer === undefined) return;
      clearTimeout(timer);
      timer = undefined;
      progress.current.remaining = Math.max(0, progress.current.remaining - (performance.now() - started));
    };
    const start = () => {
      if (!visible || document.hidden || timer !== undefined) return;
      started = performance.now();
      timer = setTimeout(() => {
        timer = undefined;
        const next = progress.current.index + 1;
        progress.current.index = next === frames.length ? repeatFrom : next;
        const current = frames[progress.current.index];
        progress.current.remaining = current.duration;
        setFrame(current);
        start();
      }, progress.current.remaining);
    };
    const visibility = () => { if (document.hidden) stop(); else start(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else stop();
    }, { threshold: 0.1 });
    if (element.current) observer.observe(element.current);
    document.addEventListener('visibilitychange', visibility);
    return () => { stop(); observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, [reduced]);

  return <div className="bash-brand-group">
    <Link ref={element} className="site-brand bash-brand" to="/" aria-label="Rowan Morse home">
      <span aria-hidden="true" className="bash-line"><span className="bash-host">my@site</span><span className="bash-sign">:~$ </span><span className="bash-first">{reduced ? firstName : frame.first}</span><span className="bash-last">{reduced ? surname : frame.last}</span>{!reduced && <span className="bash-cursor" />}</span>
    </Link>
  </div>;
}
