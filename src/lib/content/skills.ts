import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'Currently What I Do & Learn___ ?',
    skills: [
    {
        id: getId(),
        title: 'Student about full stack web & mobile development',
        // animation lottie file: https://lottiefiles.com/ --> location
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Database Intergration using SQL , MongoDB , Firebase',
        'Interesting with real-time communication',
        'Building RESTful APIs in Express , POSTMAN',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/ --> Getting Images From Iconify
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'firebase', icon: 'logos:firebase' },
        ],
    },
    {
        id: getId(),
        title: 'Interesting & Studying about UI/UX design',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Studing in designing user-friendly interfaces with figma',
        'Begginer of UI/UX in developing design systems and style guides',
        'Providing user-friendly design solutions',
        ],
        softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    ],
};
