import React from 'react';
import './Contact.css';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading gradient-heading" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '18px', letterSpacing: '1px' }}>Contact Me</div>
      <p className="contact-subtitle" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px' }}>
        I'd love to connect! Reach out to me via email or LinkedIn.
      </p>
      <div className="contact-links">
        <a href="tel:7906707186" className="contact-link-btn phone-btn" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="phone" style={{ marginRight: '10px' }}>📞</span>
          7906707186
        </a>
        <a href="mailto:radhikasharma@gmail.com" className="contact-link-btn email-btn" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="email" style={{ marginRight: '10px' }}>📧</span>
          radhikasharma@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/radhika-sharma-773a80273/" className="contact-link-btn linkedin-btn" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: 24, height: 24, marginRight: 10, verticalAlign: 'middle' }} />
          LinkedIn Profile
        </a>
        <a href="https://github.com/Radhikasha" className="contact-link-btn github-btn" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" style={{ width: 24, height: 24, marginRight: 10, verticalAlign: 'middle', background: '#fff', borderRadius: '50%' }} />
          GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
