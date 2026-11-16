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
      { name: 'OpenAI API' },
      { name: 'Google Gemini', highlight: true },
      { name: 'Claude API' },
      { name: 'MCP (Model Context Protocol)', highlight: true },
      { name: 'Prompt Engineering' },
      { name: 'Agentic RAG', highlight: true },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    titleUr: 'ویب ڈویلپمنٹ',
    iconName: 'Code2',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript', highlight: true },
      { name: 'React', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Bootstrap' },
      { name: 'Responsive Web Design' },
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
      { name: 'API Integration' },
      { name: 'AI Automation', highlight: true },
      { name: 'Webhooks' },
      { name: 'MCP Integrations' },
    ],
  },
  {
    id: 'design',
    title: 'Creative Design',
    titleUr: 'تخلیقی ڈیزائن',
    iconName: 'Palette',
    skills: [
      { name: 'Canva', highlight: true },
      { name: 'Presentation Design' },
      { name: 'Graphic Design' },
      { name: 'Logo Design' },
      { name: 'Social Media Design' },
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
    tagline: 'AI-Powered Gaming Assistant System',
    taglineUr: 'گیمنگ کے لیے جدید ترین اے آئی اسسٹنٹ سسٹم',
    category: 'ai-agents',
    categoryLabel: 'AI Agent System',
    categoryLabelUr: 'اے آئی ایجنٹ سسٹم',
    description: 'An advanced AI-powered assistant engineered to analyze gameplay scenarios, formulate tactical recommendations, and deliver real-time strategic guidance to players.',
    descriptionUr: 'ایک جدید AI معاون جو گیم پلے کے حالات کا تجزیہ کرتا ہے، اسٹریٹجک تجاویز مرتب کرتا ہے اور کھلاڑیوں کو حقیقی وقت میں رہنمائی فراہم کرتا ہے۔',
    problem: 'Competitive gaming scenarios evolve at split-second speeds. Players often lack contextual real-time feedback and tactical analysis to adapt their strategies during high-stakes sessions.',
    problemUr: 'مسابقتی گیمنگ میں فیصلے پلک جھپکتے میں کرنے ہوتے ہیں۔ اکثر کھلاڑیوں کے پاس حکمت عملی بہتر بنانے کے لیے حقیقی وقت میں تجاویز کا فقدان ہوتا ہے۔',
    solution: 'Designed an autonomous agentic framework combining situational prompt chains, tactical knowledge base retrieval, and fast response streaming to deliver concise decision-making aids.',
    solutionUr: 'ایک ایسا خودکار ایجنٹک فریم ورک تیار کیا جو فوری پرامپٹ چینز اور گیمنگ نالج بیس کو یکجا کر کے فوری اور جامع مشورے فراہم کرتا ہے۔',
    features: [
      'Scenario-aware tactical reasoning engine',
      'Rapid contextual retrieval for game mechanics & meta strategies',
      'Low-latency voice and text interaction pipelines',
      'Modular agent tool integration'
    ],
    featuresUr: [
      'صورتحال سے باخبر ٹیکٹیکل استدلال کا انجن',
      'گیم میکینکس اور حکمت عملیوں کا فوری ریٹریول',
      'انتہائی کم تاخیر کے ساتھ ٹیکسٹ اور وائس انٹرفیس',
      'ماڈیولر ایجنٹ ٹولز کا موثر انضمام'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Vector DB', 'FastAPI'],
    status: 'In Active Development / Project Showcase',
    statusUr: 'زیرِ ترقی / پراجیکٹ شوکیس',
    accentColor: '#3B82F6'
  },
  {
    id: 'aura-ai',
    title: 'AURA AI',
    titleUr: 'اورا اے آئی (AURA AI)',
    tagline: 'Personal Autonomous AI Agent & Automation',
    taglineUr: 'ذاتی خود مختار اے آئی ایجنٹ اور آٹومیشن',
    category: 'ai-agents',
    categoryLabel: 'Autonomous Agent',
    categoryLabelUr: 'خود مختار ایجنٹ',
    description: 'A personal AI agent that coordinates tasks, manages personal knowledge streams, triggers automated workflows, and interacts with local and cloud APIs.',
    descriptionUr: 'ایک پرسنل AI ایجنٹ جو روزمرہ کے اہم کاموں کو مربوط کرتا ہے، معلومات کو محفوظ رکھتا ہے اور خودکار ورک فلوز کو فعال کرتا ہے۔',
    problem: 'Juggling multiple web apps, calendars, notes, and repetitive workflows scatters focus and wastes valuable hours every single week.',
    problemUr: 'مختلف ایپس، نوٹس اور دہرائے جانے والے کاموں میں الجھنے سے وقت اور توجہ ضائع ہوتی ہے۔',
    solution: 'Engineered an orchestration agent capable of understanding high-level natural language goals, decomposing them into sequential tasks, and executing them via automated tool calls.',
    solutionUr: 'ایک ایسا ایجنٹ تیار کیا جو قدرتی زبان میں دیے گئے مقاصد کو مرحلہ وار کاموں میں تقسیم کر کے خودکار ٹولز کے ذریعے مکمل کرتا ہے۔',
    features: [
      'Multi-step goal decomposition and planning',
      'Persistent memory architecture with vector indexing',
      'Webhook triggers for external services & notifications',
      'Interactive control interface with execution logs'
    ],
    featuresUr: [
      'مقاصد کو چھوٹے مراحل میں تقسیم کرنے کی صلاحیت',
      'مستقل یادداشت اور ویکٹر انڈیکسنگ کا نظام',
      'دیگر سروسز کے ساتھ ویب ہکس کا خودکار رابطہ',
      'شفافیت کے لیے کارکردگی کا مکمل لاگ انٹرفیس'
    ],
    techStack: ['LangGraph', 'Python', 'n8n', 'Google Gemini', 'SQLite'],
    status: 'Personal Technology Project',
    statusUr: 'ذاتی ٹیکنالوجی پراجیکٹ',
    accentColor: '#60A5FA'
  },
  {
    id: 'webintel-ai',
    title: 'WebIntel AI',
    titleUr: 'ویب انٹیل اے آئی (WebIntel AI)',
    tagline: 'Intelligent Web Retrieval & Synthesis Assistant',
    taglineUr: 'ذہین ویب سرچ، مواد کی تلخیص اور ریسرچ اسسٹنٹ',
    category: 'ai-agents',
    categoryLabel: 'Research Agent',
    categoryLabelUr: 'ریسرچ ایجنٹ',
    description: 'An AI-driven research assistant that autonomously queries multiple web sources, filters noise, synthesizes verified summaries, and cites primary references.',
    descriptionUr: 'ایک ذہین ریسرچ معاون جو انٹرنیٹ کے مختلف ذرائع سے معلومات تلاش کرتا ہے، غیر ضروری مواد کو الگ کر کے جامع خلاصہ اور حوالہ جات فراہم کرتا ہے۔',
    problem: 'Sifting through hundreds of search results to research technical topics or market trends is tedious and prone to misinformation.',
    problemUr: 'انٹرنیٹ پر سینکڑوں لنکس میں سے درست تکنیکی اور مارکیٹ معلومات اکٹھی کرنا مشکل اور وقت طلب کام ہے۔',
    solution: 'Built an autonomous web search and scraping pipeline grounded with LLM-based fact-checking and automated markdown report compilation.',
    solutionUr: 'ایک خودکار سرچ اور ڈیٹا نکالنے والا پائپ لائن بنایا جو حقائق کی جانچ کر کے تفصیلی مارک ڈاؤن رپورٹس مرتب کرتا ہے۔',
    features: [
      'Automated multi-query expansion strategy',
      'Clean web extraction with content deduplication',
      'Citation generation with verifiable sources',
      'Exportable synthesized briefs and summaries'
    ],
    featuresUr: [
      'ایک سوال سے کثیر جہتی تلاش کے خودکار پرامپٹس',
      'غیر ضروری اشتہارات کو ہٹا کر خالص مواد کا حصول',
      'مستند حوالہ جات کے ساتھ خلاصے کی تیاری',
      'آسانی سے محفوظ کی جا سکنے والی تحقیقی رپورٹس'
    ],
    techStack: ['Python', 'LangChain', 'Claude API', 'BeautifulSoup', 'Streamlit'],
    status: 'Research & Exploration Project',
    statusUr: 'تحقیقی و تعلیمی پراجیکٹ',
    accentColor: '#38BDF8'
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
