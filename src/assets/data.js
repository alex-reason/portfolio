import { SiLinkedin, SiIndeed, SiGithub, SiCodewars } from 'react-icons/si';

import img1 from './icons/Goodies - Sunny Day.png';
import img2 from './icons/Brazuca - Sucess.png';
import img3 from './icons/Goodies - Ok.png';
import img4 from './icons/Wormies - Flower.png';
import img5 from './icons/Goodies - Warning.png';

const landingData = [
    {
        title: "Web Development",
        content: "I like to develop websites using React, JS, and SASS. I have several certifications in front-end web development, UI/UX, Responsive Web design, and Modern React."
    },
    {
        title: "Research Interests",
        content: "I would like to learn, research and share about the multifaceted value of biodiversity. My graduate thesis was on Marine and Coastal Resource management and Norm Localization in the Management of Biodiversity."
    },
    {
        title: "Love of Languages",
        content: "I am fluent in English and Tagalog (Filipino), and I have upper-intermediate proficiency in French and Japanese. I am hoping to learn other languages too! This applies to coding languages as well."
    }
];

const certData = [
    {
        title: 'Meta: Front-end Developer Professional Certificate',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/CX4XLA2FQN8R',
        detail: 'coursera',
        id: 'cert1',
        skills: ['React', 'scss/css', 'js', 'version control', 'ux/ui']
    },

    {
        title: 'Principles of UX/UI Design',
        url: 'https://coursera.org/share/c738eb5af53384d48be56badf890d0e9',
        detail: 'coursera by Meta',
        id: 'cert2',
        skills: ['Figma','ux/ui']
    },

    {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/mai-reason/responsive-web-design',
        detail: 'freecodecamp',
        id: 'cert3',
        skills: ['SCSS/CSS', 'media queries']
    },
    {
        title: 'Javascript Algorithms and Data Structures',
        url: 'https://www.freecodecamp.org/certification/mai-reason/javascript-algorithms-and-data-structures',
        detail: 'freecodecamp',
        id: 'cert4',
        skills: ['javascript', 'algorithms', 'Object Oriented Programming', 'Functional Programming']
    },
    {
        title: 'Advanced CSS and SASS',
        url: 'https://www.udemy.com/certificate/UC-d81b2395-2c38-44fe-8c36-80b9d47777cb/',
        detail: 'Udemy',
        id: 'cert5',
        skills: ['flexbox and grids', 'responsive design', 'SASS']
    },
    {
        title: 'Complete jQuery Course',
        url: 'https://www.udemy.com/certificate/UC-66914547-14c7-4ed5-a444-2caff107cf51/',
        detail: 'Udemy',
        id: 'cert6',
        skills: ['dynamic websites', 'user events']
    },
    {
        title: 'Modern React with Redux',
        url: 'https://www.udemy.com/certificate/UC-e4cba17d-9e2e-4b03-9a98-765145da4ea1/',
        detail: 'Udemy',
        id: 'cert7',
        skills: ['redux', 'toolchains', 'ES6 js']
    },
    {
        title: 'Web Apps with React and Firebase',
        url: 'https://www.udemy.com/certificate/UC-57f2b319-cd41-4289-ba89-81dce39193ff/',
        detail: 'Udemy',
        id: 'cert8',
        skills: ['backend cloud computing services', 'react and firebase',]
    }

];

const skillsData = [
    {
        title: 'Technology',
        details: ['HTML, CSS, javascript', 'SASS/SCSS, React JS', 'firebase, typescript, Redux Toolkit','Visual Code Studio, Node, Git','unit-testing, version control', 'Microsoft Office suite & Google suite',],
        image: img5
    },
    {
        title: 'Skills',
        details: ['Legal & Administrative support', 'Event planning & Time management', 'Document & Data organization', 'Client Relations and Client management systems', 'Research & Writing'],
        image: img2
    },
    {
        title: 'Education',
        details: ['Masters in Global Politics', 'Bachelors in Political Science'],
        image: img3
    },
    {
        title: 'Languages',
        details: ['English (fluent/native)', 'Tagalog (fluent/native)', 'French (intermediate)', 'Japanese (intermediate)'],
        image: img1
    },
];


const experienceData = [
    {
        id: 'experience1',
        label: 'Paralegal',
        minorContent: 'Tancinco Law PC. From September 2020',
        content: [
            'Works on around 10-20 immigration related cases a week with minimal supervision from the attorneys.',
            'Uses AWS and other web services to efficiently file applications.',
            'Maintains relationships with around 100 clients yearly by gathering, evaluating, and organizing extensive amounts of client data in a digital filing system throughout the case process.',
            'Organizes and maintains the electronic database of clients as the company shifts to full digitalization.',
            'Guides and teaches members of the firm on the use of the e-filing software.'
        ],
        skillsUsed: [
            'CRM tools',
            'client relations',
            'case management',
            'administrative',
            'document management',
            'data organization'
        ]
    },
    {
        id: 'experience2',
        label: 'Legal Assistant',
        minorContent: 'Tancinco Law PC. November 2018 - March 2020',
        content: [
            'Prepared immigration related applications with the supervision of 1-2 attorneys.',
            'Handled accounting by billing and documenting income / expenses to monitor if income for the month reached the target.',
            'Stayed in constant communication with around 10 new and current clients a day by gathering information, updating clients of their cases, and maintaining comprehensive spreadsheets of cases and clients along with their respective timetables.',
            'Managed schedules of 5 attorneys.'
            ,
        ],
        skillsUsed: [
            'administrative',
            'document management',
            'data organization',
            'accounting',
            'client relationship-building',
            'scheduling'
        ]
    },
    {
        id: 'experience3',
        label: 'Coordinator',
        minorContent: 'Kwan Academy and Music. April 2018 - March 2020',
        content: [
            'Class coordinator and assistant to the music school director.',
            'Proposed music classes schedules for around 10 clients a week through connecting students and teachers.',
            'Managed the 3-4 recitals twice a year for about 30 students by coordinating with teachers, parents and students, preparing the schedule, and assisting the director.',
            'Created a system for tracking inquiries and potential clients for the music school.',
        ],
        skillsUsed: [
            'client relationship-building',
            'scheduling',
            'event planning',
            'administrative'
        ]
    },
    {
        id: 'experience4',
        label: 'Nonprofit Intern',
        minorContent: 'Amnesty International (PH). June 2015 - July 2015',
        content: [
            'Worked directly under the Human Rights Officer and head of the Campaigns Office.',
            'Collaborated with government agencies and other non profits for 2-3 human rights campaign projects under the supervision of the head of the Campaigns office.'
        ],
        skillsUsed: [
            'stakeholder relationship-building',
            'policy research',
            'marketing'
        ]
    }
];

const socialData = [
    {
        id: 'social1',
        url: 'https://www.linkedin.com/in/alexandra-reasonda/',
        icon: <SiLinkedin />
    },

    {
        id: 'social2',
        url: 'https://my.indeed.com/p/alexandrar-mje63u7',
        icon: <SiIndeed />
    },

    {
        id: 'social3',
        url: 'https://github.com/alex-reason',
        icon: <SiGithub />
    },

    {
        id: 'social4',
        url: 'https://www.codewars.com/users/alex-reason',
        icon: <SiCodewars />
    },
];

export { skillsData, socialData, certData, experienceData, landingData, img1, img2, img3, img4, img5 };