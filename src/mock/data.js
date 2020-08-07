import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Emma Bindi | Developer', 
  lang: 'en', 
  description: 'Portfolio Site', 
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Emma Bindi',
  subtitle: 'I\'m a developer.',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m a full stack developer in training, currently learning Ruby, CSS, HTML, Ruby on Rails and the JavaScript MERN stack (MongoDB, Express, React, Node.js) as a part of the FastTrack Bootcamp at CoderAcademy.',
  paragraphTwo: 'Currently based in Melbourne, Australia.',
  paragraphThree: 'Besides coding, I am passionate about keeping active, cooking and the great outdoors.',
  resume: 'https://www.canva.com/design/DAD537q-73k/gLuMJwjvuZ3I1UH__9Ixbg/view?utm_content=DAD537q-73k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'LocalVore.jpg',
    title: 'LocalVore',
    info: 'Two Sided Marketplace built with Ruby on Rails.',
    info2: 'LocalVore was created to provide a platform that easily connects home gardeners who have a bounty of fresh produce, with people in their community seeking fresh, local and nutritious produce.',
    url: 'https://radiant-shelf-48298.herokuapp.com/',
    repo: 'https://github.com/emmabindi/localvore', 
  },
  {
    id: nanoid(),
    img: 'Codex.jpg',
    title: 'Codex',
    info: 'Learning and productivity app for developers.',
    info2: 'Built using React on Rails and styled with SASS.' +
    'Test driven development using RSPEC and Cypress',
    url: 'https://codex-app.netlify.app/',
    repo: 'https://github.com/emmabindi/Codex-API', 
  },
  {
    id: nanoid(),
    img: 'SeeNippon.jpg',
    title: 'See Nippon',
    info: '2 Day Hackathon: React on Rails',
    info2: 'Travel Blogging & Tips dedicated to the country of Japan',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6687209713194672128/',
    repo: 'https://github.com/emmabindi/SeeNippon', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'emma.bindi@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_Emma_Bindi_',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/emma-bindi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/emmabindi/',
    },
  ],
};
