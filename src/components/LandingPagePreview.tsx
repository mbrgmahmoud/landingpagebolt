import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Eye, Code, ExternalLink } from 'lucide-react';
import { GeneratedPage } from '../types';

interface LandingPagePreviewProps {
  generatedPage: GeneratedPage;
}

export const LandingPagePreview: React.FC<LandingPagePreviewProps> = ({ generatedPage }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const downloadHTML = () => {
    const blob = new Blob([generatedPage.html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `landing-page-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const openInNewWindow = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(generatedPage.html);
      newWindow.document.close();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'preview'
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Eye className="h-4 w-4" />
            <span>{t('preview')}</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'code'
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Code className="h-4 w-4" />
            <span>HTML</span>
          </button>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={openInNewWindow}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open</span>
          </button>
          <button
            onClick={downloadHTML}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all"
          >
            <Download className="h-4 w-4" />
            <span>{t('download')}</span>
          </button>
        </div>
      </div>

      <div className="h-96 overflow-hidden">
        {activeTab === 'preview' ? (
          <iframe
            srcDoc={generatedPage.html}
            className="w-full h-full border-0"
            title="Landing Page Preview"
          />
        ) : (
          <div className="h-full overflow-auto">
            <pre className="p-6 text-sm bg-gray-50 h-full overflow-auto">
              <code className="text-gray-800">{generatedPage.html}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};