import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { publications } from '../content/publications';
import { experience } from '../content/experience';

const sections = [
  ['experience', 'Experience'], ['projects', 'Projects'],
  ['research', 'Research'], ['contact', 'Contact'],
] as const;

function SocialLinks() {
  return <div className="text-links"><a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a><a href={profile.github}>GitHub <ArrowUpRight /></a><a href={profile.linkedin}>LinkedIn <ArrowUpRight /></a></div>;
}

export default function Home() {
  const orderedProjects = [...projects].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return <div className="home-layout">
    <aside className="profile-column" aria-label="About Rowan">
      <p className="eyebrow">{profile.location} / {profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="profile-bio">{profile.bio}</p>
      <p className="profile-meta">{profile.education}<br />Expected graduation · {profile.graduation}</p>
      <SocialLinks />
      <nav className="section-index" aria-label="Page sections">
        {sections.map(([id, label], index) => <Link to={`/?section=${id}`} key={id}><span>0{index + 1}</span>{label}</Link>)}
      </nav>
    </aside>
    <div className="home-content">
      <section className="home-section" id="experience" tabIndex={-1}>
        <h2><span>01</span> Experience</h2>
        <ol className="timeline-list experience-list">
          {experience.map(job => <li className={`timeline-row${job.current ? ' is-current' : ''}`} key={job.organization}>
            <p className="timeline-date"><span>{job.start}</span><span>— {job.end}</span></p>
            <article className="timeline-copy">
              <h3>{job.organization}</h3>
              <p className="experience-role">{job.role}</p>
              <p className="entry-location">{job.location}</p>
              <p className="entry-description">{job.description}</p>
            </article>
          </li>)}
        </ol>
      </section>
      <section className="home-section" id="projects" tabIndex={-1}>
        <h2><span>02</span> Projects</h2>
        <ol className="timeline-list project-list">{orderedProjects.map(project => <li className="timeline-row" key={project.slug}>
          <p className="timeline-date">{project.period || 'Personal project'}</p>
          <article className="timeline-copy project-row">
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.writeup ? <Link to={`/portfolio/${project.slug}`}>{project.title}</Link> : <a href={project.detailUrl || project.source}>{project.title}</a>}</h3>
              <p className="project-description">{project.description}</p>
              {project.awards && <ul className="project-awards" aria-label={`${project.title} awards`}>
                {project.awards.map(award => <li key={award}>{award}</li>)}
              </ul>}
              <div className="text-links">
                {project.writeup && <Link to={`/portfolio/${project.slug}`}>Writeup <ArrowUpRight /></Link>}
                {project.detailUrl && <a href={project.detailUrl}>Read more <ArrowUpRight /></a>}
                <a href={project.source}>{project.sourceLabel || 'Source'} <ArrowUpRight /></a>
                {project.demo && <a href={project.demo}>Demo <ArrowUpRight /></a>}
              </div>
              <details className="project-tech"><summary>Technologies</summary><p>{project.tags.join(' · ')}</p></details>
            </div>
            {project.image && <a className="project-image-link" href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${project.title} image (new tab)`}>
              <img className="project-thumbnail" src={project.image} alt={`${project.title} preview`} width={project.imageSize?.[0]} height={project.imageSize?.[1]} loading="lazy" decoding="async" />
            </a>}
          </article>
        </li>)}</ol>
      </section>
      <section className="home-section" id="research" tabIndex={-1}>
        <h2><span>03</span> Publications</h2>
        <ol className="timeline-list">
          {publications.map(paper => <li className="timeline-row" key={paper.url}>
            <p className="timeline-date">{paper.date}</p>
            <article className="timeline-copy">
              <p className="eyebrow">{paper.venue}</p>
              <h3><a href={paper.url}>{paper.title}</a></h3>
              <p className="paper-authors">{paper.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{author === profile.name ? <strong>{author}</strong> : author}</span>)}</p>
              <p className="entry-description">{paper.description}</p>
              <div className="text-links"><a href={paper.url}>Read paper <ArrowUpRight /></a></div>
            </article>
          </li>)}
        </ol>
      </section>
      <section className="home-section" id="contact" tabIndex={-1}>
        <h2><span>04</span> Contact</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={15} /></a>
        <SocialLinks />
      </section>
    </div>
  </div>;
}
