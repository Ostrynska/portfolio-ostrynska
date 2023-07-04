import myImage from './images/myphoto.png';

const meta = {
 title: 'Kateryna Ostrynska',
 description:
  'I’m Kateryna Ostrynskaa _ Full stack devloper,currently working in Kyiv',
};

const socials = {
 github: 'https://github.com/Ostrynska',
 facebook: 'https://www.facebook.com/ostrynska.k',
 linkedin: 'https://www.linkedin.com/in/kateryna-ostrynska-9155b0151',
 instagram: 'https://www.instagram.com/k_ostrynska',
};

const navElements = [
 {
  to: '',
  name: 'Home',
 },
 {
  to: 'about',
  name: 'About',
 },
 {
  to: 'portfolio',
  name: 'Portfolio',
 },
 {
  to: 'contact',
  name: 'Contact',
 },
];

const introdata = {
 title: 'I’m Kateryna Ostrynska',
 animated: {
  first: 'I love coding',
  second: 'Currently learning TypeScript, NodeJS',
  third: 'I push myself by learning new things',
 },
 description:
  'A passionate Frontend Developer from Ukraine, Kyiv. I love coding and developing new things.',
 image: myImage,
};

const particles = {
 particles: {
  number: {
   value: 130,
   density: {
    enable: true,
    value_area: 800,
   },
  },
  color: {
   value: '#000000',
  },
  shape: {
   type: 'circle',
   stroke: {
    width: 3,
    color: '#ffffff',
   },
   polygon: {
    nb_sides: 5,
   },
   //  "image": {
   //    "src": "img/github.svg",
   //    "width": 100,
   //    "height": 100
   //  }
  },
  opacity: {
   value: 0.5,
   random: true,
   anim: {
    enable: false,
    speed: 1,
    opacity_min: 0.1,
    sync: false,
   },
  },
  size: {
   value: 4,
   random: true,
   anim: {
    enable: false,
    speed: 40,
    size_min: 0.1,
    sync: false,
   },
  },
  line_linked: {
   enable: true,
   distance: 150,
   color: '#000000',
   opacity: 0.4,
   width: 1,
  },
  move: {
   enable: true,
   speed: 2,
   direction: 'none',
   random: false,
   straight: false,
   out_mode: 'out',
   bounce: true,
   attract: {
    enable: false,
    rotateX: 600,
    rotateY: 1200,
   },
  },
 },
 interactivity: {
  detect_on: 'window',
  events: {
   onhover: {
    enable: true,
    mode: 'grab',
   },
   onclick: {
    enable: true,
    mode: 'push',
   },
   resize: true,
  },
  modes: {
   grab: {
    distance: 150,
    line_linked: {
     opacity: 1,
    },
   },
   bubble: {
    distance: 400,
    size: 40,
    duration: 2,
    opacity: 8,
    speed: 3,
   },
   repulse: {
    distance: 200,
    duration: 0.4,
   },
   push: {
    particles_nb: 4,
   },
   remove: {
    particles_nb: 2,
   },
  },
 },
 retina_detect: true,
};

const contactConfig = {
 YOUR_EMAIL: 'ostrynska.kateryna@gmail.com',
 YOUR_PHONE: '+38 097 367-69-12',
 description:
  'Hola Visitor! Thank you for bumping in. If you have any queries/ideas/projects, feel free to PING me. I am always open to discussion. You can contact me via the Contact Form OR simply click on the social media icon if you are more comfortable there.',
 // creat an emailjs.com account
 // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
 YOUR_SERVICE_ID: 'service_3tfdstj',
 YOUR_TEMPLATE_ID: 'template_gey5vx9',
 YOUR_USER_ID: 'D6nz0LmQ7AsksAHWn',
};

const customModalStyles = {
 content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  padding: '40px',
 },
 overlay: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '100',
 },
};

const portfolioData = [
 {
  image: '',
  title: 'Web-Studio',
  link: 'https://ostrynska.github.io/project-webstudio/#en',
  git: 'https://github.com/Ostrynska/project-webstudio',
  category: 'personal',
  id: '0',
  tools: 'HTML5, SASS, JS, Mobile-first, Adaptive design',
  description:
   'First personal project. Web-studio is a website with a responsive layout. In addition, created a language switcher (en-ua), content filter by category.',
 },
 {
  image: '',
  title: 'Ice Cream Shop',
  link: 'https://samusev-anton.github.io/ice-cream-n/',
  git: 'https://github.com/Samusev-Anton/ice-cream-n',
  category: 'team',
  id: '1',
  tools: 'HTML5, SASS, JS, Mobile-first, Adaptive design, Parsel',
  description:
   'Team project, role: developer. Adaptive website for the retail chain of stores. I managed to work on the Contacts section and element on the layout that hasn’t any stylization (modal window in the section About) and Scroll to Top button.',
 },
 {
  image: '',
  title: 'Filmoteka',
  link: 'https://samusev-anton.github.io/filmoteka',
  git: 'https://github.com/Samusev-Anton/filmoteka',
  category: 'team',
  id: '2',
  tools: 'HTML5, SASS, JS, Mobile-first, Adaptive design, Parsel, REST API',
  description:
   'Team project, role: developer. Application for choosing a movie. I managed to work on positioning and styling the movie cards, as well as page pagination for search results, filters and popular movies.',
 },
 {
  image: '',
  title: 'Pixelstock',
  link: 'https://pixelstock.netlify.app/',
  git: 'https://github.com/Ostrynska/pixelstock',
  category: 'personal',
  id: '3',
  tools: 'React, Mobile-first, Adaptive design, REST API',
  description:
   'Personal project of an adaptive website for searching images by keyword and popular images when it loads. For HTTP requests, used the public image search service Pixabay. A modal window with a dark overlay should open on clicking a gallery item and display an image large version. Hovering over an image, shows the author, the number of likes, and the tags by which users can search for similar images.',
 },
 {
  image: 'https://live.staticflickr.com/65535/52909411801_7e494c99f6.jpg',
  title: 'Filmoteka',
  link: 'https://4106677.github.io/team-project-js/',
  category: 'web',
  id: '4',
 },
 {
  image: 'https://live.staticflickr.com/65535/52909564274_4e2d39e087.jpg',
  title: 'Britlex',
  link: 'https://4106677.github.io/britlex/',
  category: 'web',
  id: '5',
 },
 {
  image: 'https://live.staticflickr.com/65535/52909800060_3f29b87c6f.jpg',
  title: 'BarberShop',
  link: 'https://4106677.github.io/barbershop-lorem/',
  category: 'web',
  id: '6',
 },
 {
  image: 'https://live.staticflickr.com/65535/52909537849_9123866427.jpg',
  title: 'Phonebook',
  link: 'https://github.com/4106677/goit-react-hw-06-phonebook',
  category: 'web',
  id: '7',
 },
 {
  image: 'https://live.staticflickr.com/65535/52909374431_a4f9e1a290.jpg',
  title: "Apt's Marketplace",
  link: 'https://4106677.github.io/apt-marketpace-app/',
  category: 'web',
  id: '8',
 },
 {
  image: 'https://live.staticflickr.com/65535/52908808007_e8630fbc47.jpg',
  title: 'Movies',
  link: 'https://4106677.github.io/goit-react-hw-05-movies',
  category: 'web',
  id: '9',
 },
];

export {
 socials,
 navElements,
 introdata,
 particles,
 meta,
 contactConfig,
 customModalStyles,
 portfolioData,
};
