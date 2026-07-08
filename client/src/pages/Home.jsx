import { Link } from 'react-router-dom';
import './Home.css';

const featuredProjects = [
  {
    id: 1,
    title: 'Developer Portfolio Website',
    category: 'Full-Stack',
    description: 'A modern, responsive personal portfolio website showcasing my projects, technical skills, achievements, and contact information.',
    tags: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/portfolio.png',
    color: '#d4e6d0',
  },
  {
    id: 2,
    title: 'NextGen Dashboard',
    category: 'Frontend',
    description: 'A modern analytics dashboard featuring responsive layouts, interactive components, and a clean interface.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    image: '/dashboard.png',
    color: '#e8e0d0',
  },
  {
    id: 3,
    title: 'Meditation Website',
    category: 'Full-Stack',
    description: 'A calming and responsive meditation website designed to promote mindfulness through an intuitive user interface.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: '/meditation.png',
    color: '#dce8dc',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-motif" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`motif motif--${i + 1}`} />
          ))}
        </div>

        <div className="container hero__content">
          <p className="hero__label fade-up">
            <span className="hero__label-dot" />
            Available for freelance &amp; full-time
          </p>

          <h1 className="hero__title fade-up fade-up-delay-1">
            Developer &<br />
            <em>Digital Craftsman</em>
          </h1>

          <p className="hero__bio fade-up fade-up-delay-2">
            Hi, I'm Shreya. I build clean code, calm interfaces 🍵, and performant web applications with a focus on thoughtful UX and solid engineering. Specialising in React, Node.js, and MongoDB.
          </p>

          <div className="hero__actions fade-up fade-up-delay-3">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>

          <div className="hero__stats fade-up fade-up-delay-4">
            {[
              { num: '3+', label: 'Projects' },
              { num: 'MERN', label: 'Specialization' },
              { num: 'AI & DSA', label: 'Learning' },
            ].map(({ num, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-num">{num}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="featured__view-all">
              View all →
            </Link>
          </div>

          <div className="featured__grid">
            {featuredProjects.map((project, i) => (
              <article
                key={project.id}
                className="project-card"
                style={{ '--card-bg': project.color, animationDelay: `${i * 0.1}s` }}
              >
                <div className="project-card__thumb">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-card__img" />
                  ) : (
                    <div className="project-card__thumb-bg" style={{ background: project.color }} />
                  )}
                  <div className="project-card__overlay" />
                  <span className="project-card__category">{project.category}</span>
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="section-label">Let's work together</p>
            <h2 className="cta-band__title">Have a project in mind?</h2>
          </div>
          <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
        </div>
      </section>
    </div>
  );
}