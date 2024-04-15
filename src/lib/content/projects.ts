import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'My Projects',
    projects: [
        
    {
      id: getId(),
      name: 'Calculator ',      
      url: ' Crafting Calculative Wonders: A Journey with NetBeans and Java.',
      repo: 'https://drive.google.com/drive/folders/15p0w6-8OWmRqEqJ7BD0-_k7QixiJ9ATY?usp=drive_link',
      img: '/02.png',
      year: 2022,
      tags: ['Open AI', 'OOP', 'Java', 'CSS' , 'HTML' ],
    },
    
    {
        id: getId(),
        name: 'Simple Lock Screen ',
        url: '/',
        repo: 'https://github.com/FHSS-USJ/assignment-02-KaweeshaHerath.git/', // Repositary URL
        img: '/03.png',
        year: 2022,
        tags: ['HTML', 'CSS', 'TS'],
    },

    ],
};