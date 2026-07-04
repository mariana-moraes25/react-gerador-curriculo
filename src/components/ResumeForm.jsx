import React, { useState } from 'react';
import { User, FileText, Briefcase, GraduationCap, Code, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ResumeForm({ data, onChange }) {
  const [activeSection, setActiveSection] = useState('personal');
  const [skillInput, setSkillInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Helper for updating nested personalInfo
  const handlePersonalChange = (field, value) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value
      }
    });
  };

  // Helper for updating summary
  const handleSummaryChange = (value) => {
    onChange({
      ...data,
      summary: value
    });
  };

  // Experience Handlers
  const handleExperienceChange = (index, field, value) => {
    const updated = [...data.experiences];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, experiences: updated });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experiences: [
        ...data.experiences,
        { id: Date.now().toString(), company: '', role: '', startDate: '', endDate: '', description: '' }
      ]
    });
  };

  const removeExperience = (index) => {
    const updated = data.experiences.filter((_, i) => i !== index);
    onChange({ ...data, experiences: updated });
  };

  // Education Handlers
  const handleEducationChange = (index, field, value) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, education: updated });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        { id: Date.now().toString(), institution: '', degree: '', startDate: '', endDate: '' }
      ]
    });
  };

  const removeEducation = (index) => {
    const updated = data.education.filter((_, i) => i !== index);
    onChange({ ...data, education: updated });
  };

  // Skills Handlers
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      onChange({
        ...data,
        skills: [...data.skills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    onChange({
      ...data,
      skills: data.skills.filter(s => s !== skillToRemove)
    });
  };

  // Languages Handlers
  const handleAddLanguage = (e) => {
    e.preventDefault();
    if (languageInput.trim() && !data.languages.includes(languageInput.trim())) {
      onChange({
        ...data,
        languages: [...data.languages, languageInput.trim()]
      });
      setLanguageInput('');
    }
  };

  const handleRemoveLanguage = (langToRemove) => {
    onChange({
      ...data,
      languages: data.languages.filter(l => l !== langToRemove)
    });
  };

  return (
    <div className="editor-pane">
      <div>
        <h2 className="pane-title">Criar Currículo</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-text-muted)', marginTop: '0.5rem' }}>
          Preencha as informações abaixo para ver o currículo atualizado em tempo real.
        </p>
      </div>

      {/* 1. DADOS PESSOAIS */}
      <div className={`form-section ${activeSection === 'personal' ? 'active' : ''}`}>
        <div className="form-section-header" onClick={() => toggleSection('personal')}>
          <div className="form-section-title-wrapper">
            <span className="section-icon"><User size={18} /></span>
            <h3>Dados Pessoais</h3>
          </div>
          {activeSection === 'personal' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {activeSection === 'personal' && (
          <div className="form-section-content">
            <div className="form-group">
              <label htmlFor="fullName">Nome Completo</label>
              <input
                id="fullName"
                type="text"
                value={data.personalInfo.fullName || ''}
                onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                placeholder="Ex: Lucas Silva"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="title">Título Profissional</label>
              <input
                id="title"
                type="text"
                value={data.personalInfo.title || ''}
                onChange={(e) => handlePersonalChange('title', e.target.value)}
                placeholder="Ex: Desenvolvedor Front-end Sênior"
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={data.personalInfo.email || ''}
                  onChange={(e) => handlePersonalChange('email', e.target.value)}
                  placeholder="lucas@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  id="phone"
                  type="text"
                  value={data.personalInfo.phone || ''}
                  onChange={(e) => handlePersonalChange('phone', e.target.value)}
                  placeholder="(11) 98765-4321"
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="location">Localização</label>
                <input
                  id="location"
                  type="text"
                  value={data.personalInfo.location || ''}
                  onChange={(e) => handlePersonalChange('location', e.target.value)}
                  placeholder="São Paulo, SP"
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn (usuário/link)</label>
                <input
                  id="linkedin"
                  type="text"
                  value={data.personalInfo.linkedin || ''}
                  onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                  placeholder="linkedin.com/in/usuario"
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="github">GitHub (usuário/link)</label>
                <input
                  id="github"
                  type="text"
                  value={data.personalInfo.github || ''}
                  onChange={(e) => handlePersonalChange('github', e.target.value)}
                  placeholder="github.com/usuario"
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website Pessoal</label>
                <input
                  id="website"
                  type="text"
                  value={data.personalInfo.website || ''}
                  onChange={(e) => handlePersonalChange('website', e.target.value)}
                  placeholder="lucas.dev"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. RESUMO */}
      <div className={`form-section ${activeSection === 'summary' ? 'active' : ''}`}>
        <div className="form-section-header" onClick={() => toggleSection('summary')}>
          <div className="form-section-title-wrapper">
            <span className="section-icon"><FileText size={18} /></span>
            <h3>Resumo Profissional</h3>
          </div>
          {activeSection === 'summary' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {activeSection === 'summary' && (
          <div className="form-section-content">
            <div className="form-group">
              <label htmlFor="summary">Sobre Você</label>
              <textarea
                id="summary"
                value={data.summary || ''}
                onChange={(e) => handleSummaryChange(e.target.value)}
                placeholder="Escreva uma breve introdução de sua carreira, objetivos e principais realizações..."
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. EXPERIÊNCIAS */}
      <div className={`form-section ${activeSection === 'experience' ? 'active' : ''}`}>
        <div className="form-section-header" onClick={() => toggleSection('experience')}>
          <div className="form-section-title-wrapper">
            <span className="section-icon"><Briefcase size={18} /></span>
            <h3>Experiência Profissional</h3>
          </div>
          {activeSection === 'experience' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {activeSection === 'experience' && (
          <div className="form-section-content">
            <div className="repeatable-list">
              {data.experiences.map((exp, index) => (
                <div key={exp.id || index} className="repeatable-item">
                  <div className="item-header">
                    <span className="item-index">Cargo #{index + 1}</span>
                    <button className="btn-danger" onClick={() => removeExperience(index)}>
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="form-section-content" style={{ padding: 0, borderTop: 'none', gap: '1rem' }}>
                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Empresa</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                          placeholder="Ex: Tech Solutions"
                        />
                      </div>
                      <div className="form-group">
                        <label>Cargo</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                          placeholder="Ex: Desenvolvedor Front-end"
                        />
                      </div>
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Data de Início</label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                          placeholder="Ex: Jan 2024"
                        />
                      </div>
                      <div className="form-group">
                        <label>Data de Fim</label>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                          placeholder="Ex: Presente"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Descrição das Atividades</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                        placeholder="• Descreva suas responsabilidades e conquistas. Use tópicos."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-outline btn-small" onClick={addExperience} style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              <Plus size={14} /> Adicionar Experiência
            </button>
          </div>
        )}
      </div>

      {/* 4. EDUCAÇÃO */}
      <div className={`form-section ${activeSection === 'education' ? 'active' : ''}`}>
        <div className="form-section-header" onClick={() => toggleSection('education')}>
          <div className="form-section-title-wrapper">
            <span className="section-icon"><GraduationCap size={18} /></span>
            <h3>Formação Acadêmica</h3>
          </div>
          {activeSection === 'education' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {activeSection === 'education' && (
          <div className="form-section-content">
            <div className="repeatable-list">
              {data.education.map((edu, index) => (
                <div key={edu.id || index} className="repeatable-item">
                  <div className="item-header">
                    <span className="item-index">Curso #{index + 1}</span>
                    <button className="btn-danger" onClick={() => removeEducation(index)}>
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="form-section-content" style={{ padding: 0, borderTop: 'none', gap: '1rem' }}>
                    <div className="form-group">
                      <label>Curso / Grau</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                        placeholder="Ex: Bacharelado em Ciência da Computação"
                      />
                    </div>

                    <div className="form-group">
                      <label>Instituição</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                        placeholder="Ex: Universidade de São Paulo"
                      />
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Ano de Início</label>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                          placeholder="Ex: 2017"
                        />
                      </div>
                      <div className="form-group">
                        <label>Ano de Fim / Conclusão</label>
                        <input
                          type="text"
                          value={edu.endDate}
                          onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                          placeholder="Ex: 2021"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-outline btn-small" onClick={addEducation} style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              <Plus size={14} /> Adicionar Formação
            </button>
          </div>
        )}
      </div>

      {/* 5. HABILIDADES E IDIOMAS */}
      <div className={`form-section ${activeSection === 'skills' ? 'active' : ''}`}>
        <div className="form-section-header" onClick={() => toggleSection('skills')}>
          <div className="form-section-title-wrapper">
            <span className="section-icon"><Code size={18} /></span>
            <h3>Habilidades & Idiomas</h3>
          </div>
          {activeSection === 'skills' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {activeSection === 'skills' && (
          <div className="form-section-content">
            {/* Skills tag system */}
            <div className="form-group">
              <label>Habilidades</label>
              <form onSubmit={handleAddSkill} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Ex: React.js (pressione Enter ou clique em +)"
                  style={{ flex: 1 }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>
                  <Plus size={16} />
                </button>
              </form>
              <div className="tags-container">
                {data.skills.map((skill, index) => (
                  <span key={index} className="tag-bubble">
                    {skill}
                    <button type="button" onClick={() => handleRemoveSkill(skill)}>x</button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--gray-border)', margin: '0.5rem 0' }}></div>

            {/* Languages tag system */}
            <div className="form-group">
              <label>Idiomas</label>
              <form onSubmit={handleAddLanguage} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  placeholder="Ex: Inglês (Avançado) (pressione Enter ou clique em +)"
                  style={{ flex: 1 }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>
                  <Plus size={16} />
                </button>
              </form>
              <div className="tags-container">
                {data.languages.map((lang, index) => (
                  <span key={index} className="tag-bubble">
                    {lang}
                    <button type="button" onClick={() => handleRemoveLanguage(lang)}>x</button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
