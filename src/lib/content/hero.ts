import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: '"Good day, Fellow Seekers of Knowledge!" ',
    title: 'Kaweesha Herath.',
    tagline: 'As a stdent I am interested to working with web & mobile development technologies.',
    description:
    "I'm an aspiring Front-End web developer skilled in React.js and Next.js, complemented by TypeScript and CSS. Beyond coding, I'm intrigued by data science and networking, constantly seeking to broaden my expertise in these fields alongside crafting captivating user interfaces.",
    specialText: 'Currently available for a studing , job & freelance',
       
    cta: {
        title: 'Get a touch about my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};