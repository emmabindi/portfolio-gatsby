import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Emma Bindi | Developer', 
  lang: 'en', 
  description: 'Portfolio Site', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Para 1',
  paragraphTwo: 'Para 2',
  paragraphThree: ' Para 3',
  resume: 'https://www.canva.com/design/DAD537q-73k/gLuMJwjvuZ3I1UH__9Ixbg/view?utm_content=DAD537q-73k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
