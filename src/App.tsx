import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { URLInput } from './components/URLInput';
import { LandingPagePreview } from './components/LandingPagePreview';
import { Stats } from './components/Stats';
import { GPTService } from './services/gptService';
import { GeneratedPage } from './types';
import './i18n';

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPage, setGeneratedPage] = useState<GeneratedPage | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    document.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const handleGenerate = async (url: string, language: 'en' | 'ar') => {
    setIsLoading(true);
    try {
      const productData = await GPTService.generateProductData(url, language);
      const html = GPTService.generateLandingPageHTML(productData, language);
      
      setGeneratedPage({
        html,
        productData,
        language
      });
    } catch (error) {
      console.error('Error generating landing page:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header onLanguageChange={handleLanguageChange} currentLanguage={currentLanguage} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stats />
          
          <URLInput onGenerate={handleGenerate} isLoading={isLoading} />
          
          <AnimatePresence>
            {generatedPage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <LandingPagePreview generatedPage={generatedPage} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-sm mx-4">
              <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Generating Landing Page
              </h3>
              <p className="text-gray-600">
                Using AI to create your perfect landing page...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;