import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    category: 'Full-Stack',
    description: 'My own portfolio built with React, Socket.io, and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Shreya1577/portfolio',
    live: 'https://portfolio-p4eq.vercel.app/about',
    color: '#d4e6d0',
  },
  {
    id: 2,
    title: 'Project Beta',
    category: 'Frontend',
    description: 'A pixel-perfect e-commerce UI with cart management and checkout flow.',
    problem: 'Client had a working backend but a dated, conversion-killing interface.',
    process: 'Component audit → Figma redesign → React implementation with Context API.',
    result: 'Improved mobile conversion by 30% post-launch.',
    tags: ['React', 'Redux', 'CSS Modules'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#e8e0d0',
  },
  {
    id: 3,
    title: 'Project Gamma',
    category: 'Backend',
    description: 'A RESTful weather API aggregator with caching and rate limiting.',
    problem: 'Multiple weather sources with inconsistent schemas made data unreliable.',
    process: 'Built normalisation layer in Express, added Redis caching, documented with Swagger.',
    result: 'Response time cut from 900ms to ~60ms with cache hits.',
    tags: ['Express', 'Redis', 'REST API', 'MongoDB'],
    github: 'https://github.com',
    live: null,
    color: '#dce8dc',
  },
  {
    id: 4,
    title: 'Project Delta',
    category: 'Full-Stack',
    description: 'A personal finance tracker with visual analytics and bank-like UX.',
    problem: 'Existing apps felt bloated. Wanted something calm and focused.',
    process: 'Defined 5 core flows, kept data model simple, used Recharts for visualisation.',
    result: 'Used personally every day — the best sign a product is working.',
    tags: ['React', 'Node.js', 'Chart.js', 'JWT'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#e0dce8',
  },
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects__header fade-up">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Projects</h1>
        </div>

        {/* Filter */}
        <div className="projects__filter fade-up fade-up-delay-1">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`pcard ${expanded === project.id ? 'pcard--expanded' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="pcard__thumb" style={{ background: project.color }}>
                <span className="pcard__cat-badge">{project.category}</span>
                <div className="pcard__thumb-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="pcard__link">
                    GitHub ↗
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="pcard__link">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="pcard__body">
                <h2 className="pcard__title">{project.title}</h2>
                <p className="pcard__desc">{project.description}</p>

                <div className="pcard__tags">
                  {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <button
                  className="pcard__toggle"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? 'Hide case study ↑' : 'Read case study ↓'}
                </button>

                {expanded === project.id && (
                  <div className="pcard__case">
                    <div className="pcard__case-item">
                      <span className="pcard__case-label">Problem</span>
                      <p>{project.problem}</p>
                    </div>
                    <div className="pcard__case-item">
                      <span className="pcard__case-label">Process</span>
                      <p>{project.process}</p>
                    </div>
                    <div className="pcard__case-item">
                      <span className="pcard__case-label">Result</span>
                      <p>{project.result}</p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}