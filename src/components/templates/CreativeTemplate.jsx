import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export default function CreativeTemplate({ data }) {
  const { personalInfo, summary, experiences, education, skills, languages } = data;

  return (
    <div className="template-creative">
      {/* Banner Superior com Cor Sólida */}
      <div className="creative-banner">
        <div>
          <h1 className="resume-name">{personalInfo.fullName || 'Seu Nome'}</h1>
          <p className="resume-title">{personalInfo.title || 'Seu Cargo/Título'}</p>
        </div>
        
        <div className="creative-banner-contact">
          {personalInfo.email && (
            <div className="contact-item">
              <Mail size={12} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="contact-item">
              <Phone size={12} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="contact-item">
              <MapPin size={12} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="contact-item">
              <Linkedin size={12} />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="contact-item">
              <Github size={12} />
              <span>{personalInfo.github}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="contact-item">
              <Globe size={12} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Corpo do Currículo */}
      <div className="creative-body">
        {/* Esquerda: Experiências e Projetos */}
        <div className="creative-left">
          {summary && (
            <div>
              <div className="creative-section-title">
                <span>SOBRE MIM</span>
                <div className="creative-section-title-line"></div>
              </div>
              <p className="resume-summary-text">{summary}</p>
            </div>
          )}

          {experiences && experiences.length > 0 && (
            <div>
              <div className="creative-section-title">
                <span>EXPERIÊNCIA</span>
                <div className="creative-section-title-line"></div>
              </div>
              <div className="resume-list-items">
                {experiences.map((exp, idx) => (
                  <div key={exp.id || idx} className="resume-list-item">
                    <div className="item-title-row">
                      <span>{exp.role}</span>
                      <span>{exp.company}</span>
                    </div>
                    <div className="item-subtitle-row">
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    {exp.description && (
                      <p className="item-desc">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Direita: Educação e Habilidades */}
        <div className="creative-right">
          {education && education.length > 0 && (
            <div>
              <div className="creative-section-title">
                <span>EDUCAÇÃO</span>
                <div className="creative-section-title-line"></div>
              </div>
              <div className="resume-list-items">
                {education.map((edu, idx) => (
                  <div key={edu.id || idx} className="resume-list-item">
                    <div className="item-title-row">
                      <span>{edu.degree}</span>
                    </div>
                    <div className="item-subtitle-row" style={{ marginBottom: 0 }}>
                      <span>{edu.institution}</span>
                    </div>
                    <div className="item-subtitle-row">
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skills && skills.length > 0 && (
            <div>
              <div className="creative-section-title">
                <span>HABILIDADES</span>
                <div className="creative-section-title-line"></div>
              </div>
              <div className="resume-skills-grid">
                {skills.map((skill, idx) => (
                  <span key={idx} className="resume-skill-tag creative-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {languages && languages.length > 0 && (
            <div>
              <div className="creative-section-title">
                <span>IDIOMAS</span>
                <div className="creative-section-title-line"></div>
              </div>
              <div className="resume-skills-grid">
                {languages.map((lang, idx) => (
                  <span key={idx} className="resume-skill-tag creative-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
