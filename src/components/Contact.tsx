import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import {
  Send,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  MessageSquare,
  User,
  Mail,
  Tag,
  RotateCcw,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.nameRequired;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = t.contact.errors.emailRequired;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.errors.subjectRequired;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t.contact.errors.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable secure dispatch & local logging
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-theme-primary transition-colors duration-300 overflow-hidden">
      {/* Background Subtle Accent (Dark mode only) */}
      <div className="hidden dark:block absolute bottom-0 right-10 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-[13px] font-semibold text-theme-accent tracking-wider uppercase mb-3 card-shadow">
            <Sparkles className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-main tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-theme-secondary leading-relaxed">
            {t.contact.subheading}
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-theme-card border border-theme p-6 sm:p-10 card-shadow relative overflow-hidden"
        >
          
          {/* Privacy Banner */}
          <div className="flex items-center gap-3 p-3.5 mb-8 rounded-xl bg-theme-card-subtle border border-theme text-[13.5px] text-theme-secondary card-shadow">
            <ShieldCheck className="w-4.5 h-4.5 text-theme-accent shrink-0" />
            <span>{t.contact.privacyPledge}</span>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-4 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center mb-5 text-[#10B981] shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-theme-main mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-[15px] text-theme-secondary max-w-md mx-auto mb-8 leading-relaxed">
                {t.contact.successDesc}
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-card-subtle border border-theme text-[14px] font-semibold text-theme-main hover:border-theme-accent transition-colors cursor-pointer card-shadow"
              >
                <RotateCcw className="w-4 h-4 text-theme-accent" />
                <span>{t.contact.sendAnother}</span>
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-theme-main mb-2"
                  >
                    {t.contact.nameLabel} <span className="text-theme-accent">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-theme-card-subtle border ${
                        errors.name ? 'border-[#EF4444]' : 'border-theme'
                      } text-[14.5px] text-theme-main placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] font-semibold uppercase tracking-wider text-theme-main mb-2"
                  >
                    {t.contact.emailLabel} <span className="text-theme-accent">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-muted">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-theme-card-subtle border ${
                        errors.email ? 'border-[#EF4444]' : 'border-theme'
                      } text-[14.5px] text-theme-main placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[13px] font-semibold uppercase tracking-wider text-theme-main mb-2"
                >
                  {t.contact.subjectLabel} <span className="text-theme-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-muted">
                    <Tag className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder={t.contact.subjectPlaceholder}
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-theme-card-subtle border ${
                      errors.subject ? 'border-[#EF4444]' : 'border-theme'
                    } text-[14.5px] text-theme-main placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all`}
                  />
                </div>
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[13px] font-semibold uppercase tracking-wider text-theme-main mb-2"
                >
                  {t.contact.messageLabel} <span className="text-theme-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-theme-muted">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-theme-card-subtle border ${
                      errors.message ? 'border-[#EF4444]' : 'border-theme'
                    } text-[14.5px] text-theme-main placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1.5 text-xs text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button with Enhanced Hover Effects */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl text-[15px] font-semibold text-white bg-theme-accent hover:opacity-95 hover:shadow-[0_0_24px_rgba(0,217,245,0.45)] hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all duration-300 card-shadow flex items-center justify-center gap-2 cursor-pointer group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t.contact.sendingButton}</span>
                  </>
                ) : (
                  <>
                    <Send className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    <span>{t.contact.sendButton}</span>
                  </>
                )}
              </button>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};
