import React from 'react';
import ModernTemplate from './templates/ModernTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import CreativeTemplate from './templates/CreativeTemplate';

export default function ResumePreview({ data, templateId }) {
  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'minimalist':
        return <MinimalistTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="resume-paper" id="resume-print-area">
      {renderTemplate()}
    </div>
  );
}
