import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { publications } from '../content/publications';

function SocialLinks() {
  return <div className="text-links"><a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a><a href={profile.github}>GitHub <ArrowUpRight /></a><a href={profile.linkedin}>LinkedIn <ArrowUpRight /></a></div>;
}

export default function Home() {
  return <div className="home-layout">
    <aside className="profile-column" aria-label="About Rowan">
      <p className="eyebrow">{profile.location} / {profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="profile-bio">{profile.bio}</p>
      <p className="profile-meta">Expected graduation · {profile.graduation}</p>
      <SocialLinks />
      <nav className="section-index" aria-label="Page sections">
        <Link to="/?section=work"><span>01</span> Work</Link><Link to="/?section=research"><span>02</span> Research</Link><Link to="/?section=contact"><span>03</span> Contact</Link>
      </nav>
    </aside>
    <div className="home-content">
      <section className="home-section" id="work" tabIndex={-1}>
        <h2><span>01</span> Selected work</h2>
        <div className="project-list">{projects.map(project => <article className="project-row" key={project.slug}>
          <div className="project-copy">
            <p className="eyebrow">{project.category}</p>
            <h3>{project.writeup ? <Link to={`/portfolio/${project.slug}`}>{project.title}</Link> : <a href={project.detailUrl || project.source}>{project.title}</a>}</h3>
            <p className="project-description">{project.description}</p>
            {project.awards && <ul className="project-awards">{project.awards.map(award => <li key={award}>{award}</li>)}</ul>}
            <div className="text-links">
              {project.writeup && <Link to={`/portfolio/${project.slug}`}>Writeup <ArrowUpRight /></Link>}
              {project.detailUrl && <a href={project.detailUrl}>Read more <ArrowUpRight /></a>}
              <a href={project.source}>Source <ArrowUpRight /></a>
              {project.demo && <a href={project.demo}>Demo <ArrowUpRight /></a>}
            </div>
            <details className="project-tech"><summary>Technologies</summary><p>{project.tags.join(' · ')}</p></details>
          </div>
          <img className="project-thumbnail" src={project.image} alt={`${project.title} preview`} width={75} height={69} loading="lazy" decoding="async" />
        </article>)}</div>
      </section>
      <section className="home-section" id="research" tabIndex={-1}>
        <h2><span>02</span> Research</h2>
        {publications.map(paper => <article key={paper.url}>
          <h3><a href={paper.url}>{paper.title}</a></h3>
          <p className="paper-authors">{paper.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{author === profile.name ? <strong>{author}</strong> : author}</span>)}</p>
          <p className="paper-award">{paper.award}</p>
          <div className="text-links"><a href={paper.url}>Read paper <ArrowUpRight /></a></div>
        </article>)}
      </section>
      <section className="home-section" id="contact" tabIndex={-1}>
        <h2><span>03</span> Contact</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={15} /></a>
        <SocialLinks />
      </section>
    </div>
  </div>;
}
