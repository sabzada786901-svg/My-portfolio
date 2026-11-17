import type { Project, Service, SkillCategory, JourneyMilestone } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-agents',
    title: 'AI Agent Engineering',
    titleUr: 'اے آئی ایجنٹ انجینئرنگ',
    iconName: 'Bot',
    skills: [
      { name: 'AI Agents', highlight: true },
      { name: 'LangChain', highlight: true },
      { name: 'LangGraph', highlight: true },
      { name: 'OpenAI API', highlight: true },
      { name: 'Google Gemini', highlight: true },
      { name: 'Claude API', highlight: true },
      { name: 'MCP (Model Context Protocol)', highlight: true },
      { name: 'Prompt Engineering', highlight: true },
      { name: 'Agentic RAG', highlight: true },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    titleUr: 'ویب ڈویلپمنٹ',
    iconName: 'Code2',
    skills: [
      { name: 'HTML5', highlight: true },
      { name: 'CSS3', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Bootstrap', highlight: true },
      { name: 'Responsive Web Design', highlight: true },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    titleUr: 'آٹومیشن اور انضمام',
    iconName: 'Zap',
    skills: [
      { name: 'n8n', highlight: true },
      { name: 'Workflow Automation', highlight: true },
      { name: 'API Integration', highlight: true },
      { name: 'AI Automation', highlight: true },
      { name: 'Webhooks', highlight: true },
      { name: 'MCP Integrations', highlight: true },
    ],
  },
  {
    id: 'design',
    title: 'Creative Design',
    titleUr: 'تخلیقی ڈیزائن',
    iconName: 'Palette',
    skills: [
      { name: 'Canva', highlight: true },
      { name: 'Presentation Design', highlight: true },
      { name: 'Graphic Design', highlight: true },
      { name: 'Logo Design', highlight: true },
      { name: 'Social Media Design', highlight: true },
      { name: 'UI Design', highlight: true },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ai-agent-development',
    title: 'AI Agent Development',
    titleUr: 'اے آئی ایجنٹ ڈویلپمنٹ',
    subtitle: 'Autonomous reasoning, tool use, and multi-step execution',
    subtitleUr: 'خود مختار استدلال، ٹولز کا استعمال اور کثیر مرحلہ عملدرآمد',
    description: 'Build intelligent agents that can reason, use tools, and complete tasks autonomously with human-in-the-loop controls.',
    descriptionUr: 'ذہین ایجنٹس کی تیاری جو خود استدلال کر سکتے ہیں، ٹولز استعمال کر سکتے ہیں اور خود مختار طریقے سے کام مکمل کر سکتے ہیں۔',
    iconName: 'Cpu',
    deliverables: [
      'Custom reasoning loops (ReAct, Plan-and-Solve)',
      'External tool and API calling integration',
      'Memory management and state persistence',
      'Model Context Protocol (MCP) server & client setups'
    ],
    deliverablesUr: [
      'خصوصی استدلالی لوپس اور منطقی فیصلے',
      'بیرونی ٹولز اور اے پی آئی کالنگ کا انضمام',
      'میموری مینجمنٹ اور مستقل حالت کا تحفظ',
      'ماڈل کانٹیکسٹ پروٹوکول (MCP) سرور اور کلائنٹ سیٹ اپ'
    ],
    workflow: [
      'Agent Architecture Definition',
      'Tool & API Schema Modeling',
      'Prompt & Context Orchestration',
      'Testing, Evaluation & Deployment'
    ],
    workflowUr: [
      'ایجنٹ کے بنیادی ڈھانچے کا تعین',
      'ٹولز اور اے پی آئی اسکیما کی ماڈلنگ',
      'پرامپٹ اور سیاق و سباق کی ترتیب',
      'جانچ، تجزیہ اور آن لائن نفاذ'
    ]
  },
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    titleUr: 'اے آئی چیٹ باٹ ڈویلپمنٹ',
    subtitle: 'Context-aware conversational assistants for modern platforms',
    subtitleUr: 'جدید پلیٹ فارمز کے لیے سیاق و سباق سے آگاہ گفتگوئی معاونین',
    description: 'Develop intelligent conversational assistants for websites and businesses with customized knowledge bases and conversational flows.',
    descriptionUr: 'ویب سائٹس اور کاروبار کے لیے کسٹم نالج بیسز اور قدرتی گفتگو کے ساتھ ذہین معاونین تیار کرنا۔',
    iconName: 'MessageSquareCode',
    deliverables: [
      'Document & Knowledge base grounding (RAG)',
      'Multi-turn conversational memory & context retention',
      'Clean interactive chat widgets for web applications',
      'Fallback handling and graceful escalation'
    ],
    deliverablesUr: [
      'دستاویزات اور نالج بیس سے تصدیق شدہ جوابات (RAG)',
      'کثیر موڑ گفتگو کی یادداشت اور مستقل حوالہ',
      'ویب ایپلیکیشنز کے لیے پرکشش اور تیز رفتار چیٹ ویجیٹ',
      'غلطیوں کی روک تھام اور خودکار رہنمائی'
    ],
    workflow: [
      'Knowledge Corpus Preparation',
      'Retrieval Pipeline & Vector Embeddings',
      'UI/UX Chat Interface Integration',
      'Guardrails & Response Tuning'
    ],
    workflowUr: [
      'معلوماتی مواد اور ڈیٹا کی تیاری',
      'ڈیٹا تلاش کرنے کا نظام اور ویکٹر ایمبیڈنگز',
      'یوزر انٹرفیس میں چیٹ ڈیزائن کا انضمام',
      'جوابات کی درستی اور حفاظتی حدود'
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    titleUr: 'ورک فلو آٹومیشن',
    subtitle: 'Automate repetitive workflows and data pipelines',
    subtitleUr: 'بار بار دہرائے جانے والے کاموں اور ڈیٹا پائپ لائنز کی خودکاری',
    description: 'Automate repetitive tasks and business workflows using AI and automation tools like n8n, webhooks, and REST APIs.',
    descriptionUr: 'دہرائے جانے والے کاموں اور کاروباری نظاموں کو n8n، ویب ہکس اور REST APIs کے ذریعے مکمل خودکار بنائیں۔',
    iconName: 'Workflow',
    deliverables: [
      'End-to-end automated pipelines with n8n',
      'Webhook triggers and cross-service data routing',
      'Automated content generation & email pipelines',
      'Error monitoring, retry mechanisms & notifications'
    ],
    deliverablesUr: [
      'n8n کے ذریعے مکمل خودکار ڈیٹا اور کاموں کے سلسلے',
      'ویب ہک ٹرگرز اور مختلف سروسز کے درمیان ڈیٹا کی منتقلی',
      'خودکار مواد کی تیاری اور نوٹیفکیشن سسٹمز',
      'غلطیوں کی نگرانی، خودکار دوبارہ کوشش اور الرٹس'
    ],
    workflow: [
      'Process Flow Mapping & Bottleneck Audit',
      'Trigger & Action Integration Architecture',
      'Data Transformation & AI Prompt Enrichment',
      'End-to-End Testing & Reliability Monitoring'
    ],
    workflowUr: [
      'موجودہ نظام کے مراحل کا تفصیلی جائزہ',
      'ٹرگرز اور ایکشنز کے رابطے کا خاکہ',
      'ڈیٹا میں تبدیلی اور اے آئی پرامپٹس کا شامل کرنا',
      'مکمل جانچ اور دیرپا کارکردگی کی نگرانی'
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    titleUr: 'ویب سائٹ ڈویلپمنٹ',
    subtitle: 'Modern, responsive, high-performance web applications',
    subtitleUr: 'جدید، تیز رفتار اور ہر اسکرین کے موافق ویب ایپلیکیشنز',
    description: 'Build modern, responsive, and professional websites engineered with clean code, fast load times, and intuitive interfaces.',
    descriptionUr: 'صاف ستھرے کوڈ، تیز رفتار لوڈنگ اور دلکش انٹرفیس کے ساتھ جدید اور پروفیشنل ویب سائٹس کی تعمیر۔',
    iconName: 'Layout',
    deliverables: [
      'Component-based frontend architecture with React & TypeScript',
      'Responsive mobile-first layout with Tailwind CSS',
      'Bilingual LTR / RTL internationalization support',
      'SEO optimization, accessibility, and high performance'
    ],
    deliverablesUr: [
      'React اور TypeScript کے ساتھ پائیدار اور جدید فرنٹ اینڈ',
      'Tailwind CSS کے ساتھ ہر اسکرین کے لیے موافق لے آؤٹ',
      'بیک وقت انگریزی اور اردو (RTL) زبان کی مکمل معاونت',
      'سرچ انجن فرینڈلی ساخت، رسائی اور تیز رفتار کارکردگی'
    ],
    workflow: [
      'Wireframing & Visual Hierarchy Strategy',
      'Modular Component Development',
      'Responsive Styling & Fluid Motion',
      'Cross-Browser Verification & Launch'
    ],
    workflowUr: [
      'انٹرفیس کی بنیادی خاکہ کشی اور ترتیب',
      'ماڈیولر کمپوننٹس کی معیاری کوڈنگ',
      'موبائل ریسپانسیو ڈیزائن اور خوبصورت اینیمیشنز',
      'تمام براؤزرز پر جانچ اور حتمی فراہمی'
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    titleUr: 'اے آئی انٹیگریشن',
    subtitle: 'Connecting leading LLMs and APIs to existing stacks',
    subtitleUr: 'موجودہ سسٹمز میں معروف AI ماڈلز اور APIs کا بروقت انضمام',
    description: 'Integrate state-of-the-art AI models and APIs (OpenAI, Gemini, Claude) directly into existing applications and web services.',
    descriptionUr: 'جدید ترین AI ماڈلز اور APIs (جیسے OpenAI, Gemini, Claude) کو موجودہ ایپلی کیشنز اور ویب سروسز میں جوڑنا۔',
    iconName: 'Layers',
    deliverables: [
      'Secure API proxying and token-efficient prompt structures',
      'Streaming responses for real-time user experiences',
      'Structured JSON output validation and parsing',
      'Multi-model fallback strategies'
    ],
    deliverablesUr: [
      'محفوظ API مواصلت اور کفایت شعار پرامپٹ سٹرکچر',
      'حقیقی وقت میں بغیر تاخیر کے اسٹریمنگ جوابات',
      'منظم JSON ڈیٹا حاصل کرنا اور درست استعمال',
      'متبادل AI ماڈلز کی خودکار فراہمی'
    ],
    workflow: [
      'Existing System Architecture Review',
      'Model & Cost-Efficiency Selection',
      'API Connector & Pipeline Implementation',
      'Latency & Token Optimization'
    ],
    workflowUr: [
      'موجودہ سسٹم کے بنیادی ڈھانچے کا تفصیلی تجزیہ',
      'بہترین اور کفایت شعار ماڈل کا درست انتخاب',
      'کنیکٹر اور پائپ لائن کی محفوظ تیاری',
      'رفتار کو بڑھانا اور خرچ کو کم سے کم رکھنا'
    ]
  },
  {
    id: 'canva-graphic-design',
    title: 'Canva Graphic Design',
    titleUr: 'کینوا گرافک ڈیزائن',
    subtitle: 'High-impact digital graphics, presentations, and branding',
    subtitleUr: 'پرکشش ڈیجیٹل گرافکس، پریزنٹیشنز اور برانڈنگ',
    description: 'Create professional digital graphics, pitch decks, social media designs, and presentation layouts tailored to your brand identity.',
    descriptionUr: 'آپ کی برانڈ کی شناخت کے مطابق پروفیشنل ڈیجیٹل گرافکس، سلائیڈز، پریزنٹیشنز اور سوشل میڈیا ڈیزائنز کی تخلیق۔',
    iconName: 'PenTool',
    deliverables: [
      'Executive presentation decks & pitch presentations',
      'Social media visual kits and branded post templates',
      'Vector logo marks and personal brand identity kits',
      'Marketing banners, infographics, and digital assets'
    ],
    deliverablesUr: [
      'پروفیشنل کاروباری اور تعلیمی پریزنٹیشن سلائیڈز',
      'سوشل میڈیا کے لیے معیاری برانڈڈ پوسٹ ڈیزائنز',
      'ویکٹر مونوگرام اور برانڈ شناختی کٹس',
      'ڈیجیٹل مارکیٹنگ بینرز، انفوگرافکس اور اثاثے'
    ],
    workflow: [
      'Brand Identity & Color Consistency Audit',
      'Typography & Layout Concept Development',
      'High-Resolution Graphic Generation',
      'Multi-Format Asset Delivery'
    ],
    workflowUr: [
      'برانڈ کے رنگوں اور شناخت کی ہم آہنگی',
      'فونٹس اور لے آؤٹ کے جدید کانسیپٹس کا انتخاب',
      'اعلیٰ معیار کے گرافک اثاثوں کی حتمی تیاری',
      'مختلف ڈیجیٹل فارمیٹس میں فوری ترسیل'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'agenticaim',
    title: 'AgenticAim',
    titleUr: 'ایجنٹک ایم (AgenticAim)',
    tagline: 'AI Esports Aim Coach & Hardware Advisor',
    taglineUr: 'گیمنگ اور ہارڈویئر کے لیے جدید ترین اے آئی کوچ و ایڈوائزر',
    category: 'ai-agents',
    categoryLabel: 'AI Agent System',
    categoryLabelUr: 'اے آئی ایجنٹ سسٹم',
    description: 'An advanced AI-powered assistant engineered to analyze gameplay scenarios, formulate tactical recommendations, provide real-time hardware telemetry, and deliver strategic aim coaching.',
    descriptionUr: 'ایک جدید AI معاون جو گیم پلے کے حالات کا تجزیہ کرتا ہے، ہارڈویئر ٹیلی میٹری مانیٹر کرتا ہے اور کھلاڑیوں کو حقیقی وقت میں رہنمائی فراہم کرتا ہے۔',
    problem: 'Competitive gaming scenarios evolve at split-second speeds. Players often lack contextual real-time feedback and tactical analysis to adapt their strategies during high-stakes sessions.',
    problemUr: 'مسابقتی گیمنگ میں فیصلے پلک جھپکتے میں کرنے ہوتے ہیں۔ اکثر کھلاڑیوں کے پاس حکمت عملی بہتر بنانے کے لیے حقیقی وقت میں تجاویز کا فقدان ہوتا ہے۔',
    solution: 'Designed an autonomous agentic framework combining situational prompt chains, tactical knowledge base retrieval, and fast response streaming to deliver concise decision-making aids.',
    solutionUr: 'ایک ایسا خودکار ایجنٹک فریم ورک تیار کیا جو فوری پرامپٹ چینز اور گیمنگ نالج بیس کو یکجا کر کے فوری اور جامع مشورے فراہم کرتا ہے۔',
    features: [
      'Scenario-aware tactical reasoning engine & real-time telemetry',
      'Rapid contextual retrieval for game mechanics & meta strategies',
      'Low-latency voice and text interaction pipelines',
      'Modular agent tool integration with Qdrant vector database'
    ],
    featuresUr: [
      'صورتحال سے باخبر ٹیکٹیکل استدلال کا انجن اور ریئل ٹائم ٹیلی میٹری',
      'گیم میکینکس اور حکمت عملیوں کا فوری ریٹریول',
      'انتہائی کم تاخیر کے ساتھ ٹیکسٹ اور وائس انٹرفیس',
      'ماڈیولر ایجنٹ ٹولز اور ویکٹر ڈیٹا بیس کا انضمام'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Vector DB', 'FastAPI', 'Qdrant'],
    status: 'In Active Development / Project Showcase',
    statusUr: 'زیرِ ترقی / پراجیکٹ شوکیس',
    accentColor: '#3B82F6',
    image: '/assets/projects/agenticaim.jpg',
    downloadUrl: 'https://agenticaim.online/services.html#download-agent',
    downloadType: 'link',
    liveUrl: 'https://agenticaim.online'
  },
  {
    id: 'aura-ai',
    title: 'AURA AI',
    titleUr: 'اورا اے آئی (AURA AI)',
    tagline: 'Autonomous Universal Reasoning Assistant',
    taglineUr: 'خود مختار یونیورسل ریزننگ اسسٹنٹ',
    category: 'ai-agents',
    categoryLabel: 'Autonomous Agent',
    categoryLabelUr: 'خود مختار ایجنٹ',
    description: 'AURA AI is an advanced autonomous AI desktop assistant designed to act as a personal intelligent companion. It combines AI reasoning, voice interaction, persistent memory, browser automation, PC control, and multi-agent collaboration to handle complex tasks.',
    descriptionUr: 'اورا اے آئی ایک جدید ترین خود مختار اے آئی ڈیسک ٹاپ اسسٹنٹ ہے جو پرسنل انٹیلیجنٹ ساتھی کے طور پر کام کرتا ہے۔ یہ استدلال، آواز سے گفتگو، مستقل یادداشت، براؤزر آٹومیشن اور پی سی کنٹرول کو یکجا کرتا ہے۔',
    problem: 'Juggling multiple web apps, calendars, notes, and repetitive workflows scatters focus and wastes valuable hours every single week.',
    problemUr: 'مختلف ایپس، نوٹس اور دہرائے جانے والے کاموں میں الجھنے سے وقت اور توجہ ضائع ہوتی ہے۔',
    solution: 'Engineered an orchestration agent capable of understanding high-level natural language goals, decomposing them into sequential tasks, and executing them via automated tool calls.',
    solutionUr: 'ایک ایسا ایجنٹ تیار کیا جو قدرتی زبان میں دیے گئے مقاصد کو مرحلہ وار کاموں میں تقسیم کر کے خودکار ٹولز کے ذریعے مکمل کرتا ہے۔',
    features: [
      'Intelligent AI Conversations & Voice Assistant',
      'Browser & Web Automation with Playwright',
      'Windows PC Automation & Local System Control',
      'Persistent Memory & Reusable Skills Studio',
      'Multi-Agent Delegation & Multi-LLM Integration',
      'MCP & Plugin Support with Scheduled Task Automation'
    ],
    featuresUr: [
      'ذہین اے آئی گفتگو اور وائس اسسٹنٹ',
      'پلے رائٹ کے ذریعے براؤزر و ویب آٹومیشن',
      'ونڈوز پی سی آٹومیشن اور لوکل سسٹم کنٹرول',
      'مستقل میموری اور دوبارہ قابل استعمال اسکلز',
      'ملٹی ایجنٹ ڈیلیگیشن اور ملٹی ایل ایل ایم انضمام',
      'ایم سی پی و پلگ ان سپورٹ اور شیڈولڈ ٹاسک آٹومیشن'
    ],
    techStack: ['Python', 'LangGraph', 'FastAPI', 'React', 'TypeScript', 'Gemini AI', 'Playwright', 'SQLite', 'Qdrant', 'MCP', 'Faster-Whisper', 'Edge TTS'],
    status: 'Personal Technology Project',
    statusUr: 'ذاتی ٹیکنالوجی پراجیکٹ',
    accentColor: '#60A5FA',
    image: '/assets/projects/aura-ai.jpg',
    downloadUrl: '/assets/projects/aura-ai.jpg',
    downloadType: 'image',
    role: 'AI Agent Architecture, Backend Development, Agent Orchestration & Frontend Development.',
    vision: 'One intelligent assistant to manage your digital world.'
  },
  {
    id: 'webintel-ai',
    title: 'WebIntel AI',
    titleUr: 'ویب انٹیل اے آئی (WebIntel AI)',
    tagline: 'Intelligent Web Research Agent',
    taglineUr: 'ذہین ویب ریسرچ ایجنٹ',
    category: 'ai-agents',
    categoryLabel: 'Research Agent',
    categoryLabelUr: 'ریسرچ ایجنٹ',
    description: 'WebIntel AI is an AI-powered research assistant designed to transform how people search, explore, and understand information on the internet. It combines AI intelligence with web search and website content extraction to deliver structured answers with source references.',
    descriptionUr: 'ویب انٹیل اے آئی ایک طاقتور ریسرچ اسسٹنٹ ہے جو انٹرنیٹ پر معلومات کی تلاش اور فہم کو تبدیل کرتا ہے۔ یہ ویب سرچ اور کونٹنٹ ایکسٹریکشن کو یکجا کر کے مصدقہ سورس لنکس کے ساتھ منظم جوابات فراہم کرتا ہے۔',
    problem: 'Sifting through hundreds of search results to research technical topics or market trends is tedious and prone to misinformation.',
    problemUr: 'انٹرنیٹ پر سینکڑوں لنکس میں سے درست تکنیکی اور مارکیٹ معلومات اکٹھی کرنا مشکل اور وقت طلب کام ہے۔',
    solution: 'Built an autonomous web search and scraping pipeline grounded with LLM-based fact-checking and automated markdown report compilation.',
    solutionUr: 'ایک خودکار سرچ اور ڈیٹا نکالنے والا پائپ لائن بنایا جو حقائق کی جانچ کر کے تفصیلی مارک ڈاؤن رپورٹس مرتب کرتا ہے۔',
    features: [
      'Intelligent Web Search & Multi-Engine Discovery',
      'Website Content Extraction & Noise Filtering',
      'AI-Powered Research, Analysis & Summarization',
      'Verified Source URL References & Primary Citations',
      'Voice-Based Interaction & Query Dictation',
      'Persistent Conversation History & Connected Tools'
    ],
    featuresUr: [
      'ذہین ویب سرچ اور ملٹی انجن ڈسکوری',
      'ویب سائٹ کونٹنٹ ایکسٹریکشن اور کلین اپ',
      'اے آئی ریسرچ، تجزیہ اور تفصیلی تلخیص',
      'مصدقہ سورس یو آر ایل حوالہ جات اور سائیشنز',
      'آواز سے گفتگو اور وائس ان پٹ انٹرفیس',
      'گفتگو کی مستقل تاریخ اور ٹول انضمام'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini AI', 'AMD AI', 'Tavily', 'DuckDuckGo', 'BeautifulSoup', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    status: 'Research & Exploration Project',
    statusUr: 'تحقیقی و تعلیمی پراجیکٹ',
    accentColor: '#38BDF8',
    image: '/assets/projects/webintel-ai.jpg',
    downloadUrl: '/assets/projects/webintel-ai.jpg',
    downloadType: 'image',
    role: 'AI Agent Development & Frontend Design.'
  },
  {
    id: 'friendly-ai',
    title: 'Friendly AI',
    titleUr: 'فرینڈلی اے آئی (Friendly AI)',
    tagline: 'Empathetic Conversational Assistant Interface',
    taglineUr: 'ہمدردانہ گفتگوئی معاون اور چیٹ انٹرفیس',
    category: 'ai-agents',
    categoryLabel: 'Conversational AI',
    categoryLabelUr: 'گفتگوئی اے آئی',
    description: 'A warm, user-friendly conversational interface designed for intuitive digital assistance, empathetic dialog, and responsive query resolution.',
    descriptionUr: 'ایک دوستانہ اور آسان چیٹ انٹرفیس جو صارفین کے ساتھ قدرتی انداز میں بات چیت کرتا ہے اور فوری رہنمائی فراہم کرتا ہے۔',
    problem: 'Most conventional chatbots feel robotic, rigid, and fail to maintain emotional tone or context across ongoing conversations.',
    problemUr: 'روایتی چیٹ باٹس اکثر بے لچک اور مشینی لگتے ہیں اور گفتگو کے سیاق و سباق کو یاد نہیں رکھ پاتے۔',
    solution: 'Crafted a persona-driven system prompt architecture coupled with dynamic sentiment tuning to produce human-centered, helpful responses.',
    solutionUr: 'ایک ایسا پرامپٹ آرکیٹیکچر وضع کیا جو صارف کے لہجے کو سمجھ کر نرم اور مفید جوابات دیتا ہے۔',
    features: [
      'Empathetic response modeling with tone adaptation',
      'Dynamic session history management',
      'Sleek and responsive chat UI with quick prompts',
      'Privacy-first local session caching'
    ],
    featuresUr: [
      'صارف کے لہجے اور ضرورت کے مطابق ہمدردانہ انداز',
      'گفتگو کی سابقہ تاریخ کا بغیر بوجھ کے محفوظ رہنا',
      'خوبصورت اور جدید موبائل ریسپانسیو چیٹ انٹرفیس',
      'رازداری کے تحفظ کے ساتھ مقامی کیشنگ'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Lucide Icons'],
    status: 'Interactive Interface Project',
    statusUr: 'انٹرایکٹو انٹرفیس پراجیکٹ',
    accentColor: '#818CF8'
  },
  {
    id: 'kisan-dost-ai',
    title: 'Kisan Dost AI',
    titleUr: 'کسان دوست اے آئی (Kisan Dost AI)',
    tagline: 'Agricultural Intelligence & Advisory Concept',
    taglineUr: 'زرعی معلومات اور کسانوں کے لیے مشاورتی کانسیپٹ',
    category: 'ai-agents',
    categoryLabel: 'Concept & Social Impact',
    categoryLabelUr: 'کانسیپٹ و سماجی خدمت',
    description: 'An AI-powered agricultural advisory concept envisioned to empower farmers with localized crop disease detection, weather-driven planting advice, and market intelligence.',
    descriptionUr: 'کسانوں کے لیے ایک جدید مشاورتی کانسیپٹ جس کا مقصد مقامی فصلوں کی بیماریوں کی تشخیص، بروقت موسمی الرٹس اور منڈی کی معلومات فراہم کرنا ہے۔',
    problem: 'Smallholder farmers frequently lack direct access to agronomists and localized agricultural advisory, risking crop yields due to preventable diseases and changing climate patterns.',
    problemUr: 'دیہی کسانوں کو زرعی ماہرین تک بروقت رسائی نہیں ہوتی، جس سے بیماریوں اور موسمی تبدیلی کے باعث فصلوں کا نقصان ہوتا ہے۔',
    solution: 'Designed a multilingual AI advisory framework capable of processing simple localized inputs and offering actionable farming practices in native languages.',
    solutionUr: 'ایک کثیر لسانی مشاورتی فریم ورک تیار کیا جو اردو اور علاقائی زبانوں میں آسان اور فوری قابل عمل مشورے فراہم کرتا ہے۔',
    features: [
      'Native Urdu and bilingual guidance support',
      'Crop disease symptom triage engine concept',
      'Weather alert interpretation and soil advice',
      'Audio-first and conversational interaction model'
    ],
    featuresUr: [
      'خالص اردو اور آسان زبان میں فوری رہنمائی',
      'فصلوں کی بیماریوں کی علامات کے تجزیے کا ماڈل',
      'موسمی حالات اور زمین کی زرخیزی سے متعلق ہدایات',
      'آواز کے ذریعے بات چیت کا آسان طریقہ کار'
    ],
    techStack: ['Python', 'Google Gemini', 'Streamlit', 'Multilingual NLP'],
    status: 'Concept & Architecture Prototype',
    statusUr: 'کانسیپٹ اور بنیادی پروٹو ٹائپ',
    accentColor: '#34D399'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    titleUr: 'پرسنل پورٹ فولیو',
    tagline: 'Modern Agency-Grade Personal Branding Site',
    taglineUr: 'عالمی معیار کی ذاتی برانڈنگ ویب سائٹ',
    category: 'web-dev',
    categoryLabel: 'Web Engineering',
    categoryLabelUr: 'ویب انجینئرنگ',
    description: 'A bespoke, international agency-grade personal portfolio engineered from scratch with React 19, TypeScript, Tailwind CSS, and full bidirectional English/Urdu RTL support.',
    descriptionUr: 'ایک پرتعیش، جدید اور بین الاقوامی معیار کی پورٹ فولیو ویب سائٹ جو React 19، TypeScript اور Tailwind CSS پر مکمل اردو اور انگریزی معاونت کے ساتھ بنائی گئی۔',
    problem: 'Generic portfolio templates fail to communicate high technical precision, lack authentic multilingual accessibility, and dilute brand identity with clutter.',
    problemUr: 'عام ٹیمپلیٹس تکنیکی مہارت کو درست طریقے سے پیش نہیں کرتے اور نہ ہی اردو کے مکمل اور خوبصورت انٹرفیس کی سہولت دیتے ہیں۔',
    solution: 'Crafted a custom dark-mode design system with electric-blue accents, fluid Framer Motion micro-interactions, responsive typography, and strict privacy protection.',
    solutionUr: 'ایک خصوصی ڈارک انٹرفیس، برقی نیلے رنگ کے دلفریب شیڈز، تیز رفتار کوڈ اور مکمل پرائیویسی کے ساتھ منفرد پورٹ فولیو تشکیل دیا۔',
    features: [
      'Complete bilingual internationalization with seamless RTL/LTR toggle',
      'Zero layout shifts and fluid Framer Motion transitions',
      'Strict privacy preservation with no exposed personal contacts',
      'Engineered with modern component architecture and zero fluff'
    ],
    featuresUr: [
      'انگریزی اور مکمل اردو RTL کے درمیان فوری اور ہموار تبدیلی',
      'بغیر کسی جھٹکے کے خوبصورت اور دلکش اینیمیشنز',
      'صارف کی ذاتی معلومات کا مکمل تحفظ اور محفوظ کانٹیکٹ فارم',
      'انتہائی جدید کمپوننٹ اسٹرکچر اور تیز رفتار لوڈنگ'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    status: 'Completed & Live Showcase',
    statusUr: 'مکمل اور لائیو شوکیس',
    accentColor: '#3B82F6'
  },
  {
    id: 'agenticaim-website',
    title: 'AgenticAim Website',
    titleUr: 'ایجنٹک ایم ویب سائٹ (AgenticAim Website)',
    tagline: 'High-Performance Modern Web Platform for AI Systems',
    taglineUr: 'جدید ترین اے آئی سسٹمز کے لیے تیز رفتار ویب پلیٹ فارم',
    category: 'web-dev',
    categoryLabel: 'Web Platform',
    categoryLabelUr: 'ویب پلیٹ فارم',
    description: 'A responsive, high-converting modern web application engineered for AgenticAim showcasing intelligent autonomous agent workflows, live feature demos, and real-time interaction.',
    descriptionUr: 'AgenticAim کے لیے تیار کردہ ایک ریسپانسیو اور جدید ویب پلیٹ فارم جو خود مختار اے آئی ایجنٹس کے کام، فیچرز اور لائیو مظاہرے پیش کرتا ہے۔',
    problem: 'AI startups and tools often struggle to present intricate multi-agent architectures in a clean, intuitive, and accessible web interface that captivates both technical and non-technical stakeholders.',
    problemUr: 'اکثر اے آئی ٹیکنالوجیز کے پیچیدہ ورک فلوز کو آسان اور دلکش انداز میں ویب سائٹ پر پیش کرنا ایک بڑا چیلنج ہوتا ہے۔',
    solution: 'Engineered a sleek, responsive web architecture with interactive demo nodes, fluid animations, dynamic dark-mode styling, and token-efficient API connection showcases.',
    solutionUr: 'ایک ایسا جدید ویب انٹرفیس بنایا جس میں اینیمیشنز، انٹرایکٹو ڈیمو نوڈز اور صاف ستھرا کوڈ شامل ہے جو صارفین کو مکمل تجربہ فراہم کرتا ہے۔',
    features: [
      'Interactive AI agent capability showcase and visual workflow demos',
      'Ultra-responsive mobile-first layout with smooth 60fps animations',
      'Modern dark-mode aesthetic with cyan and electric-blue lighting',
      'High-performance asset optimization with instant load times'
    ],
    featuresUr: [
      'انٹرایکٹو اے آئی ایجنٹ فیچرز اور لائیو ورک فلو کا مظاہرہ',
      'ہر سکرین کے لیے انتہائی تیز اور ہموار اینیمیشنز',
      'جدید ڈارک موڈ اور برقی نیلے رنگوں کا دلفریب امتزاج',
      'بہترین کوڈ اور تیز رفتار پیج لوڈنگ کی صلاحیت'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    status: 'Completed & Live Showcase',
    statusUr: 'مکمل اور لائیو شوکیس',
    accentColor: '#00D9F5',
    image: '/assets/projects/agenticaim-website.jpg',
    downloadUrl: '/assets/projects/agenticaim-website.jpg',
    downloadType: 'image',
    liveUrl: 'https://agenticaim.online'
  },
  {
    id: 'social-media-post',
    title: 'Social Media Post Design',
    titleUr: 'سوشل میڈیا پوسٹ ڈیزائن',
    tagline: 'High-Engagement Visual Branding for Digital Platforms',
    taglineUr: 'ڈیجیٹل پلیٹ فارمز کے لیے پرکشش اور برانڈڈ سوشل میڈیا پوسٹس',
    category: 'design',
    categoryLabel: 'Creative Design',
    categoryLabelUr: 'تخلیقی ڈیزائن',
    description: 'High-impact promotional social media graphics, carousel sets, and brand announcement creatives designed in Canva Pro to maximize engagement, visual authority, and brand recall.',
    descriptionUr: 'کینوا پرو پر تیار کردہ اعلیٰ معیار کی سوشل میڈیا پوسٹس، بینرز اور کیروسلز جو برانڈ کی شناخت اور صارفین کی توجہ بڑھاتے ہیں۔',
    problem: 'Generic low-resolution social media templates look amateurish, blend into the scroll feed, and fail to generate viewer interaction or consistent brand authority.',
    problemUr: 'عام اور روایتی پوسٹ ڈیزائنز سوشل میڈیا پر نظر انداز ہو جاتے ہیں اور برانڈ کی ساکھ کو نقصان پہنچاتے ہیں۔',
    solution: 'Crafted structured visual templates based on high-contrast color psychology, clear typography hierarchies, custom iconography, and brand alignment across LinkedIn, Instagram, and Facebook.',
    solutionUr: 'رنگوں کی نفسیات، بہترین فونٹس اور واضح برانڈنگ کے اصولوں کو بروئے کار لاتے ہوئے ایسے ڈیزائنز تیار کیے جو فوری توجہ حاصل کرتے ہیں۔',
    features: [
      'Custom carousel sets with high-retention visual hooks',
      'Platform-specific aspect ratios (1:1, 4:5, 9:16 vertical stories)',
      'Consistent typography, contrast management, and brand guidelines',
      'Exportable high-definition vectors and lossless PNG/JPG outputs'
    ],
    featuresUr: [
      'زیادہ انگیجمنٹ کے لیے خصوصی ملٹی سلائیڈ کیروسل پوسٹس',
      'تمام پلیٹ فارمز کے لیے مخصوص سائز اور ریشوز',
      'منظم فونٹس، برانڈ رنگ اور معیاری لے آؤٹس',
      'ہائی ڈیفینیشن اور پرنٹ کوالٹی میں برآمد کی سہولت'
    ],
    techStack: ['Canva Pro', 'Typography', 'Visual Branding', 'Color Psychology', 'Ad Creatives'],
    status: 'Client & Production Designs',
    statusUr: 'کلائنٹ و پرسنل ڈیزائنز',
    accentColor: '#38BDF8',
    image: '/assets/projects/social-media/sneakers.jpg',
    gallery: [
      '/assets/projects/social-media/sneakers.jpg',
      '/assets/projects/social-media/burger.jpg',
      '/assets/projects/social-media/apple-watch.jpg',
      '/assets/projects/social-media/biryani.jpg',
      '/assets/projects/social-media/car-rental.jpg',
      '/assets/projects/social-media/digital-marketing.jpg'
    ],
    galleryTitles: [
      'Premium Running Sneakers Ad',
      'Hot & Delicious Burger Ad',
      'Apple Watch Special Edition',
      'Biryani Time 50% Off Campaign',
      'Luxury Car Rental Promotional Banner',
      'Digital Marketing Agency Poster'
    ],
    galleryItems: [
      {
        image: '/assets/projects/social-media/sneakers.jpg',
        title: 'Premium Running Sneakers Ad',
        titleUr: 'پریمیم رننگ اسنیکرز ایڈ',
        tagline: 'Where Comfort Meets Style • Sizes 36-41 Available',
        taglineUr: 'آرام اور جدید اسٹائل کا بہترین امتزاج',
        description: 'High-energy footwear promotional post designed with visual callout indicators for reinforced TPU heel support, elastic shoelaces, and high-performance rubber soles with clear sizing details.',
        descriptionUr: 'جوگرز اور اسپورٹس شوز کے لیے تیار کردہ خصوصی اشتہار جس میں ہیل سپورٹ، لچکدار فیتے اور ربڑ سول کی خصوصیات کو واضح پوائنٹرز کے ساتھ پیش کیا گیا ہے۔',
        tag: 'Footwear & Fashion'
      },
      {
        image: '/assets/projects/social-media/burger.jpg',
        title: 'Hot & Delicious Burger Ad',
        titleUr: 'ہاٹ اینڈ ڈلیشس برگر پروموشن',
        tagline: 'Best Burger in the Town • 50% Off Limited Time Offer',
        taglineUr: 'شہر کا سب سے مزیدار برگر • 50 فیصد رعایت',
        description: 'Vibrant food promo graphic featuring an explosive ingredients background, 50% discount badge, appetite-stimulating green accent styling, and direct phone order CTA.',
        descriptionUr: 'فاسٹ فوڈ کے لیے بھوک بڑھانے والے رنگوں اور اجزاء کے دھماکہ خیز بیک گراؤنڈ کے ساتھ 50 فیصد ڈسکاؤنٹ پروموشنل ڈیزائن۔',
        tag: 'Food & Dining'
      },
      {
        image: '/assets/projects/social-media/apple-watch.jpg',
        title: 'Apple Watch Launch Campaign',
        titleUr: 'ایپل واچ اسپیشل لانچ ایڈ',
        tagline: 'Precision Engineering Starting at $369',
        taglineUr: 'جدید ترین اسمارٹ واچ آپ کی کلائی پر',
        description: 'Minimalist tech product showcase creative featuring high-contrast neon green geometric curves, high-res Apple Watch display, and clear $369 starting price point.',
        descriptionUr: 'ہائی ٹیک مصنوعات کے لیے نیون گرین رنگوں، واضح فوکس اور تعارفی قیمت کے ساتھ پرکشش ایپل واچ کمرشل ڈیزائن۔',
        tag: 'Tech & Gadgets'
      },
      {
        image: '/assets/projects/social-media/biryani.jpg',
        title: 'Delicious Biryani Time Ad',
        titleUr: 'بریانی ٹائم اسپیشل آفر',
        tagline: 'Authentic Traditional Flavor • 50% Off Special Deal',
        taglineUr: 'روایتی ذائقہ اور خوشبو • 50 فیصد خصوصی ڈیل',
        description: 'Traditional restaurant promotional social creative highlighting authentic steaming biryani platter, dynamic arrow pointing to Order Now CTA, and online ordering website.',
        descriptionUr: 'روایتی کھانوں اور ریسٹورنٹ کے لیے گرم گرم بریانی کی تھالی، دلکش نارنجی فریم اور فوری آن لائن آرڈر کی سہولت کے ساتھ پوسٹ۔',
        tag: 'Restaurant & Food'
      },
      {
        image: '/assets/projects/social-media/car-rental.jpg',
        title: 'Luxury Car Rental Campaign',
        titleUr: 'لگژری کار رینٹل مہم',
        tagline: 'Need a Car? Get the Best Price Here • Book Now',
        taglineUr: 'گاڑی چاہیے؟ بہترین ریٹس پر فوری بکنگ کریں',
        description: 'High-impact luxury car hire poster showcasing a vibrant yellow Audi R8 framed within dynamic angular geometric borders and instant "Book Now" call-to-action.',
        descriptionUr: 'شاندار زرد رنگ کی آڈی R8 اسپورٹس کار اور اینگولر جیومیٹرک بارڈرز کے ساتھ گاڑیوں کی رینٹل سروس کا اثر انگیز پوسٹر۔',
        tag: 'Automotive & Travel'
      },
      {
        image: '/assets/projects/social-media/digital-marketing.jpg',
        title: 'Digital Marketing Agency Poster',
        titleUr: 'ڈیجیٹل مارکیٹنگ ایجنسی پوسٹر',
        tagline: 'Grow Your Business Online with Proven Strategies',
        taglineUr: 'اپنے کاروبار کو آن لائن وسعت دیں',
        description: 'Corporate business growth social media banner detailing core agency capabilities: Advertisements Production, Ads Location Placement, Marketing Research, and Branding Strategies.',
        descriptionUr: 'کاروباری ترقی، اشتہارات کی تیاری، لوکیشن پلیسمنٹ، ریسرچ اور برانڈنگ کے اہم مراحل کو اجاگر کرنے والا کارپوریٹ بینر۔',
        tag: 'Corporate & Agency'
      }
    ],
    downloadUrl: '/assets/projects/social-media/sneakers.jpg',
    downloadType: 'image'
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Identity',
    titleUr: 'لوگو اور برانڈ شناخت ڈیزائن',
    tagline: 'Distinctive, Minimalist & Modern Brand Marks',
    taglineUr: 'منفرد، جدید اور یادگار لوگو ڈیزائن اور برانڈ شناخت',
    category: 'design',
    categoryLabel: 'Brand Identity',
    categoryLabelUr: 'برانڈ شناخت',
    description: 'Bespoke vector logo design, icon marks, and comprehensive visual identity guidelines crafted for tech businesses, creators, and modern digital brands.',
    descriptionUr: 'ٹیکنالوجی کے اداروں اور کاروباری برانڈز کے لیے جدید، سادگی سے بھرپور اور پائیدار ویکٹر لوگو ڈیزائن اور رہنما اصول۔',
    problem: 'Cluttered or generic logos lose readability at small favicon sizes, lack scalability, and fail to reflect the modern high-tech personality of an organization.',
    problemUr: 'روایتی لوگوز چھوٹی سکرینوں اور فیو آئیکون میں صاف دکھائی نہیں دیتے اور برانڈ کے وقار کو ظاہر نہیں کر پاتے۔',
    solution: 'Developed versatile, geometric, and minimalist logo marks that scale flawlessly from 16px favicons to large vector billboard displays, complete with primary and monochrome palettes.',
    solutionUr: 'ایک ایسا خوبصورت اور ریاضیاتی بنیادوں پر لوگو ڈیزائن کیا جو چھوٹے سے چھوٹے سائز سے لے کر بڑے سائن بورڈ تک یکساں واضح رہتا ہے۔',
    features: [
      'Minimalist geometric symbol and monogram construction',
      'Scalable vector formats with dark and light mode adaptations',
      'Brand style documentation with color codes (HEX, RGB, CMYK)',
      'Complete typography pairings and clear-space rules'
    ],
    featuresUr: [
      'سادہ اور جدید جیومیٹرک اشکال کا خوبصورت استعمال',
      'ہر سائز اور ڈارک/لائٹ بیک گراؤنڈ پر یکساں موثر ساخت',
      'مکمل کلر کوڈز اور برانڈ گائیڈ لائنز کے ساتھ دستاویز',
      'مناسب فونٹس اور استعمال کے بنیادی اصول'
    ],
    techStack: ['Canva Pro', 'Vector Marks', 'Brand Guidelines', 'Minimalist Geometry', 'SVG'],
    status: 'Custom Brand Identity',
    statusUr: 'کسٹم برانڈ ڈیزائن',
    accentColor: '#818CF8',
    image: '/assets/projects/logos/sabri-jewellery.png',
    gallery: [
      '/assets/projects/logos/sabri-jewellery.png',
      '/assets/projects/logos/collab-studio.png',
      '/assets/projects/logos/anna-gretta.png',
      '/assets/projects/logos/leaf-style.png',
      '/assets/projects/logos/home-properties.png',
      '/assets/projects/logos/logo-style.png',
      '/assets/projects/logos/design-minimal.png'
    ],
    galleryTitles: [
      'Sabri Jewellery Monogram',
      'Collab Studio Architectural Mark',
      'Anna & Gretta Fashion Typography',
      'Leaf Style Eco Wellness Logo',
      'Home Properties Real Estate Emblem',
      'Logo Style Interlocking Tech Mark',
      'Apex Design Studio Diamond Icon'
    ],
    galleryItems: [
      {
        image: '/assets/projects/logos/sabri-jewellery.png',
        title: 'Sabri Jewellery',
        titleUr: 'صابری جیولری (Sabri Jewellery)',
        tagline: 'Luxury Handcrafted Monogram & Silhouette Identity',
        taglineUr: 'پرتعیش سونے اور ہیرے کے زیورات کا شاہکار لوگو',
        description: 'An exquisite luxury brand mark featuring a classical woman profile silhouette seamlessly woven inside a graceful serif "SB" monogram, communicating timeless royalty, prestige, and bespoke elegance.',
        descriptionUr: 'ایک پرتعیش جیولری برانڈ کے لیے کلاسیکل خواتین کی خوبصورت شبیہ اور مونوگرام "SB" کا شاہکار امتزاج، جو نفاست، وقار اور شاہانہ معیار کا عکاس ہے۔',
        tag: 'Luxury & Jewellery'
      },
      {
        image: '/assets/projects/logos/collab-studio.png',
        title: 'Collab Studio',
        titleUr: 'کولاب اسٹوڈیو (Collab Studio)',
        tagline: 'Creative Architecture & Collaborative Space',
        taglineUr: 'تخلیقی آرکیٹیکچر اور باہمی تعاون کا اسٹوڈیو',
        description: 'A bold, modern design agency identity featuring stepped isometric geometric blocks paired with a minimalist black focal sphere, symbolizing progressive momentum and teamwork.',
        descriptionUr: 'تخلیقی اسٹوڈیو کے لیے سنہری سیڑھی نما جیومیٹرک ساخت اور سیاہ نقطے پر مشتمل لوگو جو مسلسل ترقی اور ٹیم ورک کی علامت ہے۔',
        tag: 'Creative Agency'
      },
      {
        image: '/assets/projects/logos/anna-gretta.png',
        title: 'Anna & Gretta',
        titleUr: 'اینا اینڈ گریٹا (Anna & Gretta)',
        tagline: 'Contemporary Fashion & Lifestyle Typography',
        taglineUr: 'جدید فیشن اور لائف اسٹائل ٹائپوگرافی لوگو',
        description: 'A high-fashion brand emblem combining interconnected uppercase "A" and circular "G" letterforms, accented by a striking crimson crossbar for maximum brand memorability.',
        descriptionUr: 'فیشن اور لائف اسٹائل برانڈ کے لیے انگریزی حروف "A" اور "G" کے ملاپ اور سرخ رنگ کے خوبصورت تضاد سے تیار کردہ یادگار لوگو مارک۔',
        tag: 'Fashion & Lifestyle'
      },
      {
        image: '/assets/projects/logos/leaf-style.png',
        title: 'Leaf Style',
        titleUr: 'لیف اسٹائل (Leaf Style)',
        tagline: 'Organic Wellness & Eco-Conscious Brand Mark',
        taglineUr: 'قدرتی صحت اور ماحولیاتی برانڈ مارک',
        description: 'A balanced, minimalist dual-leaf emblem in vibrant organic green and deep charcoal black, engineered for eco-friendly goods, botanical products, and natural lifestyle companies.',
        descriptionUr: 'قدرتی و نباتاتی مصنوعات کے لیے سرسبز اور سیاہ پتوں کا متوازن اور پرسکون ڈیزائن جو ماحول دوستی اور صحت مندی کی عکاسی کرتا ہے۔',
        tag: 'Eco & Wellness'
      },
      {
        image: '/assets/projects/logos/home-properties.png',
        title: 'Home Properties',
        titleUr: 'ہوم پراپرٹیز (Home Properties)',
        tagline: 'Modern Real Estate & Architectural Developments',
        taglineUr: 'جدید رئیل اسٹیٹ اور ہاؤسنگ پراجیکٹس',
        description: 'A prestigious architectural identity combining minimalist continuous-line pitched roof contours and ascending mountain peak forms finished with a rich gold-to-bronze gradient.',
        descriptionUr: 'رئیل اسٹیٹ اور تعمیراتی فرم کے لیے مکانات کی چھتوں اور پہاڑی چوٹیوں کے لکیری خاکے پر مبنی سنہری گریڈینٹ والا باوقار لوگو۔',
        tag: 'Real Estate & Architecture'
      },
      {
        image: '/assets/projects/logos/logo-style.png',
        title: 'Logo Style Interlocking',
        titleUr: 'لوگو اسٹائل انٹرلاکنگ (Logo Style)',
        tagline: 'Fintech & Digital Connectivity Brand Mark',
        taglineUr: 'فن ٹیک اور ڈیجیٹل رابطوں کا سمبل',
        description: 'Geometric synergy symbol composed of two interlocking rounded diamond loops in electric cyan and obsidian black, representing data flow, integration, and security.',
        descriptionUr: 'ٹیکنالوجی اور ڈیٹا انضمام کے لیے دو آپس میں جڑے ہوئے راؤنڈڈ ڈائمنڈز کا جدید سمبل جو باہمی رابطے اور سیکیورٹی کو ظاہر کرتا ہے۔',
        tag: 'Tech & Software'
      },
      {
        image: '/assets/projects/logos/design-minimal.png',
        title: 'Apex Design Studio',
        titleUr: 'ایپیکس ڈیزائن اسٹوڈیو (Apex Design)',
        tagline: 'Geometric Diamond Icon & Negative Space Form',
        taglineUr: 'جیومیٹرک ڈائمنڈ اور نیگیٹو اسپیس آئیکن',
        description: 'A striking crimson square diamond emblem with a precision-cut internal architectural lettermark, delivering instant recognizability on digital interfaces, favicons, and signage.',
        descriptionUr: 'سرخ ہیرے کی شکل میں نیگیٹو اسپیس کے استعمال سے تیار کردہ جدید ویکٹر لوگو جو ایپ آئیکنز، فیو آئیکون اور ہائی ٹیک برانڈز کے لیے موزوں ہے۔',
        tag: 'Minimalist Branding'
      }
    ],
    downloadUrl: '/assets/projects/logos/sabri-jewellery.png',
    downloadType: 'image'
  },
  {
    id: 'business-cards',
    title: 'Business Cards Design',
    titleUr: 'بزنس کارڈ ڈیزائن',
    tagline: 'Premium Print-Ready Executive Stationery',
    taglineUr: 'پرتعیش اور پرنٹ کے لیے تیار کارپوریٹ بزنس کارڈز',
    category: 'design',
    categoryLabel: 'Print & Stationery',
    categoryLabelUr: 'پرنٹ و اسٹیشنری',
    description: 'Dual-sided luxury corporate business cards designed with precision typography, dynamic QR code integration for digital portfolios, and strict print-ready 300 DPI specifications.',
    descriptionUr: 'اعلیٰ معیار کے دو طرفہ بزنس کارڈز جن میں جدید ترین فونٹس، کیو آر کوڈ اور پرنٹنگ کے لیے تیار 300 DPI معیار شامل ہے۔',
    problem: 'Standard business cards frequently suffer from text crowding, poor alignment, lack of digital interactive touchpoints, and blurry print outputs.',
    problemUr: 'عام وزٹنگ کارڈز میں اکثر معلومات کی بھرمار، خراب پرنٹ کوالٹی اور ڈیجیٹل رابطے کا فقدان ہوتا ہے۔',
    solution: 'Engineered a balanced dual-sided card system with an elegant branding face and an actionable contact face featuring an embedded scannable QR code for instant portfolio access.',
    solutionUr: 'ایک ایسا متوازن دو طرفہ کارڈ تیار کیا جس کا ایک رخ برانڈ شناخت کے لیے اور دوسرا رخ فوری کیو آر کوڈ اور رابطے کی تفصیلات کے لیے مخصوص ہے۔',
    features: [
      '300 DPI CMYK print-ready layouts with proper bleed and safe zones',
      'Embedded high-density QR code linked directly to online portfolio',
      'Minimalist executive layout with generous breathing room',
      'Digital interactive PDF version for virtual networking'
    ],
    featuresUr: [
      'پرنٹنگ کے لیے مکمل 300 DPI کوالٹی اور معیاری بارڈرز',
      'پورٹ فولیو پر فوری رسائی کے لیے اسکین ایبل کیو آر کوڈ',
      'پیشہ ورانہ انداز اور خوبصورت منظم لے آؤٹ',
      'ڈیجیٹل شیئرنگ کے لیے خصوصی پی ڈی ایف فائل'
    ],
    techStack: ['Canva Pro', 'Print-Ready 300 DPI', 'QR Code Tech', 'Typography', 'Stationery'],
    status: 'Print & Digital Asset',
    statusUr: 'پرنٹ و ڈیجیٹل ایسٹ',
    accentColor: '#10B981',
    image: '/assets/projects/business-cards/card2-front.png',
    gallery: [
      '/assets/projects/business-cards/card2-front.png',
      '/assets/projects/business-cards/card1-front.png',
      '/assets/projects/business-cards/card3-front.png',
      '/assets/projects/business-cards/card4-front.png',
      '/assets/projects/business-cards/card5-front.png'
    ],
    galleryTitles: [
      'Modern Tech Card (Gull Muhammad)',
      'Executive Portrait Card (Gull Muhammad)',
      'Collab Studio Corporate Card',
      'Apex Design Hexagon Card',
      'Syed Zada Property Dealer Card'
    ],
    galleryItems: [
      {
        image: '/assets/projects/business-cards/card2-front.png',
        backImage: '/assets/projects/business-cards/card2-back.png',
        title: 'Modern Tech Card - Gull Muhammad',
        titleUr: 'ماڈرن ٹیک بزنس کارڈ - گل محمد',
        tagline: 'AI Agent Engineer & Web Developer • Dual-Sided with QR Code',
        taglineUr: 'اے آئی ایجنٹ انجینئر و ویب ڈویلپر • کیو آر کوڈ کے ساتھ دو طرفہ کارڈ',
        description: 'Modern high-contrast monochrome corporate card featuring a floating geometric cubes pattern and instant-scan portfolio QR code on the front, paired with structured designation badges, address, and verified contact credentials on the back.',
        descriptionUr: 'جدید بلیک اینڈ وائٹ کارڈ جس کے فرنٹ پر جیومیٹرک پیٹرن اور کیو آر کوڈ دیا گیا ہے، اور بیک پر اے آئی ایجنٹ انجینئر و ویب ڈویلپر کی اسکلز، فون نمبر اور ایڈریس درج ہے۔',
        tag: 'Tech & Portfolio'
      },
      {
        image: '/assets/projects/business-cards/card1-front.png',
        backImage: '/assets/projects/business-cards/card1-back.jpg',
        title: 'Executive Portrait Card - Gull Muhammad',
        titleUr: 'ایگزیکٹو پورٹریٹ کارڈ - گل محمد',
        tagline: 'Vertical Luxury Card with Personal Portrait & Monogram',
        taglineUr: 'عمودی پرتعیش بزنس کارڈ مع ذاتی تصویر و برانڈ مونوگرام',
        description: 'Vertical luxury stationery featuring a minimalist gold and white diamond emblem on the front, and a distinctive circular portrait frame, contact numbers, email, and Canva portfolio link on the back.',
        descriptionUr: 'عمودی انداز میں تیار کردہ ایگزیکٹو بزنس کارڈ جس کے فرنٹ پر گولڈن مونوگرام اور بیک پر تصویر، فون نمبر، ای میل اور پورٹ فولیو کا لنک شامل ہے۔',
        tag: 'Vertical Portrait'
      },
      {
        image: '/assets/projects/business-cards/card3-front.png',
        backImage: '/assets/projects/business-cards/card3-back.png',
        title: 'Collab Studio Corporate Card',
        titleUr: 'کولاب اسٹوڈیو کارپوریٹ کارڈ',
        tagline: 'General Manager Executive Card on Midnight Navy Palette',
        taglineUr: 'جنرل مینیجر کے لیے پروقار مڈنائٹ نیوی کارڈ',
        description: 'High-end dual-sided executive card showcasing the circular Collab Studio stepped mark on deep navy on the front, and a clean split-panel layout with General Manager title and office credentials on the back.',
        descriptionUr: 'کولاب اسٹوڈیو کا دو طرفہ کارپوریٹ کارڈ جس کے فرنٹ پر گہرے نیلے بیک گراؤنڈ پر لوگو اور بیک پر جنرل مینیجر کا نام اور تمام دفتری رابطے واضح ہیں۔',
        tag: 'Corporate Agency'
      },
      {
        image: '/assets/projects/business-cards/card4-front.png',
        backImage: '/assets/projects/business-cards/card4-back.png',
        title: 'Apex Design Hexagon Card',
        titleUr: 'ایپیکس ڈیزائن ہیکساگون کارڈ',
        tagline: 'Hexagonal Geometric Identity with Scannable QR Code',
        taglineUr: 'ہیکساگونل جیومیٹرک ڈیزائن مع فوری کیو آر کوڈ پورٹ فولیو',
        description: 'Striking dual-sided stationery built with high-contrast black and warm golden-amber diagonal framing, front-side scannable portfolio QR code with diamond mark, and full corporate brand contact details on the back.',
        descriptionUr: 'بلیک اور ایمبر گولڈ کے امتزاج میں ہیکساگونل فریم والا بزنس کارڈ جس کے فرنٹ پر پورٹ فولیو کیو آر کوڈ اور بیک پر برانڈ نیم، لوکیشن اور سوشل لنکس ہیں۔',
        tag: 'Hexagon Geometry'
      },
      {
        image: '/assets/projects/business-cards/card5-front.png',
        backImage: '/assets/projects/business-cards/card5-back.png',
        title: 'Syed Zada Property Dealer Card',
        titleUr: 'سید زادہ پراپرٹی ڈیلر کارڈ',
        tagline: 'Real Estate Executive Card with Chevron Arrow Styling',
        taglineUr: 'شیوران ایرو اسٹائلنگ مع رئیل اسٹیٹ سروسز',
        description: 'Distinctive real estate business card with mountain-roofline emblem and "Buy • Sell • Rent" badge on the front, accompanied by property dealer credentials, website, location, and scannable QR code on the back.',
        descriptionUr: 'رئیل اسٹیٹ بزنس کارڈ جس کے فرنٹ پر ماؤنٹین روف لائن لوگو اور "خرید و فروخت" کی سروسز ہیں، اور بیک پر ڈیلر کے رابطہ نمبرز، ویب سائٹ اور کیو آر کوڈ موجود ہیں۔',
        tag: 'Real Estate'
      }
    ],
    downloadUrl: '/assets/projects/business-cards/card2-front.png',
    downloadType: 'image'
  },
  {
    id: 'portfolio-design',
    title: 'Portfolio Design & Architecture',
    titleUr: 'پورٹ فولیو ڈیزائن اور آرکیٹیکچر',
    tagline: 'Bespoke Futuristic Agency-Grade Personal Branding Site',
    taglineUr: 'مستقبل نما، جدید اور ایجنسی گریڈ پورٹ فولیو ویب ڈیزائن',
    category: 'web-dev',
    categoryLabel: 'UI/UX & Engineering',
    categoryLabelUr: 'یو آئی/یو ایکس و انجینئرنگ',
    description: 'Full-scale design and implementation of an international agency-grade personal portfolio with interactive dark theme, flowing background waves, and smooth entrance reveals.',
    descriptionUr: 'بین الاقوامی معیار کی جدید ترین پورٹ فولیو ویب سائٹ کا مکمل ڈیزائن اور تیاری، جس میں ڈارک موڈ، فلوئنگ بیک گراؤنڈ ویوز اور ہموار اینیمیشنز شامل ہیں۔',
    problem: 'Standard resumes and generic templates fail to convey modern AI agent skills, interactive front-end mastery, and dynamic visual craftsmanship simultaneously.',
    problemUr: 'سادہ سی وی اور عام پیجز اے آئی اور جدید ویب ڈویلپمنٹ کی حقیقی صلاحیتوں کا درست احاطہ نہیں کر پاتے۔',
    solution: 'Designed and engineered a complete digital presence featuring a deep cybernetic palette, high-contrast typography, interactive modals, and full bilingual internationalization.',
    solutionUr: 'ایک مکمل ڈیجیٹل پورٹ فولیو ڈیزائن کیا جس میں گہرے نیلے بیک گراؤنڈز، انٹرایکٹو موڈلز اور بہترین یوزر ایکسپیرینس شامل ہے۔',
    features: [
      'Futuristic cyan and deep navy background theme with technical grids',
      'Smooth scroll-triggered reveals and interactive hover micro-animations',
      'Integrated curriculum vitae modal preview and download workflows',
      '100% responsive architecture with zero layout shifts'
    ],
    featuresUr: [
      'مستقبل نما نیوی اور سیان بیک گراؤنڈ تھیم اور گرڈ پیٹرنز',
      'اسکرول پر ہموار اینیمیشنز اور خوبصورت انٹرایکشنز',
      'سی وی دیکھنے اور ڈاؤن لوڈ کرنے کی فوری سہولت',
      'موبائل اور کمپیوٹر پر بغیر کسی نقص کے مکمل ریسپانسیو لے آؤٹ'
    ],
    techStack: ['Canva Pro', 'UI/UX Architecture', 'Brand Presentation', 'Layout Design', 'Graphic Systems'],
    status: 'Completed & Production Ready',
    statusUr: 'مکمل اور پروڈکشن ریڈی',
    accentColor: '#00D9F5',
    image: '/assets/projects/portfolio-design/1.png',
    gallery: [
      '/assets/projects/portfolio-design/1.png',
      '/assets/projects/portfolio-design/2.png',
      '/assets/projects/portfolio-design/3.png',
      '/assets/projects/portfolio-design/4.png',
      '/assets/projects/portfolio-design/5.png',
      '/assets/projects/portfolio-design/6.png',
      '/assets/projects/portfolio-design/7.png',
      '/assets/projects/portfolio-design/8.png',
      '/assets/projects/portfolio-design/9.png',
      '/assets/projects/portfolio-design/10.png',
      '/assets/projects/portfolio-design/11.png',
      '/assets/projects/portfolio-design/12.png'
    ],
    galleryTitles: [
      '1. Hero Section - Introduction',
      '2. About Me - Stats & Profile',
      '3. Resume - Education & Experience',
      '4. Portfolio Showcase - All Works',
      '5. Portfolio - Social Media Posts',
      '6. Portfolio - Business Cards Design',
      '7. Portfolio - YouTube & TikTok Thumbnails',
      '8. Portfolio - Logos & Brand Marks',
      '9. Portfolio - Back Covers & Banners',
      '10. Testimonials - Client Reviews',
      '11. Contact - Get in Touch & Hire Me',
      '12. Thank You - Closing Note'
    ],
    galleryItems: [
      {
        image: '/assets/projects/portfolio-design/1.png',
        title: '01. Hero Section - Introduction',
        titleUr: '۰۱۔ ہیرو سیکشن - تعارف',
        tagline: 'Hi There! I\'m Gull Muhammad • Graphics Designer & Photographer',
        taglineUr: 'میرا نام گل محمد ہے • گرافکس ڈیزائنر و فوٹوگرافر',
        description: 'Primary landing screen featuring bold high-contrast typography, personal circular portrait with radial service icons, and clear "Ready to Handle Your New Projects" headline.',
        descriptionUr: 'پورٹ فولیو کا بنیادی صفحہ جس میں جلی حروف، ذاتی پورٹریٹ، سروسز آئیکونز اور "نئے پراجیکٹس کے لیے دستیاب" کی واضح کال ٹو ایکشن موجود ہے۔',
        tag: 'Slide 01: Hero'
      },
      {
        image: '/assets/projects/portfolio-design/2.png',
        title: '02. About Me - Professional Profile',
        titleUr: '۰۲۔ اباؤٹ می - پیشہ ورانہ تعارف',
        tagline: '3+ Years Experience • 350+ Projects • 250+ Happy Clients',
        taglineUr: '3+ سال کا تجربہ • 350+ پراجیکٹس • 250+ مطمئن کلائنٹس',
        description: 'About Me screen highlighting core statistics in stylish hexagonal metrics, detailing Canva branding expertise, and showcasing a persistent navigation sidebar.',
        descriptionUr: 'پیشہ ورانہ تعارف جس میں ہیکساگونل شکلوں میں اعداد و شمار (350+ پراجیکٹس، 250+ کلائنٹس) اور سائیڈ نیویگیشن مینو شامل ہے۔',
        tag: 'Slide 02: About'
      },
      {
        image: '/assets/projects/portfolio-design/3.png',
        title: '03. Resume - Education & Timeline',
        titleUr: '۰۳۔ ریزیومے - تعلیم و تجربہ',
        tagline: 'Intermediate Computer Science & Professional Graphic Design Experience',
        taglineUr: 'انٹرمیڈیٹ کمپیوٹر سائنس اور پروفیشنل گرافک ڈیزائن کا عملی تجربہ',
        description: 'Structured resume slide mapping academic background in computer science along with graphic design and global freelance milestones from 2023 to the present.',
        descriptionUr: 'تعلیمی قابلیت (کمپیوٹر سائنس) اور 2023 سے تا حال گرافک ڈیزائننگ اور فری لانسنگ کے عملی سنگ میل کا باقاعدہ خاکہ۔',
        tag: 'Slide 03: Resume'
      },
      {
        image: '/assets/projects/portfolio-design/4.png',
        title: '04. Portfolio - All Projects Overview',
        titleUr: '۰۴۔ پورٹ فولیو - تمام پراجیکٹس اوورویو',
        tagline: 'Categorized Work Matrix • Posts, Cards, Logos, Thumbnails & Banners',
        taglineUr: 'پراجیکٹس کا جامع میٹرکس • پوسٹس، کارڈز، لوگوز، تھمب نیلز اور بینرز',
        description: 'Master portfolio grid showcasing a wide spectrum of creative deliverables across clothing mockups, infographics, marketing posters, and brand marks.',
        descriptionUr: 'تمام کیٹیگریز پر مشتمل ماسٹر گرڈ جس میں ہوڈی ماک اپس، انفوگرافکس، بینرز اور لوگو ڈیزائنز ایک ساتھ دکھائی دیتے ہیں۔',
        tag: 'Slide 04: All Works'
      },
      {
        image: '/assets/projects/portfolio-design/5.png',
        title: '05. Portfolio - Social Media Posts',
        titleUr: '۰۵۔ پورٹ فولیو - سوشل میڈیا پوسٹس',
        tagline: 'High-Conversion Promotional Graphics & Advertising Campaigns',
        taglineUr: 'پرکشش پروموشنل پوسٹس اور کمرشل اشتہارات',
        description: 'Dedicated social media showcase presenting digital photography flyers, food menu layouts, marketing agency graphics, and automotive car rental banners.',
        descriptionUr: 'سوشل میڈیا کے لیے تیار کردہ پوسٹس کا خصوصی شوکیس: فوٹوگرافی فلائر، فوڈ مینو، مارکیٹنگ ایجنسی پوسٹر اور کار رینٹل بینر۔',
        tag: 'Slide 05: Posts'
      },
      {
        image: '/assets/projects/portfolio-design/6.png',
        title: '06. Portfolio - Business Cards Design',
        titleUr: '۰۶۔ پورٹ فولیو - بزنس کارڈز ڈیزائن',
        tagline: 'Dual-Sided Executive Stationery with Embedded QR Codes',
        taglineUr: 'کیو آر کوڈ سے لیس پروقار دو طرفہ بزنس کارڈز',
        description: 'Business card showcase displaying modern monochrome corporate cards and warm geometric hexagon stationery complete with contact credentials and QR codes.',
        descriptionUr: 'پیشہ ورانہ بزنس کارڈز کا ڈسپلے جس میں بلیک اینڈ وائٹ اور گولڈن ہیکساگونل کارڈز کے فرنٹ اور بیک شامل ہیں۔',
        tag: 'Slide 06: Cards'
      },
      {
        image: '/assets/projects/portfolio-design/7.png',
        title: '07. Portfolio - YouTube & TikTok Thumbnails',
        titleUr: '۰۷۔ پورٹ فولیو - یوٹیوب و ٹک ٹاک تھمب نیلز',
        tagline: 'High-CTR Angled Thumbnails with Compelling Visual Hooks',
        taglineUr: 'ہائی کلک تھرو ریٹ (CTR) والے پرکشش ویڈیو تھمب نیلز',
        description: 'Dynamic thumbnail designs for viral video content including "How to Create UK TikTok Account" and "Build Powerful AI Agents in 10 Minutes" featuring custom cutout graphics.',
        descriptionUr: 'وائرل ویڈیوز کے لیے ہائی CTR تھمب نیلز: یو کے ٹک ٹاک اکاؤنٹ اور 10 منٹ میں اے آئی ایجنٹس بنانے کے طریقہ کار پر مبنی ڈیزائنز۔',
        tag: 'Slide 07: Thumbnails'
      },
      {
        image: '/assets/projects/portfolio-design/8.png',
        title: '08. Portfolio - Logos & Brand Marks',
        titleUr: '۰۸۔ پورٹ فولیو - لوگو اور برانڈ شناخت',
        tagline: 'Vector Brand Identity Suite • Real Estate, Eco, Studio & Fashion',
        taglineUr: 'ویکٹر لوگو شناخت • رئیل اسٹیٹ، نیچر، اسٹوڈیو اور فیشن',
        description: 'Presentation grid displaying 6 custom minimalist logos: Home Properties, Leaf Style, Collab Studio, Logo Style, Apex Design, and Anna & Gretta.',
        descriptionUr: 'چھ منفرد برانڈ لوگوز کا تصویری مجموعہ: ہوم پراپرٹیز، لیف اسٹائل، کولاب اسٹوڈیو، لوگو اسٹائل، ایپیکس ڈیزائن اور اینا اینڈ گریٹا۔',
        tag: 'Slide 08: Logos'
      },
      {
        image: '/assets/projects/portfolio-design/9.png',
        title: '09. Portfolio - Back Covers & Banners',
        titleUr: '۰۹۔ پورٹ فولیو - بیک کورز و بینرز',
        tagline: 'Wide-Format Social Media Banners & Channel Art',
        taglineUr: 'سوشل میڈیا ہائی ڈیفینیشن بینرز اور چینل آرٹ',
        description: 'Wide panoramic social header designs for LinkedIn, YouTube, and Facebook featuring cyber-tech hexagons, personal portraits, and AI engineering services.',
        descriptionUr: 'لنکڈ ان، فیس بک اور یوٹیوب کے لیے چوڑے بینرز جن میں اے آئی آٹومیشن، کینوا ڈیزائن اور تکنیکی مہارتوں کو پیش کیا گیا ہے۔',
        tag: 'Slide 09: Banners'
      },
      {
        image: '/assets/projects/portfolio-design/10.png',
        title: '10. Testimonials - Client Reviews',
        titleUr: '۱۰۔ ٹیسٹیمونیئلز - کلائنٹ ریویوز',
        tagline: 'Trusted by Clients Worldwide for Speed, Quality & Communication',
        taglineUr: 'رفتار، معیار اور بہترین رابطے کے لیے کلائنٹس کا اعتماد',
        description: 'Client feedback cards highlighting five-star reviews on complex product transformation, wireframing, prompt delivery, and seamless collaboration.',
        descriptionUr: 'بین الاقوامی کلائنٹس کے تصدیقی تاثرات جو تیز رفتار ڈیلیوری، معیاری ڈیزائن اور اعلیٰ کارکردگی کی گواہی دیتے ہیں۔',
        tag: 'Slide 10: Reviews'
      },
      {
        image: '/assets/projects/portfolio-design/11.png',
        title: '11. Contact - Get in Touch & Hire Me',
        titleUr: '۱۱۔ رابطہ - رابطہ کریں اور ہائر کریں',
        tagline: 'Available for Freelance Projects, Branding & Collaborations',
        taglineUr: 'فری لانس پراجیکٹس، برانڈنگ اور باہمی تعاون کے لیے دستیاب',
        description: 'Direct contact section providing live Canva portfolio URL, active phone lines (+92 328-8394863, +92 343-1771416), LinkedIn link, and scannable QR code.',
        descriptionUr: 'رابطے کا مکمل صفحہ مع کینوا پورٹ فولیو لنک، دو فون نمبرز، لنکڈ ان ایڈریس اور اسکین ایبل کیو آر کوڈ۔',
        tag: 'Slide 11: Contact'
      },
      {
        image: '/assets/projects/portfolio-design/12.png',
        title: '12. Thank You - Closing Slide',
        titleUr: '۱۲۔ شکریہ - اختتامی سلائیڈ',
        tagline: 'Thank You for Visiting My Portfolio • "Creativity turns ideas into reality"',
        taglineUr: 'پورٹ فولیو وزٹ کرنے کا شکریہ • "تخلیقیت خوابوں کو حقیقت میں بدلتی ہے"',
        description: 'Final appreciation screen with a warm message, handshake collaboration icon, and the signature motto: "Creativity turns ideas into reality."',
        descriptionUr: 'شکریہ کی اختتامی سلائیڈ جس میں باہمی تعاون کی دعوت اور خوبصورت قول درج ہے: "تخلیقیت خوابوں کو حقیقت میں بدلتی ہے۔"',
        tag: 'Slide 12: Thank You'
      }
    ],
    downloadUrl: '/assets/projects/portfolio-design/1.png',
    downloadType: 'image',
    liveUrl: 'https://gull-portfolio.my.canva.site'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    titleUr: 'ورک فلو آٹومیشن (Workflow Automation)',
    tagline: 'Autonomous n8n Pipelines, Webhook Triggers & API Connectors',
    taglineUr: 'خودکار ورک فلوز، این ایٹ این پائپ لائنز اور اے پی آئی کنیکٹرز',
    category: 'automation',
    categoryLabel: 'Automation Pipeline',
    categoryLabelUr: 'آٹومیشن پائپ لائن',
    description: 'End-to-end automated workflow architecture built with n8n, webhooks, and AI agent nodes to streamline repetitive business processes, sync multi-platform data, and trigger real-time actions.',
    descriptionUr: 'n8n، ویب ہکس اور اے آئی ایجنٹس پر مشتمل مکمل خودکار ورک فلوز جو دہرائے جانے والے کاروباری کاموں کو خودکار بناتے ہیں اور ڈیٹا کو حقیقی وقت میں سنک کرتے ہیں۔',
    problem: 'Manual cross-platform data entry, repetitive notifications, and fragmented web services drain valuable productive hours and create costly human-error bottlenecks.',
    problemUr: 'مختلف ایپس اور سروسز کے درمیان بار بار ڈیٹا کاپی کرنا اور دستی کام وقت اور محنت کو ضائع کرتے ہیں اور غلطیوں کا سبب بنتے ہیں۔',
    solution: 'Designed autonomous n8n workflows integrated with custom webhooks, secure REST endpoints, Google Sheets, Gmail, and LLM nodes for intelligent decision-making and automated task execution.',
    solutionUr: 'این ایٹ این، کسٹم ویب ہکس، اور اے آئی ماڈلز کو ملا کر ایک ایسا پائیدار خودکار نظام بنایا جو بغیر کسی انسانی مداخلت کے ڈیٹا منتقل اور کام مکمل کرتا ہے۔',
    features: [
      'Event-driven multi-step webhook architecture with instant triggers',
      'AI prompt enrichment & automatic content summarization nodes',
      'Automated error handling, retry logic, and Telegram/Discord alerts',
      'Bi-directional sync between CRM, Google Sheets, APIs, and databases'
    ],
    featuresUr: [
      'ایونٹ ڈریون ویب ہک ٹرگرز اور کثیر مرحلہ خودکار ایکشنز',
      'اے آئی پرامپٹس کے ذریعے ڈیٹا کی خودکار تلخیص اور پراسیسنگ',
      'غلطی کی صورت میں خودکار ری ٹرائی اور الرٹ نوٹیفیکیشنز',
      'سی آر ایم، گوگل شیٹس اور ڈیٹا بیسز کے درمیان خودکار ڈیٹا کی منتقلی'
    ],
    techStack: ['n8n', 'Webhooks', 'REST APIs', 'Google Gemini', 'JSON Data', 'Automation'],
    status: 'Production Automation System',
    statusUr: 'پروڈکشن آٹومیشن سسٹم',
    accentColor: '#00D9F5',
    image: '/assets/projects/workflow-automation/ai-form-enrichment.jpg',
    gallery: [
      '/assets/projects/workflow-automation/ai-form-enrichment.jpg',
      '/assets/projects/workflow-automation/scheduled-http-scraper.jpg',
      '/assets/projects/workflow-automation/chat-web-agent.jpg',
      '/assets/projects/workflow-automation/multi-trigger-lead-pipeline.jpg',
      '/assets/projects/workflow-automation/looping-dedup-scraper.png',
      '/assets/projects/workflow-automation/groq-multi-agent-assistant.jpg'
    ],
    galleryTitles: [
      '1. AI Agent Lead Enrichment & Entity Extraction',
      '2. Automated Scheduled Web Monitor & Conditional Pipeline',
      '3. Conversational Research Agent with Real-Time Web Scraping',
      '4. Multi-Trigger Lead Management, Gmail Dispatch & Slack Alerts',
      '5. High-Volume Paginated Scraper with Looping & Deduplication',
      '6. Groq-Powered Multi-Agent Coding Assistant & Knowledge Bot'
    ],
    galleryItems: [
      {
        image: '/assets/projects/workflow-automation/ai-form-enrichment.jpg',
        title: '01. AI Agent Lead Enrichment & Entity Extraction',
        titleUr: '۰۱۔ اے آئی لیڈ اینرچمنٹ و ڈیٹا ایکسٹریکشن پائپ لائن',
        tagline: 'Automated Form Processing with OpenRouter LLM, Regex Extraction & Google Sheets',
        taglineUr: 'خودکار فارم پروسیسنگ، ڈیٹا نکالنے اور گوگل شیٹس سنکرونائزیشن',
        description: 'An automated n8n workflow triggered upon form submission that queries external HTTP endpoints, extracts contact entities (emails, phone numbers, verified URLs) via custom regex, passes enriched context to an OpenRouter-powered AI Agent with memory, and automatically logs structured rows into Google Sheets and exportable CSVs.',
        descriptionUr: 'ایک جدید n8n ورک فلو جو فارم جمع ہونے پر خودکار متحرک ہوتا ہے۔ یہ بیرونی APIs سے رابطہ کرتا ہے، ای میل، فون اور ویب لنکس نکالتا ہے، OpenRouter اے آئی ایجنٹ کے ذریعے ڈیٹا کا تجزیہ کرتا ہے اور منظم ریکارڈ گوگل شیٹس اور CSV میں محفوظ کرتا ہے۔',
        tag: 'Form Enrichment & LLM'
      },
      {
        image: '/assets/projects/workflow-automation/scheduled-http-scraper.jpg',
        title: '02. Automated Scheduled Web Monitor & Conditional Pipeline',
        titleUr: '۰۲۔ شیڈولڈ ویب مانیٹر و کنڈیشنل پائپ لائن',
        tagline: 'Cron-Based HTTP Poller with Dynamic Conditional Logic & Field Mapping',
        taglineUr: 'شیڈول ٹرگر، خودکار ڈیٹا مانیٹرنگ اور فیلڈ میپنگ',
        description: 'A robust cron-triggered automation that periodically executes HTTP GET requests against target web servers, evaluates content changes via conditional branching ("If" node), and maps custom fields dynamically based on execution status.',
        descriptionUr: 'مخصوص شیڈول کے مطابق چلنے والا خودکار ورک فلو جو ویب سائٹس سے ڈیٹا حاصل کرتا ہے، "If" کنڈیشن کے ذریعے تبدیلیوں کی جانچ کرتا ہے اور ڈیٹا کو مطلوبہ فارمیٹ میں ایڈٹ کر کے محفوظ کرتا ہے۔',
        tag: 'Cron & Web Monitor'
      },
      {
        image: '/assets/projects/workflow-automation/chat-web-agent.jpg',
        title: '03. Conversational Research Agent with Real-Time Web Scraping',
        titleUr: '۰۳۔ ریئل ٹائم ویب اسکریپنگ والا اے آئی چیٹ بوٹ',
        tagline: 'Chat-Triggered AI Agent with Memory, Web Extraction & Calculator Tools',
        taglineUr: 'مستقل میموری، ویب کونٹنٹ ایکسٹریکشن اور میتھ ٹولز کا حامل ایجنٹ',
        description: 'A multi-step conversational AI system that listens for incoming chat messages, dynamically decides whether to fetch live web pages via HTTP and HTML parsers, and equips an OpenRouter LLM agent with conversation memory and computation tools to answer complex user queries with verified web facts.',
        descriptionUr: 'چیٹ پر مبنی ذہین اے آئی اسسٹنٹ جو صارف کے سوال کی بنیاد پر لائیو ویب پیجز سے معلومات حاصل کرتا ہے، چیٹ ہسٹری یاد رکھتا ہے اور حساب کتاب کے ٹولز استعمال کر کے جامع جوابات دیتا ہے۔',
        tag: 'Chatbot & Web Agent'
      },
      {
        image: '/assets/projects/workflow-automation/multi-trigger-lead-pipeline.jpg',
        title: '04. Multi-Trigger Lead Management, Gmail Dispatch & Slack Alerts',
        titleUr: '۰۴۔ ملٹی ٹرگر لیڈ مینجمنٹ، ای میل اور سلیک الرٹس',
        tagline: 'End-to-End CRM Automation with JavaScript Transformation & Team Notifications',
        taglineUr: 'ویب ہکس، گوگل شیٹس، خودکار جی میل اور سلیک نوٹیفکیشنز',
        description: 'A high-volume enterprise workflow supporting triple input triggers (manual execution, form submission, and webhooks). It normalizes incoming payload data using native JavaScript, syncs records to Google Sheets, dispatches personalized confirmation emails via Gmail, aggregates new leads, and pushes real-time summaries to Slack channels.',
        descriptionUr: 'کاروباری اداروں کے لیے مکمل خودکار پائپ لائن جو ویب ہکس اور فارمز سے لیڈز وصول کرتی ہے، جاوا اسکرپٹ سے ڈیٹا صاف کرتی ہے، شیٹس میں محفوظ کر کے گاہک کو ای میل اور ٹیم کو فوری سلیک میسج بھیجتی ہے۔',
        tag: 'CRM & Slack/Gmail'
      },
      {
        image: '/assets/projects/workflow-automation/looping-dedup-scraper.png',
        title: '05. High-Volume Paginated Scraper with Looping & Deduplication',
        titleUr: '۰۵۔ لوپنگ اور ڈپلیکیٹ ریموول کے ساتھ ایڈوانسڈ اسکریپر',
        tagline: 'Automated Data Scraping with Rate-Limiting Delays & Google Sheets Sync',
        taglineUr: 'صفحہ در صفحہ ڈیٹا نکالنے اور محفوظ کرنے کا مکمل نظام',
        description: 'An advanced data mining architecture designed for paginated web platforms. It incorporates rate-limiting wait timers to prevent rate limit blocks, filters noise, eliminates duplicate entries at two stages, and executes structured item loops to ingest thousands of items into Google Sheets without data loss.',
        descriptionUr: 'ہزاروں ریکارڈز کے لیے ایڈوانسڈ ڈیٹا اسکریپنگ ورک فلو جو خودکار طور پر اگلے صفحات پر جاتا ہے، ڈپلیکیٹ ڈیٹا ہٹاتا ہے، وقفے (Wait) کے ساتھ بلاک ہونے سے بچتا ہے اور صاف ڈیٹا گوگل شیٹس میں بھرتا ہے۔',
        tag: 'Data Mining & Looping'
      },
      {
        image: '/assets/projects/workflow-automation/groq-multi-agent-assistant.jpg',
        title: '06. Groq-Powered Multi-Agent Coding Assistant & Knowledge Bot',
        titleUr: '۰۶۔ گروک ایل ایل ایم ملٹی ایجنٹ کوڈنگ و ریسرچ اسسٹنٹ',
        tagline: 'Ultra-Fast Groq Inference with Wikipedia, Code Generation & Email Actions',
        taglineUr: 'تیز ترین گروک اے آئی، ویکیپیڈیا ریسرچ، کوڈ جنریٹر اور ای میل انضمام',
        description: 'A state-of-the-art dual-agent architecture powered by Groq\'s ultra-low latency inference engine. It pairs a knowledge extraction agent with a coding assistant equipped with Wikipedia research, calculator, and code execution capabilities, complete with automated Gmail notification dispatch upon task completion.',
        descriptionUr: 'گروک کے سپر فاسٹ اے آئی ماڈل پر تیار کردہ جدید ڈوئل ایجنٹ سسٹم جو لائیو چیٹ میں کوڈنگ میں مدد دیتا ہے، ویکیپیڈیا سے تحقیق کرتا ہے اور مکمل ہونے پر خودکار جی میل الرٹ بھیجتا ہے۔',
        tag: 'Groq LLM & Multi-Agent'
      }
    ],
    downloadUrl: '/assets/projects/workflow-automation/ai-form-enrichment.jpg',
    downloadType: 'image',
    liveUrl: 'https://www.linkedin.com/in/gull-muhammad-91a56240a/recent-activity/all/'
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'step-1',
    phase: 'Foundation',
    phaseUr: 'بنیاد',
    title: 'Programming Foundations & Computational Thinking',
    titleUr: 'پروگرامنگ کی بنیادی تعلیم اور فکری صلاحیت',
    description: 'Began the deep exploration of computer science fundamentals, data structures, algorithms, and logic-building, establishing a rigorous foundation for modern software engineering.',
    descriptionUr: 'کمپیوٹر سائنس کے بنیادی اصولوں، ڈیٹا اسٹرکچرز اور منطق کی گہری سمجھ بوجھ کے ساتھ تکنیکی سفر کا آغاز کیا تاکہ جدید سافٹ ویئر انجینئرنگ کی مضبوط بنیاد رکھی جا سکے۔',
    focusAreas: ['Core Programming Logic', 'Data Structures & Algorithms', 'Problem Solving', 'Clean Code Principles'],
    focusAreasUr: ['بنیادی پروگرامنگ لاجک', 'ڈیٹا اسٹرکچرز اور الگورتھمز', 'مسائل کا حل', 'صاف ستھرا معیاری کوڈ']
  },
  {
    id: 'step-2',
    phase: 'Web Development',
    phaseUr: 'ویب ڈویلپمنٹ',
    title: 'Modern Web Engineering & Interactive UI/UX',
    titleUr: 'جدید ویب انجینئرنگ اور انٹرایکٹو انٹرفیسز',
    description: 'Mastered semantic HTML5, modern CSS3, JavaScript (ES6+), and TypeScript, advancing to component-driven frontend architecture with React and utility-first Tailwind CSS.',
    descriptionUr: 'جدید ایچ ٹی ایم ایل، سی ایس ایس، جاوا اسکرپٹ اور ٹائپ اسکرپٹ پر مکمل عبور حاصل کرتے ہوئے React اور Tailwind CSS کے ذریعے دلکش اور تیز رفتار ویب سائٹس کی تعمیر کا آغاز کیا۔',
    focusAreas: ['React & Component Architecture', 'TypeScript Type Safety', 'Responsive Web Layouts', 'UI/UX Design Systems'],
    focusAreasUr: ['React اور کمپوننٹ آرکیٹیکچر', 'ٹائپ اسکرپٹ کی درستی', 'موبائل ریسپانسیو ڈیزائن', 'جدید UI/UX سسٹمز']
  },
  {
    id: 'step-3',
    phase: 'AI Exploration',
    phaseUr: 'اے آئی دریافت',
    title: 'Exploring AI Technologies, LLMs & Prompt Engineering',
    titleUr: 'جدید اے آئی، لارج لینگویج ماڈلز اور پرامپٹ انجینئرنگ',
    description: 'Dived into the rapidly advancing frontier of generative AI, exploring large language models, prompt orchestration, token dynamics, and model context optimization across OpenAI, Gemini, and Claude.',
    descriptionUr: 'جنریٹو اے آئی کے انقلابی میدان میں قدم رکھتے ہوئے OpenAI، Gemini اور Claude جیسے معروف ماڈلز، پرامپٹ سٹرکچرز اور کانٹیکسٹ مینجمنٹ کی باریکیوں کا عملی مطالعہ کیا۔',
    focusAreas: ['Prompt Engineering & Context Design', 'Gemini & OpenAI API Integration', 'Token Efficiency', 'Structured Model Outputs'],
    focusAreasUr: ['پرامپٹ انجینئرنگ اور کانٹیکسٹ ڈیزائن', 'Gemini اور OpenAI API انضمام', 'ٹوکن کی بچت اور رفتار', 'منظم ماڈل جوابات']
  },
  {
    id: 'step-4',
    phase: 'Agent Engineering',
    phaseUr: 'ایجنٹ انجینئرنگ',
    title: 'Building Intelligent AI Agents & Agentic RAG',
    titleUr: 'ذہین اے آئی ایجنٹس اور ایجنٹک RAG کا نفاذ',
    description: 'Advanced into multi-agent systems, autonomous reasoning loops (ReAct), retrieval-augmented generation (RAG), and Model Context Protocol (MCP) using LangChain and LangGraph.',
    descriptionUr: 'سادہ چیٹ سے آگے بڑھ کر LangChain اور LangGraph کی مدد سے ایسے خود مختار ایجنٹس تیار کیے جو سوچ سمجھ کر فیصلے کر سکتے ہیں اور ٹولز استعمال کر سکتے ہیں۔',
    focusAreas: ['LangChain & LangGraph Orchestration', 'Agentic RAG Pipelines', 'Autonomous Tool Execution', 'Model Context Protocol (MCP)'],
    focusAreasUr: ['LangChain اور LangGraph فریم ورک', 'ایجنٹک RAG پائپ لائنز', 'ٹولز کا خودکار استعمال', 'ماڈل کانٹیکسٹ پروٹوکول (MCP)']
  },
  {
    id: 'step-5',
    phase: 'Automation',
    phaseUr: 'آٹومیشن',
    title: 'Developing Automation Systems & API Workflows',
    titleUr: 'خودکار سسٹمز اور اے پی آئی ورک فلوز کی تشکیل',
    description: 'Engineered comprehensive automated workflows using n8n, webhooks, and REST APIs, interconnecting intelligent models with practical digital workflows to eliminate repetitive manual overhead.',
    descriptionUr: 'n8n، ویب ہکس اور REST APIs کے ذریعے ایسے جدید خودکار سسٹمز بنائے جو انسانی مداخلت کے بغیر پیچیدہ ڈیٹا اور کاموں کو خود بخود مکمل کرتے ہیں۔',
    focusAreas: ['n8n Workflow Automation', 'Webhook Triggers & Data Pipelines', 'API Orchestration', 'Autonomous Cron & Event Routines'],
    focusAreasUr: ['n8n ورک فلو آٹومیشن', 'ویب ہک ٹرگرز اور ڈیٹا روٹنگ', 'اے پی آئی اور سروسز کا رابطہ', 'خودکار شیڈولنگ اور ایونٹس']
  },
  {
    id: 'step-6',
    phase: 'Innovation',
    phaseUr: 'جدت طرازی',
    title: 'Full-Stack AI Projects & Practical Digital Solutions',
    titleUr: 'فل اسٹیک اے آئی پراجیکٹس اور عملی ڈیجیٹل حل',
    description: 'Synthesizing AI agent engineering, automation systems, modern web engineering, and Canva digital design into end-to-end, high-impact personal technology projects.',
    descriptionUr: 'اے آئی ایجنٹ انجینئرنگ، اسمارٹ آٹومیشن، جدید ویب ڈویلپمنٹ اور تخلیقی گرافک ڈیزائن کو یکجا کر کے حقیقی دنیا کے مسائل حل کرنے والے عملی پراجیکٹس پر کام جاری ہے۔',
    focusAreas: ['End-to-End AI Web Apps', 'Autonomous Agentic Systems', 'High-Performance UI/UX', 'Continuous Technology Research'],
    focusAreasUr: ['مکمل AI ویب ایپلی کیشنز', 'خود مختار ایجنٹک سسٹمز', 'تیز رفتار اور معیاری UI/UX', 'مسلسل جدید تحقیق اور ترقی']
  }
];
