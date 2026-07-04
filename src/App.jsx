import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { Download, LayoutTemplate, Sparkles, Printer } from 'lucide-react';

const INITIAL_MOCK_DATA = {
  personalInfo: {
    fullName: "Mateus Alencar",
    title: "Desenvolvedor Full Stack",
    email: "mateus.alencar@email.com",
    phone: "(31) 99888-7766",
    location: "Belo Horizonte, MG",
    linkedin: "linkedin.com/in/mateusalencar",
    github: "github.com/mateusalencar",
    website: "mateusalencar.dev"
  },
  summary: "Desenvolvedor de Software com mais de 4 anos de experiência na criação de soluções web escaláveis de ponta a ponta. Especialista no ecossistema JavaScript/TypeScript, com forte domínio em React, Node.js e bancos de dados. Focado em escrever código limpo, implementar testes automatizados e otimizar a performance de sistemas.",
  experiences: [
    {
      id: "1",
      company: "Core Technologies",
      role: "Desenvolvedor Full Stack Pleno",
      startDate: "Mar 2023",
      endDate: "Presente",
      description: "• Liderança técnica no desenvolvimento de microsserviços em Node.js com TypeScript e APIs RESTful.\n• Refatoração completa da interface administrativa em React.js, reduzindo o tempo de carregamento em 35%.\n• Implementação de pipelines de CI/CD para deploy automatizado na nuvem."
    },
    {
      id: "2",
      company: "Web Labs",
      role: "Desenvolvedor Front-end Junior",
      startDate: "Jul 2021",
      endDate: "Fev 2023",
      description: "• Criação de interfaces responsivas e acessíveis utilizando HTML, CSS, React e styled-components.\n• Otimização de SEO e performance de sites institucionais.\n• Integração com serviços de autenticação e plataformas de pagamento."
    }
  ],
  education: [
    {
      id: "1",
      institution: "Universidade Federal de Minas Gerais (UFMG)",
      degree: "Bacharelado em Sistemas de Informação",
      startDate: "2019",
      endDate: "2023"
    }
  ],
  skills: [
    "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "SQL", "Git", "APIs RESTful", "CSS Grid/Flexbox", "Testes Unitários"
  ],
  languages: [
    "Português (Nativo)", "Inglês (Avançado)"
  ]
};

export default function App() {
  const [resumeData, setResumeData] = useState(INITIAL_MOCK_DATA);
  const [templateId, setTemplateId] = useState('modern');

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Deseja realmente limpar todos os campos? Isso excluirá os dados atuais.")) {
      setResumeData({
        personalInfo: { fullName: '', title: '', email: '', phone: '', location: '', linkedin: '', github: '', website: '' },
        summary: '',
        experiences: [],
        education: [],
        skills: [],
        languages: []
      });
    }
  };

  const handleLoadMock = () => {
    setResumeData(INITIAL_MOCK_DATA);
  };

  return (
    <div className="app-container">
      {/* Navbar Superior */}
      <header className="app-header">
        <div className="brand-section">
          <div className="brand-icon">
            <Sparkles size={20} />
          </div>
          <span className="brand-title">Gerador de Currículo</span>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary btn-small" onClick={handleLoadMock}>
            Carregar Exemplo
          </button>
          <button className="btn btn-secondary btn-small" onClick={handleReset}>
            Limpar Tudo
          </button>
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={16} /> Imprimir / Salvar PDF
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="app-main">
        {/* Editor de Currículo */}
        <ResumeForm data={resumeData} onChange={setResumeData} />

        {/* Visualização de Currículo */}
        <section className="preview-pane">
          {/* Barra de Ferramentas de Visualização */}
          <div className="preview-toolbar">
            <div className="toolbar-title">
              <LayoutTemplate size={16} />
              <span>Modelo de Currículo</span>
            </div>
            
            <div className="template-selector">
              <button 
                className={`template-btn ${templateId === 'modern' ? 'active' : ''}`}
                onClick={() => setTemplateId('modern')}
              >
                Moderno
              </button>
              <button 
                className={`template-btn ${templateId === 'minimalist' ? 'active' : ''}`}
                onClick={() => setTemplateId('minimalist')}
              >
                Minimalista
              </button>
              <button 
                className={`template-btn ${templateId === 'creative' ? 'active' : ''}`}
                onClick={() => setTemplateId('creative')}
              >
                Criativo
              </button>
            </div>
          </div>

          {/* Currículo Final Impresso */}
          <ResumePreview data={resumeData} templateId={templateId} />
        </section>
      </main>
    </div>
  );
}
