import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Developer Portfolio Website',
    category: 'Full-Stack',
    description: 'A modern, responsive personal portfolio website showcasing my projects, technical skills, achievements, and contact information. Designed with a clean UI, smooth animations, and reusable React components.',
    problem: 'I needed a professional online portfolio to present my skills, projects, and learning journey to recruiters and collaborators.',
    process: 'Designed and developed a responsive portfolio using React and Vite, focusing on component-based architecture, reusable UI elements, and modern design principles.',
    result: 'Built a professional portfolio that serves as my personal brand and showcases my technical growth.',
    tags: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/Shreya1577/portfolio',
    live: 'https://portfolio-p4eq.vercel.app/',
    image: '/portfolio.png',
    color: '#d4e6d0',
  },
  {
    id: 2,
    title: 'NextGen Dashboard',
    category: 'Frontend',
    description: 'A modern analytics dashboard featuring responsive layouts, interactive components, and a clean interface for displaying data and application metrics.',
    problem: 'Build a modern dashboard interface capable of presenting data in a structured, user-friendly way.',
    process: 'Implemented reusable React components, responsive layouts, and dashboard widgets while following modern UI/UX practices.',
    result: 'Created a scalable dashboard template suitable for analytics, admin panels, and business applications.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Dashboard UI'],
    github: 'https://github.com/Shreya1577/nextgen-dashboard',
    live: 'https://nextgen-dashboard-seven.vercel.app/',
    image: '/dashboard.png',
    color: '#e8e0d0',
  },
  {
    id: 3,
    title: 'Meditation Website',
    category: 'Full-Stack',
    description: 'A calming and responsive meditation website designed to promote mindfulness through an intuitive user interface and relaxing visual experience.',
    problem: 'Create an engaging meditation platform with a peaceful user experience and accessible interface.',
    process: 'Developed responsive layouts, organized sections for meditation content, and focused on clean design with smooth navigation.',
    result: 'Delivered a visually appealing website demonstrating responsive design and frontend development skills.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Shreya1577/Meditation',
    live: 'https://auraflow-phi.vercel.app/',
    image: '/meditation.png',
    color: '#dce8dc',
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
              <div className="pcard__thumb">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="pcard__img" />
                ) : (
                  <div className="pcard__thumb-bg" style={{ background: project.color }} />
                )}
                <div className="pcard__overlay" />
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