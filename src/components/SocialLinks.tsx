import React from 'react';

export interface SocialLinkItem {
  name: string;
  url: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  hoverClasses: string;
}

/* GitHub Icon SVG */
export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/* LinkedIn Icon SVG */
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

/* Facebook Icon SVG */
export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

/* TikTok Icon SVG */
export const TiktokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.313-4.634c.314 0 .619.05 1.006.152V9.41a6.332 6.332 0 0 0-1.006-.081C6.012 9.329 3.2 12.141 3.2 15.615c0 3.474 2.812 6.286 6.286 6.286 3.474 0 6.285-2.812 6.285-6.286V8.694c1.233.879 2.734 1.401 4.359 1.437V6.686z" />
  </svg>
);

/* Official Social Links with Real Brand Colors on Hover */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    title: 'GitHub • Gull Muhammad',
    icon: GithubIcon,
    hoverClasses:
      'hover:!bg-[#181717] hover:!border-[#444444] hover:!text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/feed/',
    title: 'LinkedIn • Gull Muhammad',
    icon: LinkedinIcon,
    hoverClasses:
      'hover:!bg-[#0A66C2] hover:!border-[#0A66C2] hover:!text-white hover:shadow-[0_0_20px_rgba(10,102,194,0.7)]',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/',
    title: 'Facebook • Gull Muhammad',
    icon: FacebookIcon,
    hoverClasses:
      'hover:!bg-[#1877F2] hover:!border-[#1877F2] hover:!text-white hover:shadow-[0_0_20px_rgba(24,119,242,0.7)]',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/',
    title: 'TikTok • Gull Muhammad',
    icon: TiktokIcon,
    hoverClasses:
      'hover:!bg-[#000000] hover:!border-[#FE0979] hover:!text-white hover:shadow-[0_0_18px_rgba(254,9,121,0.6),0_0_26px_rgba(0,242,254,0.4)]',
  },
];

interface SocialLinksBarProps {
  className?: string;
  buttonSizeClasses?: string;
  iconSizeClasses?: string;
}

export const SocialLinksBar: React.FC<SocialLinksBarProps> = ({
  className = 'flex items-center gap-3',
  buttonSizeClasses = 'w-10.5 h-10.5',
  iconSizeClasses = 'w-4.5 h-4.5',
}) => {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            aria-label={item.name}
            className={`${buttonSizeClasses} rounded-full bg-theme-card border border-theme flex items-center justify-center text-theme-secondary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer card-shadow ${item.hoverClasses}`}
          >
            <Icon className={iconSizeClasses} />
          </a>
        );
      })}
    </div>
  );
};
