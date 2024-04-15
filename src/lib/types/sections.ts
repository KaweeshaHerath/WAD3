import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavLinkType,
  ProjectType,
  SocialLinkType,
  SoftwareSkillType,
} from '.';

export interface Section {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  taglineFontSize?: "sm" | "md" | "lg" ; //Fontsize for tagline
  description?: string;
  descriptionFontSize?: "sm" | "md" | "lg"; // Fontsize for description
  specialText?: string; 
  fontSize?: "sm" | "md" | "lg" ;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends Section {
  list: {
    title: string;
    items: string[];
  };
  img: string;
}

type SkillType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  softwareSkills: SoftwareSkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface FeaturedProjectsSectionType extends Section {
  projects: FeaturedProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}
