import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { FuturisticBackground } from './components/FuturisticBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const MainLayout: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`relative min-h-screen bg-theme-primary text-theme-main selection:bg-[#00D9F5] selection:text-[#030B16] transition-colors duration-300 ${
        isRTL ? 'text-right' : 'text-left'
      }`}
    >
      <FuturisticBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
