import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Globe,
  Zap,
  Palette,
  CheckCircle2,
  Send,
  FileText,
  Sparkles,
  ShieldCheck,
  Download,
  Eye,
  ChevronDown,
} from 'lucide-react';
import { CvPreviewModal } from './modals/CvPreviewModal';

export const About: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  // Close CV menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
        setCvMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownloadCv = () => {
    setCvMenuOpen(false);
    const link = document.createElement('a');
    link.href = '/assets/gull-muhammad-cv.jpg';
    link.download = 'Gull_Muhammad_CV.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewCv = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCvMenuOpen(false);
    setCvModalOpen(true);
  };

  const scrollToContact = (subjectPreset?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (subjectPreset) {
        const subjectInput = document.getElementById('contact-subject') as HTMLInputElement | null;
        if (subjectInput) {
          subjectInput.value = subjectPreset;
        }
      }
    }
  };

  const identityPillars = [
    {
      title: language === 'ur' ? 'اے آئی ایجنٹ انجینئر' : 'AI Agent Engineer',
      desc: language === 'ur' ? 'خود مختار اور ٹول استعمال کرنے والے ایجنٹس' : 'Autonomous multi-step reasoning & tool calling',
      icon: Bot,
      color: 'text-theme-accent',
    },
    {
      title: language === 'ur' ? 'ویب ڈویلپر' : 'Web Developer',
      desc: language === 'ur' ? 'جدید، تیز رفتار اور فل اسٹیک ویب سائٹس' : 'High-performance React & TypeScript engineering',
      icon: Globe,
      color: 'text-theme-accent',
    },
    {
      title: language === 'ur' ? 'اے آئی آٹومیشن اسپیشلسٹ' : 'AI Automation Specialist',
      desc: language === 'ur' ? 'n8n، ویب ہکس اور ڈیٹا پائپ لائنز' : 'Streamlined n8n workflows & API connectors',
      icon: Zap,
      color: 'text-theme-accent',
    },
    {
      title: language === 'ur' ? 'کینوا گرافک ڈیزائنر' : 'Canva Graphic Designer',
      desc: language === 'ur' ? 'برانڈ ڈیزائنز اور معیاری پریزنٹیشنز' : 'Executive decks, branding & digital visual assets',
      icon: Palette,
      color: 'text-theme-accent',
    },
  ];

  const technicalFocusPills = [
    'Autonomous AI Agents',
    'LangChain & LangGraph',
    'Agentic RAG Pipelines',
    'Model Context Protocol (MCP)',
    'Prompt Engineering',
    'React 19 & TypeScript',
    'Tailwind CSS Architecture',
    'n8n Workflow Automation',
    'API Orchestration',
    'Canva Visual Branding',
  ];

  return (
    <section id="about" className="relative pt-24 pb-32 bg-theme-secondary transition-colors duration-300 overflow-visible">
      {/* Background Subtle Gradient (Dark mode only) with local overflow-hidden so it doesn't cause page scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden dark:block absolute top-1/2 left-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-[13px] font-semibold text-theme-accent tracking-wider uppercase mb-3 card-shadow">
            <Sparkles className="w-4 h-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight">
            {t.about.heading}
          </h2>
        </motion.div>

        {/* Main Grid: CIRCULAR Photo Card + Biography Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Composition with Halo Ring (Style matched to Reference) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center w-full max-w-[390px]">
              
              {/* Glowing Circular Cyan Halo Ring with Breathing Pulse */}
              <motion.div
                animate={{
                  opacity: [0.85, 1, 0.85],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: 'easeInOut',
                }}
                className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] md:w-[470px] md:h-[470px] rounded-full border-2 border-[#00D9F5] shadow-[0_0_50px_rgba(0,217,245,0.7),0_0_90px_rgba(0,217,245,0.35)] pointer-events-none z-0"
              />

              {/* Second subtle outer concentric cyan ring */}
              <div className="absolute -top-14 sm:-top-20 left-1/2 -translate-x-1/2 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[530px] md:h-[530px] rounded-full border border-[#00D9F5]/25 pointer-events-none z-0" />

              {/* Executive Suit Portrait Container */}
              <div className="relative z-10 w-full rounded-3xl overflow-hidden bg-theme-card border-2 border-theme card-shadow group">
                <picture>
                  <source srcSet="/assets/gull-muhammad-suit.webp" type="image/webp" />
                  <img
                    src="/assets/gull-muhammad-suit.jpg"
                    alt="Gull Muhammad Portrait"
                    className="w-full h-auto aspect-square object-cover object-top filter contrast-[1.02] brightness-[1.0] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </picture>

                {/* Subtle bottom gradient fade for depth */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-theme-card/80 via-theme-card/20 to-transparent pointer-events-none" />
              </div>

              {/* Status Pill Badge underneath Circle */}
              <div className="relative z-10 mt-6 px-4.5 py-2.5 rounded-full bg-theme-card border border-theme flex items-center gap-2.5 card-shadow">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0" />
                <span className="text-[13.5px] font-semibold text-theme-main">
                  {language === 'ur' ? 'گل محمد • اے آئی ایجنٹ انجینئر' : 'Gull Muhammad • AI Agent Engineer'}
                </span>
                <ShieldCheck className="w-4 h-4 text-theme-accent" />
              </div>

              {/* Two Quick Specialization Mini Cards */}
              <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 w-full max-w-[360px] text-center">
                <div className="p-3.5 rounded-xl bg-theme-card border border-theme card-shadow hover:border-theme-accent transition-colors">
                  <span className="text-[11px] text-theme-muted font-medium block mb-0.5">
                    {language === 'ur' ? 'بنیادی توجہ' : 'Specialization'}
                  </span>
                  <span className="text-[13.5px] font-bold text-theme-accent">
                    AI Agents & RAG
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-theme-card border border-theme card-shadow hover:border-theme-accent transition-colors">
                  <span className="text-[11px] text-theme-muted font-medium block mb-0.5">
                    {language === 'ur' ? 'سسٹم ڈیزائن' : 'Engineering'}
                  </span>
                  <span className="text-[13.5px] font-bold text-theme-accent">
                    Full-Stack Web
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative, Identity, Interests & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Core Narrative as specified */}
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme mb-8 w-full card-shadow">
              <p className="text-[16px] sm:text-[17px] text-theme-main leading-relaxed mb-4 whitespace-pre-line font-medium">
                {t.about.intro}
              </p>
            </div>

            {/* Professional Identity Pillars */}
            <div className="w-full mb-8">
              <h3 className="text-[14px] font-semibold tracking-wider uppercase text-theme-accent mb-4 flex items-center gap-2">
                <Bot className="w-4 h-4 text-theme-accent" />
                <span>{t.about.identityTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {identityPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-4.5 rounded-xl bg-theme-card border border-theme hover:border-theme-accent transition-all duration-200 flex items-start gap-3.5 card-shadow"
                    >
                      <div className="p-2.5 rounded-lg bg-theme-card-subtle border border-theme shrink-0 mt-0.5">
                        <Icon className={`w-4.5 h-4.5 ${pillar.color}`} />
                      </div>
                      <div>
                        <h4 className="text-[15.5px] font-semibold text-theme-main mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-[13.5px] text-theme-secondary leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Professional Interests */}
            <div className="w-full mb-8">
              <h3 className="text-[14px] font-semibold tracking-wider uppercase text-theme-accent mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-theme-accent" />
                <span>{t.about.interestsTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.about.interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-theme-card border border-theme text-[13.5px] font-medium text-theme-main card-shadow hover:border-theme-accent transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                    <span>{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Focus Tags */}
            <div className="w-full mb-8">
              <h3 className="text-[12px] font-semibold tracking-wider uppercase text-theme-muted mb-3">
                {t.about.technicalFocusTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalFocusPills.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="px-3.5 py-2 rounded-lg bg-theme-card border border-theme text-[13px] font-medium text-theme-secondary hover:text-theme-main hover:border-theme-accent transition-colors card-shadow cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Call To Action Buttons with Enhanced Hover Effects */}
            <div className="flex flex-wrap items-center gap-4 w-full pt-2">
              <button
                type="button"
                onClick={() => scrollToContact()}
                className="px-6 py-3.5 rounded-xl font-medium text-[15px] text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_24px_rgba(0,217,245,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 card-shadow flex items-center gap-2 cursor-pointer group"
              >
                <span>{t.about.letsConnect}</span>
                <Send className={`w-4 h-4 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
              </button>

              {/* CV Action Button with 2-Option Popover Dropdown */}
              <div className="relative" ref={cvDropdownRef}>
                <button
                  type="button"
                  onClick={() => setCvMenuOpen((prev) => !prev)}
                  className="px-6 py-3.5 rounded-xl font-medium text-[15px] text-theme-main bg-theme-card border border-theme hover:border-theme-accent hover:shadow-[0_0_20px_rgba(0,217,245,0.35)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer group card-shadow"
                  aria-expanded={cvMenuOpen}
                >
                  <FileText className="w-4.5 h-4.5 text-theme-accent group-hover:scale-110 transition-transform duration-200" />
                  <span>{language === 'ur' ? 'سی وی (CV / Resume)' : 'Curriculum Vitae'}</span>
                  <ChevronDown className={`w-4 h-4 text-theme-secondary transition-transform duration-200 ${cvMenuOpen ? 'rotate-180 text-theme-accent' : ''}`} />
                </button>

                {/* Dropdown with 2 Options: 1. Download CV, 2. Preview CV (Always opens UPWARD so it is never clipped) */}
                <AnimatePresence>
                  {cvMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute bottom-full mb-3.5 ${isRTL ? 'right-0' : 'left-0'} w-72 sm:w-80 rounded-2xl bg-theme-card border-2 border-theme-accent/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 p-2.5 backdrop-blur-2xl`}
                    >
                      {/* Downward Pointer Caret */}
                      <div
                        className={`absolute -bottom-2 ${isRTL ? 'right-8' : 'left-8'} w-3.5 h-3.5 bg-theme-card border-r-2 border-b-2 border-theme-accent/50 rotate-45 transform`}
                      />

                      <div className="px-3 py-1.5 border-b border-theme/60 mb-1 flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-theme-muted">
                          {language === 'ur' ? 'سی وی کے اختیارات' : 'CV Options'}
                        </span>
                        <span className="text-[10px] text-theme-accent font-mono font-medium">Gull Muhammad</span>
                      </div>

                      {/* Option 1: Download CV */}
                      <button
                        type="button"
                        onClick={handleDownloadCv}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-theme-accent/15 hover:border-theme-accent/50 border border-transparent text-theme-main hover:text-theme-accent transition-all duration-200 cursor-pointer group text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-theme-card-subtle border border-theme flex items-center justify-center text-theme-accent group-hover:border-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all shrink-0">
                            <Download className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                          <div>
                            <span className="text-[13.5px] font-semibold block leading-tight">
                              {language === 'ur' ? '1. سی وی ڈاؤن لوڈ کریں' : '1. Download CV'}
                            </span>
                            <span className="text-[11px] text-theme-muted">
                              {language === 'ur' ? 'فائل محفوظ کریں' : 'Save JPG to device'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-theme-card-subtle border border-theme text-theme-accent shrink-0">
                          JPG
                        </span>
                      </button>

                      {/* Option 2: Preview CV */}
                      <button
                        type="button"
                        onClick={handlePreviewCv}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-theme-accent/15 hover:border-theme-accent/50 border border-transparent text-theme-main hover:text-theme-accent transition-all duration-200 cursor-pointer group text-left mt-1"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-theme-card-subtle border border-theme flex items-center justify-center text-theme-accent group-hover:border-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all shrink-0">
                            <Eye className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <span className="text-[13.5px] font-semibold block leading-tight">
                              {language === 'ur' ? '2. سی وی دیکھیں' : '2. Preview CV'}
                            </span>
                            <span className="text-[11px] text-theme-muted">
                              {language === 'ur' ? 'اسکرین پر مکمل دیکھیں' : 'Interactive full view'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-theme-card-subtle border border-theme text-theme-accent shrink-0">
                          Preview
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Full-Screen CV Preview Modal */}
      <CvPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </section>
  );
};
