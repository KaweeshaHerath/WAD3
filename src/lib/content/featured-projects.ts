import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects I've worked on",
  projects: [
    {
      id: getId(),
      name: 'Cine App',
      description: 'A Movie Reccomendation app.',
      tasks:
        'Developed a user-friendly and interactive mobile application that recommends movies to users based on their preferences and ratings.',
      url: 'https://drive.google.com/file/d/1SJbV7uheI36G_LOMxMc8DFYqdAL6XzgW/view?usp=drive_link', // Access to the documentation 
      img: '/05.png',
      //video : '/Mobile App.mp4', ---> Can access to the vedio through the image.
      tags: ['NextJs', 
      'TypeScript', 
      ' CSS', 
      'React' ,'HTML', '    ____Click on the Image to access the video____     '],
      
    },
    
  ],
};

export default featuredProjectsSection;
