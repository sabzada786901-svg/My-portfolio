import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Service } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight,
  Cpu,
  MessageSquareCode,
  Layout,
  Layers,
  PenTool,
  Send,
} from 'lucide-react';

interface Props {
  service: Service | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<Props> = ({ service, onClose }) => {
  const { t, language, isRTL } = useLanguage();

  if (!service) return null;

  const iconMap: Record<string, any> = {
    Cpu,
    MessageSquareCode,
    Workflow,
    Layout,
    Layers,
    PenTool,
  };

  const IconComponent = iconMap[service.iconName] || Cpu;

  const handleDiscuss = () => {
    onClose();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.getElementById('contact-subject') as HTMLInputElement | null;
      if (subjectInput) {
        subjectInput.value = `Inquiry: ${service.title}`;
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-theme-card border border-theme rounded-2xl p-6 sm:p-8 card-shadow z-10 my-8 text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-xl bg-theme-card-subtle border border-theme text-theme-muted hover:text-theme-main hover:border-theme-accent transition-colors cursor-pointer card-shadow`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-theme-card-subtle border border-theme flex items-center justify-center card-shadow">
              <IconComponent className="w-6 h-6 text-theme-accent" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-theme-main">
                {language === 'ur' ? service.titleUr : service.title}
              </h3>
              <p className="text-[13.5px] text-theme-accent font-medium">
                {language === 'ur' ? service.subtitleUr : service.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[15px] text-theme-secondary leading-relaxed mb-6">
            {language === 'ur' ? service.descriptionUr : service.description}
          </p>

          {/* Key Deliverables */}
          <div className="mb-6">
            <h4 className="text-[13px] font-semibold tracking-wider uppercase text-theme-main mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-theme-accent" />
              <span>{t.services.deliverablesHeading}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(language === 'ur' ? service.deliverablesUr : service.deliverables).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-theme-card-subtle border border-theme text-[13.5px] text-theme-main"
                >
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="mb-8">
            <h4 className="text-[13px] font-semibold tracking-wider uppercase text-theme-main mb-3 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-theme-accent" />
              <span>{t.services.workflowHeading}</span>
            </h4>
            <div className="space-y-2">
              {(language === 'ur' ? service.workflowUr : service.workflow).map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-theme-card-subtle border border-theme text-[13px] text-theme-secondary font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-theme-card border border-theme text-theme-accent flex items-center justify-center font-mono font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-theme">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-[14px] font-medium text-theme-secondary hover:text-theme-main hover:bg-theme-card-subtle transition-colors cursor-pointer"
            >
              {t.services.closeModal}
            </button>

            <button
              onClick={handleDiscuss}
              className="px-5 py-2.5 rounded-xl text-[14.5px] font-semibold text-white bg-theme-accent hover:opacity-95 transition-all flex items-center gap-2 card-shadow cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.services.discussProject}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
