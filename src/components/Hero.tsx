import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Send, Layers, Bot, Cpu, Zap, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.rotatingRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [t.hero.rotatingRoles.length]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techBadges = [
    { label: 'LangChain', icon: Bot },
    { label: 'Gemini & Claude', icon: Cpu },
    { label: 'n8n Automation', icon: Zap },
    { label: 'React & TypeScript', icon: Code2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:py-0 overflow-hidden bg-theme-primary transition-colors duration-300"
    >
      {/* Background Subtle Ambient (Dark Mode Only to prevent bright light-mode haze) */}
      <div className="hidden dark:block absolute top-1/4 -left-48 w-96 h-96 bg-[#00D9F5]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00AFCB]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Introduction */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme mb-5 card-shadow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
              </span>
              <span className="text-[13px] font-semibold tracking-wider uppercase text-theme-accent">
                {t.hero.greeting}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-main leading-[1.12] mb-3">
              {t.hero.name}
            </h1>

            {/* Rotating Dynamic Title */}
            <div className="h-12 sm:h-14 mb-4 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5 text-xl sm:text-2xl md:text-3xl font-bold text-theme-accent"
                >
                  <Sparkles className="w-5 h-5 text-theme-accent shrink-0" />
                  <span>{t.hero.rotatingRoles[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Professional Description */}
            <p className="text-[16px] sm:text-[17px] text-theme-secondary leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.description}
            </p>

            {/* CTA Buttons with Enhanced Hover Effects */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-[15px] text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_24px_rgba(0,217,245,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 card-shadow flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t.hero.exploreWork}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-[15px] text-theme-main bg-theme-card border border-theme hover:border-theme-accent hover:shadow-[0_0_20px_rgba(0,217,245,0.35)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group card-shadow"
              >
                <span>{t.hero.letsWork}</span>
                <Send className="w-4 h-4 text-theme-accent transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-6 border-t border-theme w-full">
              <span className="text-[12px] uppercase tracking-wider text-theme-muted font-medium block mb-3">
                {language === 'ur' ? 'اہم ٹیکنالوجی اسٹیک' : 'Core Technology Stack'}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {techBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-card border border-theme text-[13px] font-medium text-theme-secondary hover:text-theme-main hover:border-theme-accent transition-colors card-shadow"
                    >
                      <Icon className="w-3.5 h-3.5 text-theme-accent" />
                      <span>{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with Halo Ring (Style matched to Reference) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative flex items-center justify-center w-full max-w-[390px]">
              
              {/* Glowing Circular Cyan Halo Ring (Reference Style - Prominently framing head & shoulders) */}
              <div className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] md:w-[470px] md:h-[470px] rounded-full border-2 border-[#00D9F5] shadow-[0_0_50px_rgba(0,217,245,0.7),0_0_90px_rgba(0,217,245,0.35)] pointer-events-none z-0" />

              {/* Second subtle outer concentric cyan ring */}
              <div className="absolute -top-14 sm:-top-20 left-1/2 -translate-x-1/2 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[530px] md:h-[530px] rounded-full border border-[#00D9F5]/25 pointer-events-none z-0" />

              {/* Executive Suit Portrait Container */}
              <div className="relative z-10 w-full rounded-3xl overflow-hidden bg-theme-card border-2 border-theme card-shadow group">
                <picture>
                  <source srcSet="/assets/gull-muhammad-suit.webp" type="image/webp" />
                  <img
                    src="/assets/gull-muhammad-suit.jpg"
                    alt="Gull Muhammad - AI Agent Engineer"
                    className="w-full h-auto aspect-square object-cover object-top filter brightness-[1.0] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </picture>

                {/* Subtle bottom gradient fade for depth */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-theme-card/80 via-theme-card/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Autonomous Systems */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`absolute -top-3 ${isRTL ? '-right-2 sm:-right-4' : '-left-2 sm:-left-4'} bg-theme-card border border-theme px-3.5 py-2 rounded-xl card-shadow flex items-center gap-2.5 z-20`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-theme-muted font-medium leading-none">
                    {language === 'ur' ? 'فعال فریم ورکس' : 'Agentic Frameworks'}
                  </span>
                  <span className="text-[13px] font-semibold text-theme-main leading-tight mt-0.5">
                    LangGraph • MCP
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Modern Web */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className={`absolute -bottom-3 ${isRTL ? '-left-2 sm:-left-4' : '-right-2 sm:-right-4'} bg-theme-card border border-theme px-3.5 py-2 rounded-xl card-shadow flex items-center gap-2.5 z-20`}
              >
                <Layers className="w-4 h-4 text-theme-accent shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-theme-muted font-medium leading-none">
                    {language === 'ur' ? 'فرنٹ اینڈ آرکیٹیکچر' : 'Web Engineering'}
                  </span>
                  <span className="text-[13px] font-semibold text-theme-main leading-tight mt-0.5">
                    React • TypeScript
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
