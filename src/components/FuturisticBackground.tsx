import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const FuturisticBackground: React.FC = () => {
  const { theme } = useTheme();

  // Render the futuristic navy and cyan grid in dark mode
  if (theme !== 'dark') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Base Deep Navy Gradient Layer (Matching Reference Color Palette) */}
      <div
        className="absolute inset-0 bg-[#030B16]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 16%, #071A2B 0%, transparent 55%),
            radial-gradient(circle at 88% 22%, #0A2235 0%, transparent 50%),
            radial-gradient(circle at 50% 65%, #061321 0%, transparent 65%),
            radial-gradient(circle at 20% 85%, #071A2B 0%, transparent 55%)
          `,
        }}
      />

      {/* 2. Futuristic Technical Grid Pattern - Top Left Cluster (Crisp, High-Tech, Reference Matched) */}
      <div
        className="absolute top-0 left-0 w-full sm:w-[620px] h-[550px] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 217, 245, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 217, 245, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 12% 18%, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 12% 18%, black 35%, transparent 80%)',
        }}
      />

      {/* 3. Futuristic Technical Grid Pattern - Middle Right Cluster */}
      <div
        className="absolute top-[260px] right-0 w-full sm:w-[520px] h-[600px] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 217, 245, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 217, 245, 0.13) 1px, transparent 1px)
          `,
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse at 88% 35%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 88% 35%, black 25%, transparent 75%)',
        }}
      />

      {/* 4. Futuristic Technical Grid Pattern - Bottom Right Corner */}
      <div
        className="absolute bottom-0 right-0 w-full sm:w-[580px] h-[520px] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 217, 245, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 217, 245, 0.13) 1px, transparent 1px)
          `,
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(ellipse at 85% 85%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 85% 85%, black 25%, transparent 75%)',
        }}
      />

      {/* 5. Glowing Abstract Wave Ribbons (Reference Styled Sweeping Cyan Curves) */}
      <div className="absolute top-[320px] sm:top-[380px] -left-10 w-full max-w-[950px] h-[400px] pointer-events-none opacity-85">
        <svg
          viewBox="0 0 950 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-[waveDrift_24s_easeInOut_infinite_alternate]"
          style={{ filter: 'drop-shadow(0 0 12px rgba(0, 217, 245, 0.35))' }}
        >
          <defs>
            <linearGradient id="refCyanWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#00AFCB" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#0A2235" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#030B16" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="refCyanWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#00AFCB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#030B16" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Precision Flowing Ribbon Curves */}
          <path
            d="M -30 200 C 180 90, 320 310, 540 180 C 700 70, 820 250, 1000 160"
            stroke="url(#refCyanWave1)"
            strokeWidth="1.8"
          />
          <path
            d="M -30 216 C 190 106, 330 326, 550 196 C 710 86, 830 266, 1000 176"
            stroke="url(#refCyanWave1)"
            strokeWidth="1.6"
          />
          <path
            d="M -30 232 C 200 122, 340 342, 560 212 C 720 102, 840 282, 1000 192"
            stroke="url(#refCyanWave2)"
            strokeWidth="1.4"
          />
          <path
            d="M -30 248 C 210 138, 350 358, 570 228 C 730 118, 850 298, 1000 208"
            stroke="url(#refCyanWave2)"
            strokeWidth="1.2"
          />
          <path
            d="M -30 264 C 220 154, 360 374, 580 244 C 740 134, 860 314, 1000 224"
            stroke="url(#refCyanWave2)"
            strokeWidth="1.0"
          />
        </svg>
      </div>

      {/* 6. Subtle Cyan Ambient Radial Lighting Highlights */}
      <div className="absolute top-[60px] right-[10%] w-[450px] h-[450px] rounded-full bg-[#00D9F5]/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-[480px] left-[8%] w-[400px] h-[400px] rounded-full bg-[#00AFCB]/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] rounded-full bg-[#00D9F5]/[0.06] blur-[130px] pointer-events-none" />
    </div>
  );
};

export default FuturisticBackground;
