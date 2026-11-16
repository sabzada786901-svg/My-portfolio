import { useState, useEffect, type FC } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { SocialLinksBar } from './SocialLinks';
import {
  ArrowDown,
  Send,
  Layers,
  Bot,
  Cpu,
  Zap,
  Code2,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

interface TechBadge {
  label: string;
  icon: LucideIcon;
}

const techBadges: TechBadge[] = [
  { label: 'LangChain & LangGraph', icon: Bot },
  { label: 'Gemini & Claude Models', icon: Cpu },
  { label: 'n8n Automation', icon: Zap },
  { label: 'React & TypeScript', icon: Code2 },
];

export const Hero: FC = () => {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roles = t.hero.rotatingRoles;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [t.hero.rotatingRoles]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 lg:pt-44 pb-16 lg:pb-24 overflow-hidden bg-theme-primary transition-colors duration-300"
    >
      {/* Background Subtle Ambient (Dark Mode Only) */}
      <div className="hidden dark:block absolute top-1/4 -left-48 w-96 h-96 bg-[#00D9F5]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00AFCB]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Developer Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-theme-card border border-theme mb-4 card-shadow text-theme-accent"
            >
              <span className="font-mono text-xs font-semibold">&lt;/&gt;</span>
              <span className="text-[13px] font-semibold tracking-wide">
                AI Agent Engineer
              </span>
            </motion.div>

            {/* Main Greeting & Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-2"
            >
              <span className="text-white">Hi, I'm </span> 
              <br />
              <span className="text-white">Gull </span>
              <span className="text-theme-accent">Muhammad</span>
            </motion.h1>

            {/* Rotating Dynamic Role with Vertical Divider */}
            <motion.div
              variants={itemVariants}
              className="h-10 sm:h-12 mb-3 flex items-center gap-3"
            >
              <span className="text-2xl sm:text-3xl font-light text-theme-accent select-none">|</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-accent"
                >
                  <span>{t.hero.rotatingRoles[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Sub-Badges (Role & Location Inspired by Reference Image) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-card border border-theme text-[12.5px] text-theme-secondary">
                <Bot className="w-3.5 h-3.5 text-theme-accent" />
                <span>AI Agent Architect</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-card border border-theme text-[12.5px] text-theme-secondary">
                <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                <span>Faisalabad, Pakistan</span>
              </div>
            </motion.div>

            {/* Professional Description */}
            <motion.p
              variants={itemVariants}
              className="text-[15.5px] sm:text-[16.5px] text-theme-secondary leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons with Enhanced Hover Effects */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-5"
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-[15px] text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_24px_rgba(0,217,245,0.55)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 card-shadow flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t.hero.exploreWork}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-[15px] text-theme-main bg-theme-card border border-theme hover:border-theme-accent hover:shadow-[0_0_20px_rgba(0,217,245,0.35)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group card-shadow"
              >
                <span>{t.hero.letsWork}</span>
                <Send className="w-4 h-4 text-theme-accent transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Social Media Links under CTA Buttons (GitHub, LinkedIn, Facebook, TikTok) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-7"
            >
              <SocialLinksBar />
            </motion.div>

            {/* Tech Stack Horizontal Pill Bar (Reference Style) */}
            <motion.div
              variants={itemVariants}
              className="p-3 sm:px-5 sm:py-3.5 rounded-2xl bg-theme-card/85 border border-theme card-shadow flex flex-wrap items-center gap-3 sm:gap-4 w-full"
            >
              <span className="text-[13px] font-semibold text-theme-main tracking-wide whitespace-nowrap">
                Tech Stack I Work With
              </span>
              <span className="hidden sm:inline text-theme-muted font-light">|</span>
              <div className="flex flex-wrap items-center gap-2">
                {techBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-card-subtle border border-theme/80 text-[12.5px] font-medium text-theme-secondary hover:text-theme-main hover:border-theme-accent transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-theme-accent" />
                      <span>{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Smooth Halo Ring & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative flex items-center justify-center w-full max-w-[390px]">
              
              {/* Glowing Circular Cyan Halo Ring with Breathing Pulse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{
                  opacity: [0.85, 1, 0.85],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  opacity: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
                  scale: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
                }}
                className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] md:w-[470px] md:h-[470px] rounded-full border-2 border-[#00D9F5] shadow-[0_0_50px_rgba(0,217,245,0.7),0_0_90px_rgba(0,217,245,0.35)] pointer-events-none z-0"
              />

              {/* Second subtle outer concentric cyan ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-14 sm:-top-20 left-1/2 -translate-x-1/2 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[530px] md:h-[530px] rounded-full border border-[#00D9F5]/25 pointer-events-none z-0"
              />

              {/* Executive Suit Portrait Container with Smooth Zoom Entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full rounded-3xl overflow-hidden bg-theme-card border-2 border-theme card-shadow group"
              >
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
              </motion.div>

              {/* Floating Badge 1: Autonomous Systems with Floating Idle Motion */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                  y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.6 },
                }}
                className="absolute -top-3 -left-2 sm:-left-4 bg-theme-card border border-theme px-3.5 py-2 rounded-xl card-shadow flex items-center gap-2.5 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-theme-muted font-medium leading-none">
                    Agentic Frameworks
                  </span>
                  <span className="text-[13px] font-semibold text-theme-main leading-tight mt-0.5">
                    LangGraph • MCP
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Modern Web with Opposite Floating Idle Motion */}
              <motion.div
                initial={{ opacity: 0, y: 16, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 7, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.55 },
                  x: { duration: 0.6, delay: 0.55 },
                  y: { repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.8 },
                }}
                className="absolute -bottom-3 -right-2 sm:-right-4 bg-theme-card border border-theme px-3.5 py-2 rounded-xl card-shadow flex items-center gap-2.5 z-20"
              >
                <Layers className="w-4 h-4 text-theme-accent shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-theme-muted font-medium leading-none">
                    Web Engineering
                  </span>
                  <span className="text-[13px] font-semibold text-theme-main leading-tight mt-0.5">
                    React • TypeScript
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
