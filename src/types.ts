export type Language = 'en' | 'ur';

export interface GalleryItem {
  image: string;
  backImage?: string;
  title: string;
  titleUr: string;
  tagline?: string;
  taglineUr?: string;
  description: string;
  descriptionUr: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  titleUr: string;
  tagline: string;
  taglineUr: string;
  category: 'ai-agents' | 'web-dev' | 'automation' | 'design' | 'all';
  categoryLabel: string;
  categoryLabelUr: string;
  description: string;
  descriptionUr: string;
  problem: string;
  problemUr: string;
  solution: string;
  solutionUr: string;
  features: string[];
  featuresUr: string[];
  techStack: string[];
  status: string;
  statusUr: string;
  accentColor: string;
  image?: string;
  gallery?: string[];
  galleryItems?: GalleryItem[];
  galleryTitles?: string[];
  downloadUrl?: string;
  downloadType?: 'link' | 'image' | 'file';
  liveUrl?: string;
  role?: string;
  vision?: string;
}

export interface Service {
  id: string;
  title: string;
  titleUr: string;
  subtitle: string;
  subtitleUr: string;
  description: string;
  descriptionUr: string;
  iconName: string;
  deliverables: string[];
  deliverablesUr: string[];
  workflow: string[];
  workflowUr: string[];
}

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleUr: string;
  iconName: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  id: string;
  phase: string;
  phaseUr: string;
  title: string;
  titleUr: string;
  description: string;
  descriptionUr: string;
  focusAreas: string[];
  focusAreasUr: string[];
}
