import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Milestone,
  Terminal,
  Code2,
  Bot,
  Zap,
  Cpu,
  Layers,
} from 'lucide-react';

export const Journey: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  const phaseIcons: Record<string, any> = {
    'step-1': Terminal,
    'step-2': Code2,
    'step-3': Cpu,
    'step-4': Bot,
    'step-5': Zap,
    'step-6': Layers,
  };

  return (
    <section id="journey" className="relative py-24 bg-theme-secondary transition-colors duration-300 overflow-hidden">
      {/* Background Accent (Dark mode only) */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-[13px] font-semibold text-theme-accent tracking-wider uppercase mb-3 card-shadow">
            <Milestone className="w-4 h-4" />
            <span>{t.journey.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight mb-4">
            {t.journey.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-theme-secondary leading-relaxed">
            {t.journey.subheading}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div
            className={`absolute top-0 bottom-0 ${
              isRTL ? 'right-4 sm:right-1/2' : 'left-4 sm:left-1/2'
            } w-0.5 bg-gradient-to-b from-theme-accent via-border-theme to-theme-accent/40 sm:-translate-x-1/2 pointer-events-none`}
          />

          <div className="space-y-12">
            {JOURNEY_MILESTONES.map((item, index) => {
              const Icon = phaseIcons[item.id] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Central Node Marker */}
                  <div
                    className={`absolute ${
                      isRTL ? 'right-4 sm:right-1/2' : 'left-4 sm:left-1/2'
                    } top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-theme-card border-2 border-theme-accent flex items-center justify-center z-10 card-shadow`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-theme-accent" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] ${
                      isRTL ? 'pr-12 sm:pr-0' : 'pl-12 sm:pl-0'
                    }`}
                  >
                    <div className="rounded-2xl bg-theme-card border border-theme p-6 card-shadow hover:border-theme-accent transition-all duration-200 group">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[12px] font-mono font-semibold px-2.5 py-1 rounded bg-theme-card-subtle border border-theme text-theme-accent">
                          {language === 'ur' ? item.phaseUr : item.phase}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-theme-card-subtle border border-theme flex items-center justify-center card-shadow">
                          <Icon className="w-4.5 h-4.5 text-theme-accent" />
                        </div>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-theme-main mb-2 group-hover:text-theme-accent transition-colors">
                        {language === 'ur' ? item.titleUr : item.title}
                      </h3>

                      {/* Narrative */}
                      <p className="text-[14px] text-theme-secondary leading-relaxed mb-4">
                        {language === 'ur' ? item.descriptionUr : item.description}
                      </p>

                      {/* Focus Areas List */}
                      <div className="pt-3 border-t border-theme">
                        <span className="text-[11px] uppercase tracking-wider text-theme-muted font-medium block mb-2">
                          {t.journey.coreCompetencies}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(language === 'ur' ? item.focusAreasUr : item.focusAreas).map((area, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-[12px] px-2.5 py-1 rounded-md bg-theme-card-subtle border border-theme text-theme-main font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty side for layout symmetry */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
