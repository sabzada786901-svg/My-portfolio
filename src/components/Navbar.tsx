import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight, Sparkles, Globe, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'about', 'skills', 'services', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'journey', label: t.nav.journey },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-theme-header border-b border-theme py-3 card-shadow backdrop-blur-md'
          : 'bg-theme-header/90 border-b border-theme/60 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity (Brand: 21-23px, Subtitle: 13-14px) */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
            aria-label="Gull Muhammad Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-theme-card border border-theme flex items-center justify-center p-2 overflow-hidden transition-all duration-200 group-hover:border-theme-accent card-shadow">
              <img
                src={theme === 'dark' ? '/assets/logo-blue.png' : '/assets/logo-icon.png'}
                alt="Brand Logo"
                className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[21px] sm:text-[22px] tracking-tight text-theme-main group-hover:text-theme-accent transition-colors flex items-center gap-2 leading-tight">
                {language === 'ur' ? 'گل محمد' : 'Gull Muhammad'}
                <span className="inline-block w-2 h-2 rounded-full bg-theme-accent"></span>
              </span>
              <span className="text-[13px] sm:text-[13.5px] text-theme-secondary font-medium tracking-normal leading-tight">
                {language === 'ur' ? 'اے آئی ایجنٹ انجینئر' : 'AI Agent Engineer & Web Developer'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Typography: 15-16px, comfortable spacing) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-theme-card border border-theme rounded-full px-3 py-1.5 card-shadow">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 text-[15px] sm:text-[15.5px] font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-theme-accent text-white shadow-xs'
                      : 'text-theme-secondary hover:text-theme-main hover:bg-theme-card-subtle'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items: Theme Toggle, Language Switcher (14-15px), Hire Me (15-16px) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-theme-card border border-theme text-theme-main hover:border-theme-accent transition-all cursor-pointer card-shadow"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F59E0B] transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-theme-accent transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Language Switcher (14-15px typography, enhanced visibility) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-theme-card border border-theme text-[14px] sm:text-[14.5px] font-medium text-theme-main hover:border-theme-accent transition-all cursor-pointer card-shadow"
              title={language === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'}
            >
              <Globe className="w-4 h-4 text-theme-accent" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Hire Me CTA Button with Enhanced Hover Effects */}
            <button
              onClick={() => scrollTo('contact')}
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] sm:text-[15.5px] font-semibold text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_20px_rgba(0,217,245,0.5)] hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.98] transition-all duration-300 card-shadow cursor-pointer group"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'} group-hover:-translate-y-0.5`} />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-card border border-theme text-theme-main"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F59E0B]" />
              ) : (
                <Moon className="w-4 h-4 text-theme-accent" />
              )}
            </button>

            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-card border border-theme text-[13.5px] font-medium text-theme-main"
            >
              <Globe className="w-3.5 h-3.5 text-theme-accent" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-theme-card border border-theme text-theme-secondary hover:text-theme-main"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-theme-card border-b border-theme px-4 pt-4 pb-6 mt-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-theme-accent/10 text-theme-accent border border-theme-accent/30'
                    : 'text-theme-secondary hover:bg-theme-card-subtle hover:text-theme-main'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-4 h-4 text-theme-accent" />}
              </button>
            ))}

            <button
              onClick={() => scrollTo('contact')}
              className="mt-3 w-full py-3 rounded-xl text-[15px] font-semibold text-white bg-theme-accent text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
