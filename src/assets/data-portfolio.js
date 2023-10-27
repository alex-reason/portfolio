
import proj1Pg1 from './portfolio-details/portfolio1/proj1-pg1.png'
import proj1Pg2 from './portfolio-details/portfolio1/proj1-pg2.png';
import proj1Pg3 from './portfolio-details/portfolio1/proj1-pg3.png';
import proj1Pg4 from './portfolio-details/portfolio1/proj1-pg4.png';
import proj1Pg5 from './portfolio-details/portfolio1/proj1-pg5.png';
import proj1Pg6 from './portfolio-details/portfolio1/proj1-pg6.png';
import proj1Pg7 from './portfolio-details/portfolio1/proj1-pg7.png';
import proj1Pg8 from './portfolio-details/portfolio1/proj1-pg8.png';
import proj1Pg9 from './portfolio-details/portfolio1/proj1-pg9.png';

import proj2Pg1 from './portfolio-details/portfolio2/proj2-pg1.png';
import proj2Pg2 from './portfolio-details/portfolio2/proj2-pg2.png';
import proj2Pg3 from './portfolio-details/portfolio2/proj2-pg3.png';
import proj2Pg4 from './portfolio-details/portfolio2/proj2-pg4.png';
import proj2Pg5 from './portfolio-details/portfolio2/proj2-pg5.png';

import proj3Pg1 from './portfolio-details/portfolio3/proj3-pg1.png';
import proj3Pg2 from './portfolio-details/portfolio3/proj3-pg2.png';
import proj3Pg3 from './portfolio-details/portfolio3/proj3-pg3.png';

import proj4Pg1 from './portfolio-details/portfolio4/proj4-pg1.png';
import proj4Pg2 from './portfolio-details/portfolio4/proj4-pg2.png';
import proj4Pg3 from './portfolio-details/portfolio4/proj4-pg3.png';

import proj5Pg1 from './portfolio-details/portfolio5/proj5-pg1.png';

