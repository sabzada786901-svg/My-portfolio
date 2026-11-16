import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Code2,
  Zap,
  Palette,
  Sparkles,
  Check,
  Cpu,
  Layers,
  Terminal,
  Workflow,
  PenTool,
  Boxes,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, any> = {
    'ai-agents': Bot,
    'web-dev': Code2,
    automation: Zap,
    design: Palette,
  };

  const getSkillIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('agent') || lower.includes('rag')) return Bot;
    if (lower.includes('lang') || lower.includes('graph')) return Workflow;
    if (lower.includes('openai') || lower.includes('gemini') || lower.includes('claude')) return Cpu;
    if (lower.includes('mcp')) return Layers;
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('javascript')) return Terminal;
    if (lower.includes('n8n') || lower.includes('webhook') || lower.includes('automation')) return Zap;
    if (lower.includes('design') || lower.includes('canva') || lower.includes('ui')) return PenTool;
    return Boxes;
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-theme-primary transition-colors duration-300 overflow-hidden">
      {/* Background accents (dark mode only) */}
      <div className="hidden dark:block absolute top-0 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-0 left-1/4 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-[13px] font-semibold text-theme-accent tracking-wider uppercase mb-3 card-shadow">
            <Sparkles className="w-4 h-4" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight mb-4">
            {t.skills.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-theme-secondary leading-relaxed">
            {t.skills.subheading}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {t.skills.categories.all}
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-theme-accent text-white card-shadow'
                    : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-theme-accent'}`} />
                <span>{language === 'ur' ? cat.titleUr : cat.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Categorized Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const CategoryIcon = categoryIcons[category.id] || Sparkles;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-theme-card border border-theme p-6 sm:p-7 card-shadow flex flex-col justify-between hover:border-theme-accent transition-all duration-200 group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-theme">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-theme-card-subtle border border-theme flex items-center justify-center group-hover:border-theme-accent transition-colors card-shadow">
                          <CategoryIcon className="w-5 h-5 text-theme-accent" />
                        </div>
                        <div>
                          <h3 className="text-[17px] sm:text-[18px] font-bold text-theme-main">
                            {language === 'ur' ? category.titleUr : category.title}
                          </h3>
                          <span className="text-[13px] text-theme-muted font-medium">
                            {category.skills.length} {language === 'ur' ? 'اہم ٹیکنالوجیز' : 'Core Technologies'}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-theme-card-subtle border border-theme text-theme-accent">
                        {category.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Skill Items Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {category.skills.map((skill, sIdx) => {
                        const ItemIcon = getSkillIcon(skill.name);
                        return (
                          <div
                            key={sIdx}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all duration-200 ${
                              skill.highlight
                                ? 'bg-theme-card-subtle border-theme hover:border-theme-accent'
                                : 'bg-theme-card-subtle/60 border-theme hover:border-theme-accent/60'
                            }`}
                          >
                            <div className="w-7 h-7 rounded-lg bg-theme-card border border-theme flex items-center justify-center shrink-0 card-shadow">
                              <ItemIcon className="w-3.5 h-3.5 text-theme-accent" />
                            </div>
                            <span className="text-[13.5px] font-medium text-theme-main tracking-tight">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <Check className="w-3.5 h-3.5 text-theme-accent ml-auto shrink-0 opacity-80" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Minimal authentic badge note */}
                  <div className="mt-6 pt-4 border-t border-theme flex items-center justify-between text-[12.5px] text-theme-muted">
                    <span>{t.skills.legend}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-theme-accent" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
