import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase, GraduationCap, Wrench, Languages } from 'lucide-react';

export default function ModernTemplate({ data }) {
  const { personalInfo, summary, experiences, education, skills, languages } = data;

  return (
    <div className="template-modern">
      {/* Coluna da Esquerda: Resumo e Experiências */}
      <div className="modern-left">
        <div>
          <h1 className="resume-name">{personalInfo.fullName || 'Seu Nome'}</h1>
          <p className="resume-title">{personalInfo.title || 'Seu Cargo/Título'}</p>
        </div>

        {summary && (
          <div>
            <h2 className="resume-section-title accented">Sobre Mim</h2>
            <p className="resume-summary-text">{summary}</p>
          </div>
        )}

        {experiences && experiences.length > 0 && (
          <div>
            <h2 className="resume-section-title accented">
              <Briefcase size={16} style={{ marginRight: '4px' }} />
              Experiência Profissional
            </h2>
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

        {education && education.length > 0 && (
          <div>
            <h2 className="resume-section-title accented">
              <GraduationCap size={16} style={{ marginRight: '4px' }} />
              Formação Acadêmica
            </h2>
            <div className="resume-list-items">
              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="resume-list-item">
                  <div className="item-title-row">
                    <span>{edu.degree}</span>
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
      </div>

      {/* Coluna da Direita: Contato, Habilidades e Idiomas */}
      <div className="modern-right">
        <div>
          <h2 className="resume-section-title">Contato</h2>
          <div className="contact-info-list">
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

        {skills && skills.length > 0 && (
          <div>
            <h2 className="resume-section-title">
              <Wrench size={14} style={{ marginRight: '4px' }} />
              Habilidades
            </h2>
            <div className="resume-skills-grid">
              {skills.map((skill, idx) => (
                <span key={idx} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {languages && languages.length > 0 && (
          <div>
            <h2 className="resume-section-title">
              <Languages size={14} style={{ marginRight: '4px' }} />
              Idiomas
            </h2>
            <div className="resume-skills-grid">
              {languages.map((lang, idx) => (
                <span key={idx} className="resume-skill-tag">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
