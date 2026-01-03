'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../layout/themeToggle';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { i18n } = useTranslation();

  const [isPaymentSolutionsOpen, setIsPaymentSolutionsOpen] = React.useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileCategory, setMobileCategory] = React.useState<string | null>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'ja', name: '日本語' },
  ];

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    setIsLanguageOpen(false);
  };

  const handleMobileCategory = (title: string) => {
    setMobileCategory((prev) => (prev === title ? null : title));
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-[var(--color-header)]
        text-[var(--color-header-foreground)]
        border-b border-[var(--color-header-border)]
        backdrop-blur-sm
      "
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/assets/JuiceWallet.png" alt="Juice" className="h-8" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setIsPaymentSolutionsOpen(!isPaymentSolutionsOpen)}
              onBlur={() => setTimeout(() => setIsPaymentSolutionsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              PAYMENT SOLUTIONS
              <ChevronDown className="h-4 w-4" />
            </button>

            {isPaymentSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white rounded-lg shadow-lg border border-[var(--color-header-border)] p-6">
                {/* content unchanged */}
              </div>
            )}
          </div>

          <a
            href="/rfp"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            FAQs
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Language Switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              onBlur={() => setTimeout(() => setIsLanguageOpen(false), 150)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Globe className="h-5 w-5" />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-[var(--color-header-border)] py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      i18n.language === lang.code
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              bg-[var(--color-header)]
              border-t border-[var(--color-header-border)]
            "
          >
            <div className="p-4 space-y-6">
              <div className="font-medium text-sm text-gray-600 dark:text-gray-300">
                PAYMENT SOLUTIONS
              </div>

              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
