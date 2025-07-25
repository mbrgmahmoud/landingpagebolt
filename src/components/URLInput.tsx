import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Loader2 } from 'lucide-react';

interface URLInputProps {
  onGenerate: (url: string, language: 'en' | 'ar') => void;
  isLoading: boolean;
}

export const URLInput: React.FC<URLInputProps> = ({ onGenerate, isLoading }) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onGenerate(url, language);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {t('productUrl')}
          </label>
          <div className="relative">
            <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t('productUrlPlaceholder')}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {t('language')}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`p-4 rounded-xl border-2 transition-all ${
                language === 'en'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="font-semibold">{t('english')}</div>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`p-4 rounded-xl border-2 transition-all ${
                language === 'ar'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="text-2xl mb-2">🇸🇦</div>
              <div className="font-semibold">{t('arabic')}</div>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>{t('generating')}</span>
            </>
          ) : (
            <span>{t('generate')}</span>
          )}
        </button>
      </form>
    </div>
  );
};