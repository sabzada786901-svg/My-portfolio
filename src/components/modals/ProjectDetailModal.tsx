import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Code2,
} from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  const { t, language, isRTL } = useLanguage();

  if (!project) return null;

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
          className="relative w-full max-w-3xl bg-theme-card border border-theme rounded-2xl p-6 sm:p-8 card-shadow z-10 my-8 text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-xl bg-theme-card-subtle border border-theme text-theme-muted hover:text-theme-main hover:border-theme-accent transition-colors cursor-pointer card-shadow`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header & Badges */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md bg-theme-card-subtle border border-theme text-[12px] font-semibold text-theme-accent">
                {language === 'ur' ? project.categoryLabelUr : project.categoryLabel}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-theme-accent/10 border border-theme-accent/30 text-[12px] font-semibold text-theme-accent">
                {language === 'ur' ? project.statusUr : project.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-main tracking-tight mb-1">
              {language === 'ur' ? project.titleUr : project.title}
            </h3>
            <p className="text-[14px] font-medium text-theme-accent">
              {language === 'ur' ? project.taglineUr : project.tagline}
            </p>
          </div>

          {/* Visual Showcase Box */}
          <div className="w-full rounded-xl bg-theme-card-subtle border border-theme p-6 mb-7 relative overflow-hidden card-shadow">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="text-[12px] font-mono text-theme-muted ml-2">
                core-architecture / {project.id}.py
              </span>
            </div>

            <p className="text-[15px] text-theme-main font-medium leading-relaxed">
              {language === 'ur' ? project.descriptionUr : project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
            {/* Problem */}
            <div className="p-4 sm:p-5 rounded-xl bg-theme-card-subtle border border-theme">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#EF4444] mb-2.5">
                <AlertCircle className="w-4 h-4" />
                <span>{t.projects.problemLabel}</span>
              </div>
              <p className="text-[13.5px] text-theme-secondary leading-relaxed">
                {language === 'ur' ? project.problemUr : project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-4 sm:p-5 rounded-xl bg-theme-card-subtle border border-theme">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-theme-accent mb-2.5">
                <Lightbulb className="w-4 h-4" />
                <span>{t.projects.solutionLabel}</span>
              </div>
              <p className="text-[13.5px] text-theme-secondary leading-relaxed">
                {language === 'ur' ? project.solutionUr : project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-7">
            <h4 className="text-[13px] font-semibold tracking-wider uppercase text-theme-main mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-theme-accent" />
              <span>{t.projects.featuresLabel}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(language === 'ur' ? project.featuresUr : project.features).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-theme-card-subtle border border-theme text-[13.5px] text-theme-main"
                >
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-7">
            <h4 className="text-[13px] font-semibold tracking-wider uppercase text-theme-main mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-theme-accent" />
              <span>{t.projects.techLabel}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-theme-card-subtle border border-theme text-[13px] font-medium text-theme-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Notice & Footer Buttons */}
          <div className="pt-4 border-t border-theme flex flex-wrap items-center justify-between gap-4">
            <div className="text-[12px] text-theme-muted italic flex items-center gap-1.5">
              <span>{t.projects.noteLabel}</span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-theme-accent hover:opacity-95 transition-colors cursor-pointer"
            >
              {t.projects.modalClose}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
