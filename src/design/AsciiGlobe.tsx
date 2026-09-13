import { useEffect, useRef } from 'react';

// A small procedural sketch: one text node, 720 cells, at most 12 frames/sec.
// No media downloads or rendering libraries. This is decoration, not content.
function globeFrame(angle: number) {
  const lines: string[] = [];
  for (let row = 0; row < 18; row++) {
    let line = '';
    for (let col = 0; col < 40; col++) {
      const x = (col - 19.5) / 18;
      const y = (row - 8.5) / 8.5;
      const radius = x * x + y * y;
      if (radius > 1) { line += ' '; continue; }
      const z = Math.sqrt(1 - radius);
      const longitude = Math.atan2(x, z) + angle;
      const latitude = Math.asin(y);
      const grid = Math.abs(Math.sin(longitude * 6)) < .19 || Math.abs(Math.sin(latitude * 6)) < .15;
      const light = Math.max(0, -.35 * x - .4 * y + .7 * z);
      line += grid ? (light > .5 ? '+' : ':') : (light > .7 ? '.' : ' ');
    }
    lines.push(line);
  }
  return lines.join('\n');
}

export default function AsciiGlobe({ playing }: { playing: boolean }) {
  const element = useRef<HTMLPreElement>(null);
  const phase = useRef(.3);
  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    function updatePlayback() {
      clearInterval(timer);
      timer = undefined;
      if (!playing || !visible || document.hidden || reducedMotion.matches) return;
      timer = setInterval(() => {
        phase.current += .018;
        node!.textContent = globeFrame(phase.current);
      }, 1000 / 12);
    }
    node.textContent = globeFrame(phase.current);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    observer.observe(node);
    reducedMotion.addEventListener('change', updatePlayback);
    document.addEventListener('visibilitychange', updatePlayback);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      reducedMotion.removeEventListener('change', updatePlayback);
      document.removeEventListener('visibilitychange', updatePlayback);
    };
  }, [playing]);
  return <pre ref={element} className="sidebar-ascii" aria-hidden="true">{globeFrame(.3)}</pre>;
}
