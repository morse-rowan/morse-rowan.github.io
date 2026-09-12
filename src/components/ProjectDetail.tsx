import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import TypographySwitch from './TypographySwitch';
import { useTypographyPreference } from '../hooks/useTypographyPreference';
import { projects } from '../content/projects';
import { writeupImages } from '../content/writeupImages';

// Generate stable heading targets for the existing Markdown table of contents.
type HtmlNode = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: HtmlNode[] };
const textOf = (node: HtmlNode): string => node.value || node.children?.map(textOf).join('') || '';
const slugOf = (value: string) => value.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/[\s-]+/g, '-');
function headingIds() {
  return (tree: HtmlNode) => {
    const seen = new Map<string, number>();
    const visit = (node: HtmlNode) => {
      if (node.tagName && /^h[1-6]$/.test(node.tagName)) {
        const slug = slugOf(textOf(node));
        const count = seen.get(slug) || 0;
        seen.set(slug, count + 1);
        node.properties = { ...node.properties, id: count ? `${slug}-${count}` : slug, tabIndex: -1 };
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
const anchorAliases: Record<string, string> = {
  dataset: 'dataset-pipeline',
  'prioritizing-recall': 'prioritizing-recall-weighted-binary-cross-entropy-loss',
};

export default function ProjectDetail() {
  const [typography, setTypography] = useTypographyPreference('writeup');
  const [content, setContent] = useState<{ slug?: string; markdown: string; error: boolean }>({ markdown: '', error: false });
  const { projectId } = useParams();
  const project = projects.find(item => item.slug === projectId && item.writeup);
  const location = useLocation();
  const loading = Boolean(project) && content.slug !== projectId;
  const withBaseUrl = (url: string) => url.startsWith('/') ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${url}` : url;

  useEffect(() => {
    if (!project?.writeup) return;
    const controller = new AbortController();
    fetch(withBaseUrl(project.writeup), { signal: controller.signal }).then(async response => {
      if (!response.ok || response.headers.get('content-type')?.includes('text/html')) throw new Error('Writeup unavailable');
      const markdown = await response.text();
      if (!controller.signal.aborted) setContent({ slug: projectId, markdown, error: false });
    }).catch(() => {
      if (!controller.signal.aborted) setContent({ slug: projectId, markdown: '', error: true });
    });
    return () => controller.abort();
  }, [projectId, project?.writeup]);

  useEffect(() => {
    if (loading || content.error) return;
    const section = new URLSearchParams(location.search).get('section');
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(section || 'main-content');
      target?.focus({ preventScroll: true });
      if (section) target?.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [loading, content.error, location.key, location.search]);

  return <div className="article-layout">
    <div className="writeup-toolbar">
      <Link to="/?section=work" className="article-back"><ArrowLeft size={15} /> Back to selected work</Link>
      <TypographySwitch label="Writeup font" value={typography} onChange={setTypography} />
    </div>
    {loading ? <p className="article-status" role="status">Loading writeup…</p> : !project || content.error ? <div className="article-status"><h1>Writeup unavailable</h1><p>The project details could not be loaded.</p>{project && <a href={project.source}>View project source</a>}</div> : <>
      <p className="eyebrow article-label">{project.category}</p>
      <article className="writeup-text prose prose-lg max-w-none" data-writeup-font={typography}>
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, headingIds, rehypeKatex]}
          urlTransform={url => /^(https?:|data:|#)/.test(url) ? url : withBaseUrl(url)}
          components={{
            img: ({ node: _node, ...props }) => {
              const size = writeupImages[props.src || ''];
              const width = props.width || size?.[0];
              const height = props.height || (size && width ? Number(width) * size[1] / size[0] : undefined);
              return <img {...props} width={width} height={height} loading="lazy" decoding="async" />;
            },
            a: ({ node: _node, href, children, ...props }) => {
              if (!href?.startsWith('#')) return <a {...props} href={href}>{children}</a>;
              const raw = slugOf(decodeURIComponent(href.slice(1)));
              const section = anchorAliases[raw] || raw;
              return <Link to={`${location.pathname}?section=${encodeURIComponent(section)}`}>{children}</Link>;
            },
          }}
        >{content.markdown}</ReactMarkdown>
      </article>
    </>}
  </div>;
}
