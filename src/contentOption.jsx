import myImage from './images/myphoto.png';

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

const meta = {
 title: 'Kateryna Ostrynska',
 description:
  'I’m Kateryna Ostrynskaa _ Full stack devloper,currently working in Kyiv',
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
export {
 socials,
 navElements,
 introdata,
 particles,
 meta,
 contactConfig,
 customModalStyles,
};
