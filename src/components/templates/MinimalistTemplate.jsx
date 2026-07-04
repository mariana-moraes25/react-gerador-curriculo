import React from 'react';

export default function MinimalistTemplate({ data }) {
  const { personalInfo, summary, experiences, education, skills, languages } = data;

  return (
    <div className="template-minimalist">
      {/* Header Centralizado */}
      <div className="minimal-header">
        <h1 className="resume-name">{personalInfo.fullName || 'Seu Nome'}</h1>
        <p className="resume-title">{personalInfo.title || 'Seu Cargo/Título'}</p>
        
        <div className="minimal-contact-row">
          {personalInfo.email && <span className="contact-item">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="contact-item">{personalInfo.phone}</span>}
          {personalInfo.location && <span className="contact-item">{personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="contact-item">{personalInfo.linkedin}</span>}
          {personalInfo.github && <span className="contact-item">{personalInfo.github}</span>}
          {personalInfo.website && <span className="contact-item">{personalInfo.website}</span>}
        </div>
      </div>

      {/* Sobre Mim */}
      {summary && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Sobre</h2>
            <div className="minimal-section-content">
              <p className="resume-summary-text">{summary}</p>
            </div>
          </div>
          <div className="minimal-divider"></div>
        </>
      )}

      {/* Experiências */}
      {experiences && experiences.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Experiência</h2>
            <div className="minimal-section-content">
              {experiences.map((exp, idx) => (
                <div key={exp.id || idx} className="resume-list-item">
                  <div className="item-title-row">
                    <span>{exp.role}</span>
                    <span>{exp.company}</span>
                  </div>
                  <div className="item-subtitle-row">
                    <span>{exp.startDate} – {exp.endDate}</span>
                  </div>
                  {exp.description && (
                    <p className="item-desc">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="minimal-divider"></div>
        </>
      )}

      {/* Educação */}
      {education && education.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Educação</h2>
            <div className="minimal-section-content">
              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="resume-list-item">
                  <div className="item-title-row">
                    <span>{edu.degree}</span>
                    <span>{edu.institution}</span>
                  </div>
                  <div className="item-subtitle-row">
                    <span>{edu.startDate} – {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="minimal-divider"></div>
        </>
      )}

      {/* Habilidades */}
      {skills && skills.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Skills</h2>
            <div className="minimal-section-content">
              <div className="resume-skills-grid">
                {skills.map((skill, idx) => (
                  <span key={idx} className="resume-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="minimal-divider"></div>
        </>
      )}

      {/* Idiomas */}
      {languages && languages.length > 0 && (
        <div className="minimal-section">
          <h2 className="minimal-section-title">Idiomas</h2>
          <div className="minimal-section-content">
            <div className="resume-skills-grid">
              {languages.map((lang, idx) => (
                <span key={idx} className="resume-skill-tag">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
