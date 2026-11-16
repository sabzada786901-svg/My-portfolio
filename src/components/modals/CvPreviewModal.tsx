import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  FileText,
  CheckCircle,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CvPreviewModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      // Record current scroll position to prevent browser scroll jump
      const currentScrollY = window.scrollY;
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        // Ensure scroll position is preserved exactly where user was
        window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
      };
    }
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/gull-muhammad-cv.jpg';
    link.download = 'Gull_Muhammad_CV.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-theme-card border border-theme rounded-2xl sm:rounded-3xl card-shadow z-10 my-6 flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-theme bg-theme-card-subtle/70 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-theme-card border border-theme flex items-center justify-center card-shadow text-theme-accent">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-theme-main leading-tight flex items-center gap-2">
                  <span>{language === 'ur' ? 'گل محمد — نصاب زندگی (CV)' : 'Gull Muhammad — Curriculum Vitae'}</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-theme-accent/15 text-theme-accent border border-theme-accent/30 hidden sm:inline-block">
                    Official CV
                  </span>
                </h3>
                <p className="text-[12px] sm:text-[13px] text-theme-secondary">
                  {language === 'ur'
                    ? 'اے آئی ایجنٹ انجینئر • فرنٹ اینڈ ویب ڈیزائنر • کینوا ایکسپرٹ'
                    : 'AI Agent Engineer • AI Automation Specialist • Web Developer'}
                </p>
              </div>
            </div>

            {/* Action Buttons Toolbar */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center gap-1 bg-theme-card border border-theme rounded-xl p-1 card-shadow">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
                  className="p-1.5 rounded-lg text-theme-secondary hover:text-theme-main hover:bg-theme-card-subtle transition-all cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-semibold text-theme-muted px-1.5 select-none">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(1.8, z + 0.2))}
                  className="p-1.5 rounded-lg text-theme-secondary hover:text-theme-main hover:bg-theme-card-subtle transition-all cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Open High-Res in New Tab */}
              <a
                href="/assets/gull-muhammad-cv.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-theme-card border border-theme text-theme-secondary hover:text-theme-main hover:border-theme-accent hover:shadow-[0_0_12px_rgba(0,217,245,0.25)] transition-all duration-200 card-shadow flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                title="Open in new window"
              >
                <ExternalLink className="w-4 h-4 text-theme-accent" />
                <span className="hidden sm:inline">{language === 'ur' ? 'بڑی اسکرین' : 'Open Full'}</span>
              </a>

              {/* Download CV Button with Hover Glow */}
              <button
                type="button"
                onClick={handleDownload}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_20px_rgba(0,217,245,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 card-shadow flex items-center gap-1.5 cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>{language === 'ur' ? 'ڈاؤن لوڈ ہو گیا' : 'Downloaded!'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-white" />
                    <span>{language === 'ur' ? 'ڈاؤن لوڈ' : 'Download CV'}</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-theme-card border border-theme text-theme-muted hover:text-theme-main hover:border-theme-accent hover:scale-105 transition-all duration-200 cursor-pointer card-shadow"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CV Document Viewer Area */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#030B16]/60 flex justify-center items-start min-h-[420px]">
            <div
              className="relative transition-transform duration-200 ease-out origin-top max-w-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-theme/80 bg-white">
                <img
                  src="/assets/gull-muhammad-cv.jpg"
                  alt="Gull Muhammad Resume CV"
                  className="w-full max-w-[720px] h-auto object-contain select-none pointer-events-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="px-5 py-3 border-t border-theme bg-theme-card-subtle/50 flex flex-wrap items-center justify-between text-xs text-theme-muted gap-2">
            <span className="font-medium">
              {language === 'ur'
                ? 'فائل کی قسم: ہائی ریزولیوشن جے پی جی (JPG)'
                : 'Format: High-Resolution Graphic Document (JPG)'}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownload}
                className="text-theme-accent hover:underline font-semibold cursor-pointer"
              >
                {language === 'ur' ? 'ڈاؤن لوڈ شروع کریں' : 'Click to Download'}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={onClose}
                className="text-theme-secondary hover:text-theme-main cursor-pointer"
              >
                {language === 'ur' ? 'بند کریں' : 'Close Preview'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default CvPreviewModal;
