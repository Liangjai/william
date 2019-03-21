module.exports = {
  siteTitle: 'William Liang | Rookie Developer',
  siteDescription:
    'I'm just a corgi-loving guy who wants to learn more about making websites.',
  siteKeywords:
    'William Liang, Liangjai, Liangjai William, BCIT, Marketing',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Brittany Chiang',
  location: 'Boston, MA',
  email: 'brittany.chiang@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/bchiang7/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@bchiang7',
  googleAnalyticsID: 'UA-45666519-2',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
