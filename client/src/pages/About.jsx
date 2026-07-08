import './About.css';

const skills = {
  Frontend: ['React', 'Vite', 'CSS', 'JavaScript (ES6+)', 'HTML5'],
  Backend:  ['Node.js', 'Express', 'REST APIs', 'MongoDB / Mongoose', 'JWT Auth'],
  Tools:    ['Git / GitHub', 'Canva', 'Vercel / Render'],
};

const timeline = [
   { year: '2026', event: 'Building Fullstacks & Deploying them gracefully.' },
   { year: '2026', event: 'Started learning and developing backend projects' },
   { year: '2025', event: 'Completed advanced React & focused on Graphic Designing' },
   { year: '2025', event: 'Built simple Frontend projects' }, 
];

export default function About() {
  return (
    <div className="about">
      <div className="container">
        {/* Intro */}
        <section className="about__intro fade-up">
          <div className="about__intro-text">
            <p className="section-label">About Me</p>
            <h1 className="section-title">Curious engineer.<br /><em>Careful designer.</em></h1>
            <p className="about__bio">
              Hi, I'm <strong>Shreya Dey</strong> — a full-stack developer.
              I care deeply about the intersection of engineering quality and user experience.
              When I'm not coding, I'm probably reading about systems design.
            </p>
            <p className="about__bio">
              I believe great software is invisible — it just works, feels right, and gets out
              of the user's way. That philosophy drives every project I take on.
            </p>
          </div>

          <div className="about__intro-card">
            <div className="about__avatar-placeholder">
              <span>SD</span>
            </div>
            <div className="about__quick-facts">
              {[
                { label: 'Location',    value: 'West Bengal, India' },
                { label: 'Speciality',  value: 'MERN Stack , Graphic Designer' },
                { label: 'Available',   value: 'Yes — freelance & part-time' },
                { label: 'Languages',   value: 'English, Hindi, Bengali' },
              ].map(({ label, value }) => (
                <div key={label} className="about__fact">
                  <span className="about__fact-label">{label}</span>
                  <span className="about__fact-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="about__skills">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <div className="skills__grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skills__group">
                <h3 className="skills__category">{category}</h3>
                <ul className="skills__list">
                  {items.map(skill => (
                    <li key={skill} className="skills__item">
                      <span className="skills__bullet">✦</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="about__timeline">
          <p className="section-label">Journey</p>
          <h2 className="section-title">How I Got Here</h2>
          <div className="timeline">
            {timeline.map(({ year, event }, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__year">{year}</div>
                <div className="timeline__connector">
                  <span className="timeline__dot" />
                  {i < timeline.length - 1 && <span className="timeline__line" />}
                </div>
                <div className="timeline__event">{event}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}