import React from 'react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'ja', name: '日本語' },
  ];

  React.useEffect(() => {
    // Load saved language on mount
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) {
      setCurrentLanguage(saved);
    }

    // Listen for language changes from header
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    setIsOpen(false);
    // Dispatch event so header can listen too
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }));
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 ${
                currentLanguage === lang.code 
                  ? 'text-blue-600 dark:text-blue-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}