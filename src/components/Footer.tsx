import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { SocialLinksBar } from './SocialLinks';

export const Footer: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { theme } = useTheme();
  const currentYear = 2026;

  /* Newsletter state */
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim() || !emailRegex.test(newsletterEmail.trim())) {
      setSubscribeStatus('error');
      setErrorMessage(t.footer.validEmailNotice);
      return;
    }

    setSubscribeStatus('success');
    setErrorMessage('');
  };

  const resetNewsletter = () => {
    setNewsletterEmail('');
    setSubscribeStatus('idle');
  };

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'journey', label: t.nav.journey },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer
      className={`relative mt-16 transition-colors duration-300 overflow-hidden text-left ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#0D1320] via-[#0B101C] to-[#080B12]'
          : 'bg-gradient-to-br from-[#E8ECF2] via-[#E4E9F0] to-[#DFE5ED]'
      } border-t border-theme rounded-tl-[50px] sm:rounded-tl-[80px] md:rounded-tl-[100px] ${
        isRTL
          ? 'rounded-tl-none rounded-tr-[50px] sm:rounded-tr-[80px] md:rounded-tr-[100px]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        
        {/* Three-Column Grid with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-theme items-start"
        >
          
          {/* COLUMN 1 — CONTACT / ABOUT (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Heading: Get In Touch */}
            <div className="mb-6">
              <h3 className="text-[19px] sm:text-[20px] font-bold text-theme-main tracking-tight">
                {t.footer.getInTouch}
              </h3>
              {/* Animated underline track & runner */}
              <div className="relative w-16 h-1 rounded-full bg-theme-secondary overflow-hidden mt-2">
                <span className="absolute top-0 bottom-0 w-6 rounded-full bg-theme-accent animate-footer-runner" />
              </div>
            </div>

            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-theme-card border border-theme flex items-center justify-center p-2 card-shadow group transition-transform hover:scale-105">
                <img
                  src={theme === 'dark' ? '/assets/logo-blue.png' : '/assets/logo-icon.png'}
                  alt="Original Brand Logo"
                  className="w-full h-full object-contain filter"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[22px] sm:text-[24px] font-bold text-theme-main tracking-tight leading-tight">
                  {language === 'ur' ? t.footer.name : 'Gull Muhammad'}
                </h4>
                <p className="text-[14px] sm:text-[15px] text-theme-accent font-medium leading-tight mt-0.5">
                  {language === 'ur' ? t.footer.role : 'AI Agent Engineer & Web Developer'}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-theme-secondary leading-relaxed max-w-md mb-6 font-normal">
              {t.footer.description}
            </p>

            {/* Professional Contact Trigger with Envelope Icon */}
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-theme-card border border-theme text-[13.5px] font-medium text-theme-main hover:border-theme-accent hover:text-theme-accent transition-all cursor-pointer card-shadow group"
            >
              <div className="w-6 h-6 rounded-full bg-theme-card-subtle flex items-center justify-center text-theme-accent">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>{language === 'ur' ? 'مجھ سے رابطہ کریں' : 'Send Direct Message'}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {/* COLUMN 2 — QUICK LINKS (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            
            {/* Heading: Quick Links */}
            <div className="mb-6">
              <h3 className="text-[19px] sm:text-[20px] font-bold text-theme-main tracking-tight">
                {t.footer.quickLinks}
              </h3>
              {/* Animated underline */}
              <div className="relative w-16 h-1 rounded-full bg-theme-secondary overflow-hidden mt-2">
                <span className="absolute top-0 bottom-0 w-6 rounded-full bg-theme-accent animate-footer-runner" />
              </div>
            </div>

            {/* Quick Links List */}
            <ul className="space-y-2.5 w-full">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group inline-flex items-center gap-2 text-[15px] font-medium text-theme-secondary hover:text-theme-accent transition-all duration-200 cursor-pointer text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className={`transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — NEWSLETTER & SOCIAL LINKS (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            
            {/* Heading: Stay Connected */}
            <div className="mb-6">
              <h3 className="text-[19px] sm:text-[20px] font-bold text-theme-main tracking-tight">
                {t.footer.stayConnected}
              </h3>
              {/* Animated underline */}
              <div className="relative w-16 h-1 rounded-full bg-theme-secondary overflow-hidden mt-2">
                <span className="absolute top-0 bottom-0 w-6 rounded-full bg-theme-accent animate-footer-runner" />
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="w-full mb-7">
              {subscribeStatus === 'success' ? (
                <div className="p-3.5 rounded-xl bg-theme-card border border-theme card-shadow flex items-center justify-between gap-3 text-[13.5px] text-theme-main">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                    <span>{t.footer.subscribed}</span>
                  </div>
                  <button
                    onClick={resetNewsletter}
                    className="text-[12px] text-theme-accent font-semibold hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} noValidate className="relative w-full">
                  <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-muted">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (subscribeStatus === 'error') setSubscribeStatus('idle');
                      }}
                      placeholder={t.footer.newsletterPlaceholder}
                      className="w-full pl-10 pr-12 py-3 rounded-xl bg-theme-card border border-theme text-[14px] text-theme-main placeholder-theme-muted focus:outline-none focus:border-theme-accent card-shadow transition-colors"
                    />
                    <button
                      type="submit"
                      aria-label="Submit newsletter"
                      className={`absolute right-1.5 p-2 rounded-lg bg-theme-accent hover:opacity-90 text-white transition-all cursor-pointer group/btn ${
                        isRTL ? 'right-auto left-1.5' : ''
                      }`}
                    >
                      <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`} />
                    </button>
                  </div>
                  {subscribeStatus === 'error' && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Circular Social Media Icons (GitHub, LinkedIn, Facebook, TikTok) */}
            <div className="w-full">
              <span className="text-[12px] uppercase tracking-wider text-theme-muted font-semibold block mb-3">
                {language === 'ur' ? 'سوشل پلیٹ فارمز' : 'Follow & Connect'}
              </span>
              <SocialLinksBar />
            </div>

          </div>

        </motion.div>

        {/* COPYRIGHT & BACK TO TOP BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] sm:text-[14px] text-theme-secondary">
          <p>
            © {currentYear} <span className="text-theme-main font-semibold">Gull Muhammad</span>. {t.footer.rights}
          </p>

          {/* Back to top with animated arrow */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-theme-card border border-theme text-[13.5px] font-medium text-theme-main hover:border-theme-accent hover:text-theme-accent transition-all cursor-pointer group card-shadow"
            aria-label="Scroll back to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4 text-theme-accent transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};
