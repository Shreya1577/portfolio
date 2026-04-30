import { useContactForm } from '../hooks/useContactForm';
import './Contact.css';

const contactInfo = [
  { label: 'Email',    value: 'hello@yourname.dev',   href: 'mailto:shreyadey1577@gmail.com' },
  { label: 'GitHub',   value: 'github.com/Shreya1577', href: 'https://github.com/Shreya1577' },
  { label: 'LinkedIn', value: 'linkedin.com/in/you',   href: 'https://www.linkedin.com/in/shreya-dey-949724326' },
];

export default function Contact() {
  const {
    form, errors, status, apiError,
    handleChange, handleSubmit, reset,
  } = useContactForm();

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <div className="contact__header fade-up">
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title">Let's Build<br /><em>Something Together</em></h1>
        </div>

        <div className="contact__layout">
          {/* Info panel */}
          <aside className="contact__info fade-up fade-up-delay-1">
            <p className="contact__info-intro">
              Whether you have a project in mind, a question, or just want to say
              hello — my inbox is always open.
            </p>

            <div className="contact__links">
              {contactInfo.map(({ label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact__link-row">
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-value">{value} ↗</span>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <span className="availability-dot" />
              <span>Currently available for new projects</span>
            </div>
          </aside>

          {/* Form */}
          <div className="contact__form-wrap fade-up fade-up-delay-2">
            {status === 'success' ? (
              <div className="contact__success">
                <div className="success-icon">✦</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
                <button className="btn-outline" onClick={reset}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row form-row--2col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Tell me about your project, idea, or question..."
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="form-api-error">{apiError}</div>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <><span className="spinner" /> Sending...</>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}