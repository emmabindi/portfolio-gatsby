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
  subtitle: "I'm a developer.",
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a full stack developer, focusing on Ruby on Rails and the JavaScript MERN Stack. I recently completed a 6 month intensive bootcamp with High Distinction at CoderAcademy in Melbourne where I was the Women in Tech Scholarship recipient.",
  paragraphTwo: 'Currently based in Melbourne, Australia.',
  paragraphThree:
    'Other than coding, I am passionate about people, cheering on Daniel Ricciardo in F1, tending to my herb garden, and I have regular cravings for Fresh Toast or a crispy pork Bahn Mi. Fortunately, I also cannot go without being active every day, be it running, pilates or yoga.',
  resume:
    'https://www.canva.com/design/DAD537q-73k/gLuMJwjvuZ3I1UH__9Ixbg/view?utm_content=DAD537q-73k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Codex.jpg',
    title: 'Codex',
    info: 'Learning and productivity app for developers.',
    info2:
      'Built using React on Rails and styled with SASS. ' +
      'Test driven development using RSPEC and Cypress',
    url: 'https://codex-app.netlify.app/',
    repo: 'https://github.com/emmabindi/Codex-API',
  },
  {
    id: nanoid(),
    img: 'LocalVore.jpg',
    title: 'LocalVore',
    info: 'Two Sided Marketplace built with Ruby on Rails.',
    info2:
      'LocalVore was created to provide a platform that easily connects home gardeners who have a bounty of fresh produce, with people in their community seeking fresh, local and nutritious produce.',
    url: 'https://radiant-shelf-48298.herokuapp.com/',
    repo: 'https://github.com/emmabindi/localvore',
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
