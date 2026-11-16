import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowUp,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

/* Social Icon SVGs */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 2C6.495 2 2 6.49 2 12.019c0 1.765.46 3.488 1.332 5.006L2 22l5.129-1.317c1.464.798 3.11 1.218 4.902 1.218 5.535 0 10.03-4.49 10.03-10.019C22.061 6.49 17.566 2 12.031 2zm5.882 14.152c-.244.686-1.42 1.258-1.956 1.34-.51.077-1.173.11-1.897-.123-.44-.142-1.008-.33-1.74-.648-3.076-1.334-5.083-4.44-5.237-4.646-.154-.206-1.246-1.657-1.246-3.161 0-1.504.789-2.244 1.07-2.544.281-.3.612-.375.816-.375.204 0 .408.002.587.01.19.009.444-.072.695.53.255.612.87 2.124.947 2.278.077.155.128.335.026.541-.102.206-.153.334-.306.514-.153.18-.322.402-.46.54-.153.153-.313.32-.134.629.179.309.794 1.309 1.704 2.119 1.17 1.042 2.156 1.365 2.463 1.519.306.154.485.128.664-.078.179-.206.766-.893.97-1.199.204-.307.408-.256.689-.153.281.103 1.785.843 2.091.996.306.154.51.231.587.359.077.128.077.744-.167 1.43z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterXIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.35 9.29-.09-.79-.17-2 .03-2.86.19-.79 1.25-5.32 1.25-5.32s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.58 1.93 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.47-4.35-3.05 0-4.84 2.29-4.84 4.65 0 .92.35 1.91.8 2.44.09.11.1.2.07.31-.08.33-.26 1.05-.29 1.2-.05.19-.16.23-.37.14-1.39-.64-2.26-2.67-2.26-4.3 0-3.5 2.54-6.72 7.34-6.72 3.86 0 6.85 2.75 6.85 6.42 0 3.83-2.42 6.91-5.77 6.91-1.13 0-2.19-.59-2.55-1.28l-.69 2.65c-.25.97-.93 2.19-1.39 2.93A10.02 10.02 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

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

  /* Social links list */
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      action: () => scrollTo('contact'),
      title: 'Contact via WhatsApp / Inquiries',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      action: () => scrollTo('contact'),
      title: 'Facebook Profile / Portfolio Inquiries',
    },
    {
      name: 'Twitter / X',
      icon: TwitterXIcon,
      action: () => scrollTo('contact'),
      title: 'Twitter / X / Tech Updates',
    },
    {
      name: 'Pinterest',
      icon: PinterestIcon,
      action: () => scrollTo('contact'),
      title: 'Pinterest Design Showcase',
    },
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
        
        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-theme items-start">
          
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

            {/* Circular Social Media Icons */}
            <div className="w-full">
              <span className="text-[12px] uppercase tracking-wider text-theme-muted font-semibold block mb-3">
                {language === 'ur' ? 'سوشل پلیٹ فارمز' : 'Follow & Connect'}
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      title={item.title}
                      aria-label={item.name}
                      className="w-10.5 h-10.5 rounded-full bg-theme-card border border-theme flex items-center justify-center text-theme-secondary hover:text-white hover:bg-theme-accent hover:border-theme-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer card-shadow"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

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
