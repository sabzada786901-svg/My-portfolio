# Gull Muhammad — Official Portfolio Website

A bespoke, agency-grade, modern personal branding website engineered from scratch for **Gull Muhammad** — AI Agent Engineer, AI Automation Specialist, Web Developer, AI Chatbot Developer, and Canva Graphic Designer.

Designed with a futuristic dark interface, electric-blue accents, full English and Urdu (اردو) internationalization with native RTL support, fluid micro-interactions, and strict privacy engineering.

---

## 🌟 Visual Identity & Design System

- **Main Background**: `#080B12` (Dark) / `#F1F3F6` (Light - Soft Neutral Slate)
- **Secondary Background**: `#0D1320` (Dark) / `#E9EDF2` (Light)
- **Card Background**: `#111827` (Dark) / `#F8F9FB` (Light - Balanced Soft Surface)
- **Header Background**: `rgba(8, 11, 18, 0.90)` (Dark) / `#F4F6F9` (Light)
- **Footer Background**: `#080B12` (Dark) / `#E8ECF2` (Light)
- **Primary Text**: `#F8FAFC` (Dark) / `#182235` (Light - High Contrast)
- **Secondary Text**: `#94A3B8` (Dark) / `#566274` (Light)
- **Muted Text**: `#64748B` (Dark) / `#758195` (Light)
- **Borders**: `#1E293B` (Dark) / `#D9DFE8` (Light - Subtle & Clean)
- **Primary Accent**: `#3B82F6` (Dark) / `#4779D8` (Light)
- **Hover Accent**: `#2563EB` (Dark) / `#3568C5` (Light)
- **Main Typography**: Inter & Manrope (English) / Noto Sans Arabic & Noto Nastaliq Urdu (Urdu)
- **Desktop Header Typography**: Brand Logo (21–23px), Subtitle (13–14px), Navigation Links (15–16px), Language Switcher (14–15px), Hire Me (15–16px)
- **Desktop Footer Typography**: Brand Logo (22–24px), Subtitle (14–15px), Section Headings (16–18px), Navigation Links (14–15px), Copyright (13–14px)
- **Theme Modes**: One-click instant toggle between **Dark Mode** and **Light Mode** (persisted in `localStorage`).
- **Image Styling**: Executive suit portrait in Hero and About sections with a neon cyan/blue glowing circular halo ring behind the head and shoulders, framed in a modern rounded container matching the reference composition.

---

## 🚀 Key Features

1. **Original Brand Identity**:
   - Integrated Gull Muhammad's authentic logo mark in high-resolution vector and dark-mode electric-blue variants across header, footer, and browser favicon.
   - Preserved Gull Muhammad's authentic personal portrait photograph in the Hero and About Me sections with subtle geometric framing and responsive WebP optimization.

2. **Complete Bilingual Internationalization (EN / اردو)**:
   - Instant language switching between English (LTR) and Urdu (RTL) without reloading the page.
   - Comprehensive translations across all sections, interactive modals, form inputs, validation messages, and footer.
   - Persistent preference via `localStorage`.

3. **Modern Technical Architecture**:
   - **Frontend**: React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
   - **Build Tool**: Vite 8.
   - **Performance**: Zero external render blocking, lazy-loaded visual assets, smooth scrollspy navigation.

4. **Website Sections**:
   - **Header & Navigation**: Sticky blur bar, original logo emblem, active section scrollspy, language switcher pill, and "Hire Me" action.
   - **Hero Section**: Dynamic rotating roles typewriter (AI Agent Engineer, AI Automation Specialist, Web Developer, AI Chatbot Developer), core technology pills, and dual CTAs.
   - **About Me**: Professional identity pillars, real personal photograph, authentic mission statement, technical focus tags, and contact triggers.
   - **Skills & Technologies**: Categorized into 4 domains (AI Agent Engineering, Web Development, Automation, Design) with real tool badges and category filtering.
   - **Services**: 6 premium cards with interactive "Learn More" modals breaking down deliverables and engineering workflows.
   - **Projects Showcase**: In-depth showcase of 6 real projects (AgenticAim, AURA AI, WebIntel AI, Friendly AI, Kisan Dost AI, Personal Portfolio) with dedicated detail modals outlining problem, solution, features, and tech stacks.
   - **My Journey**: Disciplined progression timeline tracing computational thinking, modern web engineering, AI exploration, agentic RAG, and automation pipelines.
   - **Contact & Privacy**: Fully validated contact form with client-side error handling and privacy preservation (zero personal email or phone numbers exposed).
   - **Custom Signature Footer**: Rebuilt with a three-column architecture, signature large rounded top-left corner (`70–100px` desktop / `35–50px` mobile, mirrored in Urdu RTL), animated underline runners on all section headings, newsletter subscription form with client-side validation, direct contact trigger, circular social media icons (WhatsApp, Facebook, Twitter/X, Pinterest), and smooth Back to Top navigation.

---

## 📦 Project Structure

```
d:/portfolio/
├── public/
│   ├── assets/
│   │   ├── gull-muhammad.jpg         # Original personal portrait
│   │   ├── gull-muhammad.webp        # Optimized WebP portrait
│   │   ├── logo-full.jpg             # Reference brand logo sheet
│   │   ├── logo-icon.png             # Crisp cropped emblem
│   │   └── logo-blue.png             # Dark-mode electric-blue emblem
│   └── favicon.svg                   # Brand vector favicon
├── src/
│   ├── components/
│   │   ├── modals/
│   │   │   ├── ProjectDetailModal.tsx # Project overview & problem/solution modal
│   │   │   └── ServiceDetailModal.tsx # Service deliverables & workflow modal
│   │   ├── About.tsx                 # About Me section
│   │   ├── Contact.tsx               # Validated contact form & privacy pledge
│   │   ├── Footer.tsx                # Dynamic footer & back-to-top
│   │   ├── Hero.tsx                  # Hero banner & rotating title animation
│   │   ├── Journey.tsx               # Professional journey timeline
│   │   ├── Navbar.tsx                # Sticky nav & language switcher
│   │   ├── Projects.tsx              # Featured projects & category filters
│   │   ├── Services.tsx              # 6 service offerings & modals
│   │   └── Skills.tsx                # Categorized skill cards
│   ├── context/
│   │   └── LanguageContext.tsx       # Bilingual state management (EN/UR)
│   ├── data/
│   │   └── portfolioData.ts          # Authentic project, service, & journey data
│   ├── translations/
│   │   └── index.ts                  # Centralized English & Urdu translations
│   ├── types.ts                      # TypeScript definitions
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Tailwind setup & typography styles
│   └── main.tsx                      # React root entry point
├── package.json                      # Project dependencies & scripts
├── vite.config.ts                    # Vite & Tailwind configuration
└── README.md                         # Documentation
```

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on Node v24)
- npm (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔒 Privacy & Environment Variables

This portfolio has been engineered with strict privacy principles:
- **No private phone numbers or personal emails are exposed in source code or UI.**
- If you wish to connect the contact form directly to a backend service (e.g. EmailJS, Web3Forms, or Resend), create a `.env` file in the project root:

```env
# Optional Form Integration Keys
VITE_EMAIL_SERVICE_KEY=""
VITE_FORM_ENDPOINT=""
```

The contact form includes built-in input validation, feedback states, and reset options ready to hook into any webhook or email service without leaking client secrets.

---

## 📜 License & Credits

Built with precision by Gull Muhammad. All rights reserved.
