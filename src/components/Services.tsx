import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/portfolioData';
import type { Service } from '../types';
import { ServiceDetailModal } from './modals/ServiceDetailModal';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Cpu,
  MessageSquareCode,
  Workflow,
  Layout,
  Layers,
  PenTool,
} from 'lucide-react';

export const Services: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const iconMap: Record<string, any> = {
    Cpu,
    MessageSquareCode,
    Workflow,
    Layout,
    Layers,
    PenTool,
  };

  return (
    <section id="services" className="relative py-24 bg-theme-secondary transition-colors duration-300 overflow-hidden">
      {/* Subtle Glow (Dark mode only) */}
      <div className="hidden dark:block absolute top-1/2 right-10 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-[13px] font-semibold text-theme-accent tracking-wider uppercase mb-3 card-shadow">
            <Sparkles className="w-4 h-4" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight mb-4">
            {t.services.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-theme-secondary leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Cpu;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative rounded-2xl bg-theme-card border border-theme p-7 card-shadow flex flex-col justify-between hover:border-theme-accent transition-all duration-200"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-theme-card-subtle border border-theme flex items-center justify-center mb-6 group-hover:border-theme-accent transition-all card-shadow">
                    <Icon className="w-6 h-6 text-theme-accent group-hover:scale-105 transition-transform" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-theme-main mb-2 group-hover:text-theme-accent transition-colors">
                    {language === 'ur' ? service.titleUr : service.title}
                  </h3>
                  <p className="text-[13px] text-theme-accent mb-4 font-medium leading-relaxed">
                    {language === 'ur' ? service.subtitleUr : service.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-[14px] text-theme-secondary leading-relaxed mb-6 font-normal">
                    {language === 'ur' ? service.descriptionUr : service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-4 border-t border-theme flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-theme-accent hover:opacity-85 transition-colors cursor-pointer group/btn"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                  </button>

                  <span className="text-[12px] font-mono text-theme-muted font-medium">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