const portfolioData = [
    {
        image: proj5Pg1,
        title: 'My Portfolio site',
        isActive: true,
        code: 'https://github.com/alex-reason/portfolio',
        details: [
            {
                detailImg: proj5Pg1,
                detailInfo: 'This responsive portfolio website was created with react, Next.js, and vercel. The code is on github, and I manage changes, version control, and updates via Git. Routing is done via Next.js 13 App Router. The styling uses SASS, animations, and variables for reusability.',
                detailImgAlt: 'my responsive web app homepage',
            },
        ]
    },

    {
        image: proj1Pg1,
        title: 'Fitness Tracker',
        isActive: true,
        url: 'https://fitness-tracker-ffa4d.web.app/',
        details: [
            {
                detailImg: proj1Pg2,
                detailInfo: 'A fitness tracker app inspired by the goal of my friends to be more active. The app uses firebase as a Baas/backend service.',
                detailImgAlt: 'fitness tracker app homepage',
            },
            {
                detailImg: proj1Pg3,
                detailInfo: 'Sign up with email and password through firebase.',
                detailImgAlt: 'fitness tracker app sign up/login page',
            },
            {
                detailImg: proj1Pg4,
                detailInfo: 'About page.',
                detailImgAlt: 'fitness tracker app about page',
            },
            {
                detailImg: proj1Pg5,
                detailInfo: 'In the profile section, users can change their display name, update their avatar and change their password.',
                detailImgAlt: 'fitness tracker app profile page'
            },
            {
                detailImg: proj1Pg6,
                detailInfo: 'In the Add Workout section, users can log their workout and it adds to their current workout data. Workouts are converted to points based on a system.',
                detailImgAlt: 'fitness tracker app add workout page',
            },
            {
                detailImg: proj1Pg7,
                detailInfo: 'The added workout is reflected on the profile section. Once enough points are gained, a level is gained.',
                detailImgAlt: 'fitness tracker app updated profile page'
            },
            {
                detailImg: proj1Pg8,
                detailInfo: 'In the Users sections, the user can view all users and a summary of their progress.',
                detailImgAlt: 'fitness tracker app all users page',
            },
            {
                detailImg: proj1Pg9,
                detailInfo: 'When a user is clicked, their profile can be viewed.',
                detailImgAlt: 'fitness tracker app user page',
            },

        ]
    },

    {
        image: proj2Pg2,
        title: 'Sticky Notes',
        isActive: false,
        code: 'https://github.com/alex-reason/sticky-notes',
        details: [
            {
                detailImg: proj2Pg1,
                detailInfo: 'This project is inspired by the software I use as a paralegal. It uses React, firebase, and SASS. I think the UI/UX of the software we use at work is very lacking. I created this project tracker app based on a firebase tutorial by NetNinja, but modified it to so I can use it for work. I am hoping to improve it enough for my colleagues to use as well.',
                detailImgAlt: 'sticky notes app sign up/login page',
            },
            {
                detailImg: proj2Pg2,
                detailInfo: 'The app uses firebase as a backend service. On the Dashboard, all projects or “sticky notes” are displayed. They can be filtered based on who are involved in the project/sticky note. Online/offline users are also displayed on the right side.',
                detailImgAlt: 'sticky notes app empty dashboard page',
            },
            {
                detailImg: proj2Pg3,
                detailInfo: 'On the Add a Project section, a project can created and assigned to multiple users. Once added, it is stored on the firebase database.',
                detailImgAlt: 'sticky notes app add a project/sticky note page',
            },
            {
                detailImg: proj2Pg4,
                detailInfo: 'The new project is displayed on the dashboard as a sticky note. The avatars of the users assigned are visible.',
                detailImgAlt: 'sticky notes app dashboard page',
            },
            {
                detailImg: proj2Pg5,
                detailInfo: 'When the sticky note is clicked, the details can be viewed. Users can add comments to the project. Only assigned users or the user who created the project can delete the note.',
                detailImgAlt: 'sticky notes app project details with comments section',
            },
        ]
    },
    {
        image: proj3Pg3,
        title: 'Cozy Videos',
        isActive: false,
        url: 'https://willowy-clafoutis-50448b.netlify.app/',
        details: [
            {
                detailImg: proj3Pg1,
                detailInfo: 'This app attempts to recreate certain aspects of Youtube. It uses firebase and youtube api with React. The homepage displays a certain number of videos. This project is based on NetNinja’s tutorials. It was one of my first attempts with firebase, and it was challenging but fun.',
                detailImgAlt: 'youtube clone app dashboard',
            },
            {
                detailImg: proj3Pg2,
                detailInfo: 'Search results are listed once a term is searched via the searchbar.',
                detailImgAlt: 'youtube clone app search results',
            },
            {
                detailImg: proj3Pg3,
                detailInfo: 'When an item is clicked, the video details can be seen including the number of views, likes and channel name, and related videos. The vidéo can also be played.',
                detailImgAlt: 'youtube clone app video details'
            },
        ]
    },
    {
        image: proj4Pg3,
        title: 'Art Portfolio',
        isActive: false,
        url: 'https://alex-reason.github.io/vince-reasonda/',
        details: [
            {
                detailImg: proj4Pg1,
                detailInfo: ' A simple portfolio website I made for my brother.  Plain html and javascript, and SCSS.',
                detailImgAlt: 'art portfolio landing section',
            },
            {
                detailImg: proj4Pg2,
                detailInfo: 'The website showcases the use of grid and media queries.',
                detailImgAlt: 'art portfolio grid display of artworks',
            },
            {
                detailImg: proj4Pg3,
                detailInfo: 'Artworks are by Vince Reasonda.',
                detailImgAlt: 'art portfolio artwork details'
            },
        ]
    }
];


export { portfolioData };