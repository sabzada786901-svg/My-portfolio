import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectDetailModal } from './modals/ProjectDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Bot,
  Terminal,
  Zap,
  Globe,
  Cpu,
  Layout,
  Share2,
  Palette,
  CreditCard,
  Gift,
  Download,
  ExternalLink,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-agents' | 'automation' | 'web-dev' | 'design'>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'agenticaim':
        return Cpu;
      case 'agenticaim-website':
        return Globe;
      case 'aura-ai':
        return Bot;
      case 'webintel-ai':
        return Globe;
      case 'friendly-ai':
        return Sparkles;
      case 'kisan-dost-ai':
        return Zap;
      case 'workflow-automation':
        return Zap;
      case 'personal-portfolio':
      case 'portfolio-design':
        return Layout;
      case 'social-media-post':
        return Share2;
      case 'logo-design':
        return Palette;
      case 'business-cards':
        return CreditCard;
      case 'birthday-card':
        return Gift;
      default:
        return Terminal;
    }
  };

  const handleQuickDownload = (project: Project) => {
    // 1. Direct external link download (e.g. AgenticAim -> https://agenticaim.online/services.html#download-agent)
    if (project.downloadType === 'link' && project.downloadUrl) {
      window.open(project.downloadUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // 2. Direct Image download (e.g. AURA AI, WebIntel AI, AgenticAim Website, Social Media Posts)
    if (project.downloadType === 'image' && (project.downloadUrl || project.gallery?.[0])) {
      const a = document.createElement('a');
      a.href = project.downloadUrl || project.gallery![0];
      a.download = `${project.id}-showcase.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    // 3. Structured project overview document
    const divider = '=====================================================';
    const lines = [
      divider,
      `PROJECT OVERVIEW & SPECIFICATION`,
      divider,
      `Title: ${project.title}`,
      `Category: ${project.categoryLabel}`,
      `Status: ${project.status}`,
      `Engineer / Designer: Gull Muhammad`,
      `Designation: AI Agent Engineer & Web Developer`,
      `Location: Faisalabad, Pakistan`,
      ...(project.role ? ['', 'MY ROLE:', project.role] : []),
      ...(project.vision ? ['', 'VISION:', project.vision] : []),
      '',
      `TAGLINE:`,
      project.tagline,
      '',
      `DESCRIPTION:`,
      project.description,
      '',
      `PROBLEM ADDRESSED:`,
      project.problem,
      '',
      `ENGINEERING / DESIGN SOLUTION:`,
      project.solution,
      '',
      `KEY FEATURES & DELIVERABLES:`,
      ...project.features.map((f, i) => `  ${i + 1}. ${f}`),
      '',
      `CORE TECHNOLOGIES:`,
      `  ${project.techStack.join(' • ')}`,
      '',
      divider,
      `Gull Muhammad Portfolio: https://gull-portfolio.my.canva.site`,
      `Contact: Available for AI Agent engineering, web platforms & visual design.`,
      divider,
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.id}-project-specification.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="projects" className="relative py-24 bg-theme-primary transition-colors duration-300 overflow-hidden">
      {/* Background Subtle Gradient (Dark mode only) */}
      <div className="hidden dark:block absolute top-1/4 left-10 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-theme-secondary leading-relaxed">
            {t.projects.subheading}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {t.projects.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter('ai-agents')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === 'ai-agents'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {language === 'ur' ? 'اے آئی ایجنٹس اور سسٹمز' : 'AI Agents & Systems'}
          </button>
          <button
            onClick={() => setActiveFilter('automation')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === 'automation'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {language === 'ur' ? 'ورک فلو آٹومیشن' : 'Workflow Automation'}
          </button>
          <button
            onClick={() => setActiveFilter('web-dev')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === 'web-dev'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {language === 'ur' ? 'ویب ڈویلپمنٹ' : 'Web Engineering'}
          </button>
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-4.5 py-2 rounded-full text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === 'design'
                ? 'bg-theme-accent text-white card-shadow'
                : 'bg-theme-card text-theme-secondary hover:text-theme-main border border-theme card-shadow'
            }`}
          >
            {language === 'ur' ? 'کینوا و گرافک ڈیزائن' : 'Creative Design'}
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const Icon = getProjectIcon(project.id);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-theme-card border border-theme overflow-hidden flex flex-col justify-between hover:border-theme-accent transition-colors duration-200 card-shadow group"
                >
                  {/* Visual Top Preview Frame */}
                  <div className="p-6 bg-theme-card-subtle border-b border-theme relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-theme-card border border-theme flex items-center justify-center group-hover:border-theme-accent transition-colors card-shadow">
                        <Icon className="w-5 h-5 text-theme-accent" />
                      </div>

                      <div className="flex items-center gap-2">
                        {project.gallery && project.gallery.length > 0 && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-theme-accent/15 border border-theme-accent/30 text-theme-accent">
                            {project.gallery.length} Designs
                          </span>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title={`Open live: ${project.liveUrl}`}
                            className="p-1.5 rounded-lg bg-theme-card border border-theme text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors card-shadow"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-theme-card border border-theme text-theme-accent">
                          {language === 'ur' ? project.statusUr : project.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-[19px] sm:text-[20px] font-bold text-theme-main mb-1 group-hover:text-theme-accent transition-colors">
                      {language === 'ur' ? project.titleUr : project.title}
                    </h3>
                    <p className="text-[13px] text-theme-secondary line-clamp-1 font-medium">
                      {language === 'ur' ? project.taglineUr : project.tagline}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-[14px] text-theme-secondary leading-relaxed mb-6 line-clamp-3">
                      {language === 'ur' ? project.descriptionUr : project.description}
                    </p>

                    <div>
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-theme-card-subtle border border-theme text-[12px] font-medium text-theme-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Details & Quick Download Action */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2.5 px-4 rounded-xl text-[13.5px] font-semibold text-theme-main bg-theme-card-subtle border border-theme hover:border-theme-accent hover:text-theme-accent transition-all flex items-center justify-center gap-2 cursor-pointer group/btn card-shadow"
                        >
                          <span>{t.projects.viewDetails}</span>
                          <ArrowRight className={`w-4 h-4 text-theme-accent transition-transform duration-200 ${isRTL ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickDownload(project);
                          }}
                          title="Download Project Specification & Overview"
                          aria-label={`Download ${project.title} Specs`}
                          className="p-2.5 rounded-xl bg-theme-card-subtle border border-theme text-theme-secondary hover:text-theme-accent hover:border-theme-accent hover:shadow-[0_0_14px_rgba(0,217,245,0.3)] transition-all cursor-pointer card-shadow group"
                        >
                          <Download className="w-4 h-4 text-theme-accent group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        key={selectedProject?.id || 'none'}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
