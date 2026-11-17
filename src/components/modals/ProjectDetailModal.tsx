import React, { useState } from 'react';
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
  Download,
  Check,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Layers,
} from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  const { t, language, isRTL } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [galleryViewMode, setGalleryViewMode] = useState<'slider' | 'grid'>('slider');

  if (!project) return null;

  const currentGalleryItem = project.galleryItems?.[activeImageIndex] || null;

  const handleDownloadSpecific = (imgUrl: string, idx: number, e?: React.MouseEvent, side?: 'front' | 'back') => {
    if (e) e.stopPropagation();
    const item = project.galleryItems?.[idx];
    const titleSnippet = item?.title
      ? item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')
      : project.galleryTitles?.[idx]
      ? project.galleryTitles[idx].toLowerCase().replace(/[^a-z0-9]/g, '-')
      : `design-${idx + 1}`;
    const sideSuffix = side ? `-${side}` : '';
    const ext = imgUrl.endsWith('.jpg') ? 'jpg' : 'png';
    const a = document.createElement('a');
    a.href = imgUrl;
    a.download = `${project.id}-${titleSnippet}${sideSuffix}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleDownload = () => {
    // 1. Direct external link download (e.g. AgenticAim -> https://agenticaim.online/services.html#download-agent)
    if (project.downloadType === 'link' && project.downloadUrl) {
      window.open(project.downloadUrl, '_blank', 'noopener,noreferrer');
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2500);
      return;
    }

    // 2. Direct Image download (e.g. AURA AI, WebIntel AI, AgenticAim Website, Social Media Posts, Business Cards)
    if (project.downloadType === 'image') {
      const activeUrl = project.gallery?.[activeImageIndex] || project.downloadUrl || project.image;
      if (activeUrl) {
        handleDownloadSpecific(activeUrl, activeImageIndex, undefined, currentGalleryItem?.backImage ? 'front' : undefined);
        if (currentGalleryItem?.backImage) {
          setTimeout(() => {
            handleDownloadSpecific(currentGalleryItem.backImage!, activeImageIndex, undefined, 'back');
          }, 350);
        }
        return;
      }
    }

    // 3. Default: Full structured project specification document
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

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const getDownloadLabel = () => {
    if (downloaded) return 'Downloaded!';
    if (project.downloadType === 'link') return 'Download Agent';
    if (project.downloadType === 'image') {
      if (currentGalleryItem?.backImage) return 'Download Both Sides';
      return project.gallery ? 'Download Active Design' : 'Download Image';
    }
    return 'Download Specs';
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
          transition={{ duration: 0.5 }}
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

          {/* Multi-Image Gallery Showcase (If project has gallery) */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-theme bg-[#061321] mb-7 card-shadow">
              {/* Top Controls Bar */}
              <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-theme-card-subtle/90 border-b border-theme gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-medium text-theme-main">
                    {project.galleryTitles?.[activeImageIndex] || `${project.title} Designs`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-theme-accent font-semibold px-2 py-0.5 rounded bg-theme-accent/15 border border-theme-accent/30">
                    {activeImageIndex + 1} / {project.gallery.length} Designs
                  </span>

                  {/* Mode Toggle: Slider vs Grid */}
                  <div className="inline-flex rounded-lg bg-theme-card border border-theme p-0.5">
                    <button
                      type="button"
                      onClick={() => setGalleryViewMode('slider')}
                      title="Slider View"
                      className={`p-1 rounded-md transition-colors cursor-pointer ${
                        galleryViewMode === 'slider'
                          ? 'bg-theme-accent text-white'
                          : 'text-theme-muted hover:text-theme-main'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setGalleryViewMode('grid')}
                      title="All Designs Grid View"
                      className={`p-1 rounded-md transition-colors cursor-pointer ${
                        galleryViewMode === 'grid'
                          ? 'bg-theme-accent text-white'
                          : 'text-theme-muted hover:text-theme-main'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* View Content */}
              {galleryViewMode === 'slider' ? (
                <div className="p-4 sm:p-5">
                  {/* Main Display Stage */}
                  <div className="relative overflow-hidden rounded-xl bg-black/40 flex items-center justify-center p-3 sm:p-5 min-h-[340px]">
                    {currentGalleryItem?.backImage ? (
                      /* Dual-Sided Card Display (Both Front & Back Shown Together) */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full items-center justify-center max-w-4xl py-2 px-1">
                        {/* Front Side */}
                        <div className="relative rounded-2xl overflow-hidden bg-[#071320] border border-theme p-3.5 flex flex-col items-center justify-center card-shadow group/card">
                          <div className="w-full flex items-center justify-between mb-2.5 px-1">
                            <span className="px-2.5 py-0.5 rounded-full bg-theme-accent/20 border border-theme-accent/40 text-[11px] font-bold text-theme-accent tracking-wider uppercase">
                              {language === 'ur' ? 'فرنٹ سائیڈ (Front)' : 'Front Side'}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => handleDownloadSpecific(currentGalleryItem.image, activeImageIndex, e, 'front')}
                              title="Download Front Side"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-theme-accent text-white border border-white/20 text-[11px] font-medium transition-all cursor-pointer shadow-sm"
                            >
                              <Download className="w-3 h-3" />
                              <span>Front</span>
                            </button>
                          </div>
                          <div className="w-full flex items-center justify-center p-2 min-h-[220px]">
                            <img
                              src={currentGalleryItem.image}
                              alt={`${currentGalleryItem.title} - Front Side`}
                              className="max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover/card:scale-[1.02]"
                            />
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="relative rounded-2xl overflow-hidden bg-[#071320] border border-theme p-3.5 flex flex-col items-center justify-center card-shadow group/card">
                          <div className="w-full flex items-center justify-between mb-2.5 px-1">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[11px] font-bold text-[#F59E0B] tracking-wider uppercase">
                              {language === 'ur' ? 'بیک سائیڈ (Back)' : 'Back Side'}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => handleDownloadSpecific(currentGalleryItem.backImage!, activeImageIndex, e, 'back')}
                              title="Download Back Side"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-theme-accent text-white border border-white/20 text-[11px] font-medium transition-all cursor-pointer shadow-sm"
                            >
                              <Download className="w-3 h-3" />
                              <span>Back</span>
                            </button>
                          </div>
                          <div className="w-full flex items-center justify-center p-2 min-h-[220px]">
                            <img
                              src={currentGalleryItem.backImage}
                              alt={`${currentGalleryItem.title} - Back Side`}
                              className="max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover/card:scale-[1.02]"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Single Image Display */
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImageIndex}
                          src={project.gallery[activeImageIndex]}
                          alt={project.galleryTitles?.[activeImageIndex] || `Design ${activeImageIndex + 1}`}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="max-h-[480px] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                        />
                      </AnimatePresence>
                    )}

                    {/* Left / Right Nav Arrows */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? project.gallery!.length - 1 : prev - 1
                        )
                      }
                      aria-label="Previous Design"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-theme-accent text-white border border-white/20 transition-all cursor-pointer backdrop-blur-sm shadow-xl z-20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === project.gallery!.length - 1 ? 0 : prev + 1
                        )
                      }
                      aria-label="Next Design"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-theme-accent text-white border border-white/20 transition-all cursor-pointer backdrop-blur-sm shadow-xl z-20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Quick Download Floating Button (only when single image) */}
                    {!currentGalleryItem?.backImage && (
                      <button
                        type="button"
                        onClick={(e) =>
                          handleDownloadSpecific(project.gallery![activeImageIndex], activeImageIndex, e)
                        }
                        title="Download this specific design"
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-theme-accent text-white border border-white/20 text-xs font-medium backdrop-blur-sm transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Save Design</span>
                      </button>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="mt-4 flex items-center justify-start gap-2.5 overflow-x-auto pb-1 pt-1 scrollbar-thin">
                    {project.gallery.map((img, idx) => {
                      const isActive = idx === activeImageIndex;
                      const item = project.galleryItems?.[idx];
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative flex-shrink-0 ${
                            item?.backImage ? 'w-24 sm:w-28' : 'w-16 sm:w-20'
                          } h-16 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer group bg-black/50 ${
                            isActive
                              ? 'border-theme-accent shadow-[0_0_12px_rgba(0,217,245,0.5)] scale-105'
                              : 'border-theme opacity-65 hover:opacity-100 hover:border-theme-accent/60'
                          }`}
                        >
                          {item?.backImage ? (
                            <div className="w-full h-full grid grid-cols-2 p-1 gap-1 bg-black/40 items-center justify-center">
                              <img src={item.image} alt="Front" className="w-full h-full object-contain" />
                              <img src={item.backImage} alt="Back" className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <img
                              src={img}
                              alt={item?.title || project.galleryTitles?.[idx] || `Thumbnail ${idx + 1}`}
                              className="w-full h-full object-contain p-1"
                            />
                          )}
                          <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[9px] font-semibold text-white text-center py-0.5 truncate px-1">
                            {item?.backImage ? `${idx + 1}. Front & Back` : idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Design Live Caption & Info */}
                  {currentGalleryItem && (
                    <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-theme-card border border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-3 card-shadow">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[14px] sm:text-[15px] font-bold text-theme-main">
                            {language === 'ur' ? currentGalleryItem.titleUr : currentGalleryItem.title}
                          </span>
                          {currentGalleryItem.tag && (
                            <span className="text-[11px] font-semibold text-theme-accent px-2 py-0.5 rounded bg-theme-accent/10 border border-theme-accent/25">
                              {currentGalleryItem.tag}
                            </span>
                          )}
                        </div>
                        {currentGalleryItem.tagline && (
                          <p className="text-[12.5px] font-medium text-theme-accent mb-1">
                            {language === 'ur' ? currentGalleryItem.taglineUr : currentGalleryItem.tagline}
                          </p>
                        )}
                        <p className="text-[13px] text-theme-secondary leading-relaxed">
                          {language === 'ur' ? currentGalleryItem.descriptionUr : currentGalleryItem.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 self-start sm:self-center flex-shrink-0">
                        {currentGalleryItem.backImage ? (
                          <>
                            <button
                              type="button"
                              onClick={(e) => handleDownloadSpecific(currentGalleryItem.image, activeImageIndex, e, 'front')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-accent text-white text-xs font-semibold hover:opacity-95 transition-all cursor-pointer shadow-md"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>{language === 'ur' ? 'فرنٹ ڈاؤن لوڈ' : 'Download Front'}</span>
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleDownloadSpecific(currentGalleryItem.backImage!, activeImageIndex, e, 'back')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F59E0B] text-black text-xs font-semibold hover:opacity-95 transition-all cursor-pointer shadow-md"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>{language === 'ur' ? 'بیک ڈاؤن لوڈ' : 'Download Back'}</span>
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) =>
                              handleDownloadSpecific(project.gallery![activeImageIndex], activeImageIndex, e)
                            }
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-theme-accent text-white text-xs font-semibold hover:opacity-95 transition-all cursor-pointer shadow-md"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{language === 'ur' ? 'ڈیزائن محفوظ کریں' : 'Save Design'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Grid View: Show all images simultaneously with individual descriptions! */
                <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => {
                    const item = project.galleryItems?.[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveImageIndex(idx);
                          setGalleryViewMode('slider');
                        }}
                        className="group relative rounded-xl overflow-hidden border border-theme bg-black/40 hover:border-theme-accent transition-all cursor-pointer flex flex-col justify-between card-shadow"
                      >
                        {item?.backImage ? (
                          /* Dual-Sided Grid Tile */
                          <div className="p-3 bg-[#0a1622]/60">
                            <div className="grid grid-cols-2 gap-2.5 mb-1.5">
                              <div className="relative rounded-lg overflow-hidden bg-black/50 border border-theme p-1.5 flex flex-col items-center justify-center">
                                <span className="absolute top-1 left-1 text-[9px] font-bold text-theme-accent bg-black/80 px-1.5 rounded">
                                  FRONT
                                </span>
                                <img
                                  src={item.image}
                                  alt={`${item.title} Front`}
                                  className="max-h-[160px] w-auto object-contain rounded"
                                />
                                <button
                                  type="button"
                                  onClick={(e) => handleDownloadSpecific(item.image, idx, e, 'front')}
                                  title="Download Front"
                                  className="absolute bottom-1 right-1 p-1 rounded bg-black/80 hover:bg-theme-accent text-white transition-colors"
                                >
                                  <Download className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="relative rounded-lg overflow-hidden bg-black/50 border border-theme p-1.5 flex flex-col items-center justify-center">
                                <span className="absolute top-1 left-1 text-[9px] font-bold text-[#F59E0B] bg-black/80 px-1.5 rounded">
                                  BACK
                                </span>
                                <img
                                  src={item.backImage}
                                  alt={`${item.title} Back`}
                                  className="max-h-[160px] w-auto object-contain rounded"
                                />
                                <button
                                  type="button"
                                  onClick={(e) => handleDownloadSpecific(item.backImage!, idx, e, 'back')}
                                  title="Download Back"
                                  className="absolute bottom-1 right-1 p-1 rounded bg-black/80 hover:bg-theme-accent text-white transition-colors"
                                >
                                  <Download className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Single Side Grid Tile */
                          <div className="relative aspect-square overflow-hidden flex items-center justify-center p-3 bg-[#0a1622]/60">
                            <img
                              src={img}
                              alt={item?.title || `Design ${idx + 1}`}
                              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <button
                              type="button"
                              onClick={(e) => handleDownloadSpecific(img, idx, e)}
                              title="Download Design"
                              className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 hover:bg-theme-accent text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        <div className="p-3 bg-theme-card-subtle/90 border-t border-theme">
                          <div className="flex items-center justify-between text-[12.5px] font-bold text-theme-main mb-1">
                            <span className="truncate">{item ? (language === 'ur' ? item.titleUr : item.title) : `Design #${idx + 1}`}</span>
                            <span className="text-theme-accent font-semibold ml-1 text-[11px]">#{idx + 1}</span>
                          </div>
                          {item?.description && (
                            <p className="text-[11.5px] text-theme-secondary line-clamp-2 leading-relaxed">
                              {language === 'ur' ? item.descriptionUr : item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : project.image ? (
            /* Single Screenshot Mockup (For projects with a single screenshot) */
            <div className="relative w-full rounded-2xl overflow-hidden border border-theme bg-[#061321] mb-7 card-shadow group">
              <div className="flex items-center justify-between px-4 py-2.5 bg-theme-card-subtle/90 border-b border-theme text-xs font-mono text-theme-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 font-medium text-theme-main">{project.title} Interface</span>
                </div>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-theme-accent hover:underline text-[12px] font-semibold"
                  >
                    <span>{project.liveUrl.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-theme-accent font-semibold uppercase tracking-wider">
                    Live Screenshot
                  </span>
                )}
              </div>
              <div className="relative overflow-hidden max-h-[420px] flex items-center justify-center bg-black/50">
                <img
                  src={project.image}
                  alt={`${project.title} Live Interface`}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>
          ) : null}

          {/* Role & Vision Cards (If available) */}
          {(project.role || project.vision) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
              {project.role && (
                <div className="p-4 rounded-xl bg-theme-card-subtle border border-theme">
                  <span className="text-[11.5px] uppercase font-bold tracking-wider text-theme-accent block mb-1">
                    My Role
                  </span>
                  <p className="text-[13.5px] text-theme-main font-medium leading-relaxed">
                    {project.role}
                  </p>
                </div>
              )}
              {project.vision && (
                <div className="p-4 rounded-xl bg-theme-card-subtle border border-theme">
                  <span className="text-[11.5px] uppercase font-bold tracking-wider text-theme-accent block mb-1">
                    Vision
                  </span>
                  <p className="text-[13.5px] text-theme-secondary italic leading-relaxed">
                    "{project.vision}"
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Main Description Box (Dynamically synchronized with active design) */}
          <div className="w-full rounded-xl bg-theme-card-subtle border border-theme p-6 mb-7 relative overflow-hidden card-shadow">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="text-[12px] font-mono text-theme-muted ml-2">
                  {currentGalleryItem
                    ? `${project.id} / ${currentGalleryItem.tag || `design-${activeImageIndex + 1}`}`
                    : `core-architecture / ${project.id}.py`}
                </span>
              </div>
              {currentGalleryItem && (
                <span className="text-[11.5px] font-bold text-theme-accent uppercase tracking-wider px-2.5 py-0.5 rounded bg-theme-accent/15 border border-theme-accent/30">
                  {language === 'ur' ? currentGalleryItem.titleUr : currentGalleryItem.title}
                </span>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {currentGalleryItem?.tagline && (
                  <p className="text-[13.5px] font-bold text-theme-accent mb-2">
                    {language === 'ur' ? currentGalleryItem.taglineUr : currentGalleryItem.tagline}
                  </p>
                )}
                <p className="text-[15px] text-theme-main font-medium leading-relaxed">
                  {currentGalleryItem
                    ? (language === 'ur' ? currentGalleryItem.descriptionUr : currentGalleryItem.description)
                    : (language === 'ur' ? project.descriptionUr : project.description)}
                </p>
              </motion.div>
            </AnimatePresence>
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

          {/* Notice & Footer Buttons with Download Option */}
          <div className="pt-5 border-t border-theme flex flex-wrap items-center justify-between gap-4">
            <div className="text-[12px] text-theme-muted italic flex items-center gap-1.5">
              <span>{t.projects.noteLabel}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
              {/* Visit Live Website Link (if project has liveUrl) */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-[14px] font-semibold bg-theme-accent/15 border border-theme-accent/40 text-theme-accent hover:bg-theme-accent hover:text-white transition-all card-shadow cursor-pointer"
                  title={`Open ${project.liveUrl}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'ur' ? 'ویب سائٹ وزٹ کریں' : 'Visit Website'}</span>
                </a>
              )}

              {/* Download Option Button */}
              <button
                type="button"
                onClick={handleDownload}
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 card-shadow cursor-pointer ${
                  downloaded
                    ? 'bg-[#10B981]/20 border border-[#10B981] text-[#10B981]'
                    : 'bg-theme-card-subtle border border-theme text-theme-main hover:border-theme-accent hover:text-theme-accent hover:shadow-[0_0_16px_rgba(0,217,245,0.35)]'
                }`}
                title="Download Project Specification & Overview"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>{getDownloadLabel()}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-theme-accent" />
                    <span>{getDownloadLabel()}</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_16px_rgba(0,217,245,0.45)] transition-all cursor-pointer"
              >
                {t.projects.modalClose}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
