import myImage from './assets/myphoto.png';

import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import ts from './images/ts.png';
import node from './images/nodejs.png';
import react from './images/react.png';
import reactnative from './images/reactnative.png';
import firebase from './images/firebase.png';
import mongo from './images/mongodb.png';
import postman from './images/postman.png';
import redux from './images/redux.png';
import sass from './images/sass.png';
import api from './images/api.png';
import parcel from './images/parcel.png';
import mui from './images/mui.png';
import bootstrap from './images/bootstrap.png';
import next from './images/next.png';

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
  'Passionate and motivated Full-Stack developer from 📍Kyiv, Ukraine. I love coding and developing new things.',
 image: myImage,
};

const skillsList = [
 { type: 'front', name: html, title: 'HTML', level: 'Intermediate' },
 { type: 'front', name: css, title: 'CSS', level: 'Intermediate' },
 { type: 'front', name: js, title: 'JavaScript', level: 'Intermediate' },
 { type: 'front', name: react, title: 'React', level: 'Intermediate' },
 { type: 'front', name: next, title: 'Next', level: 'Intermediate' },
 { type: 'front', name: ts, title: 'TypeScript', level: 'Beginner' },
 { type: 'front', name: reactnative, title: 'ReactNative', level: 'Basic' },

 { type: 'back', name: node, title: 'Node Js', level: 'Basic' },
 { type: 'back', name: firebase, title: 'Firebase', level: 'Basic' },
 { type: 'back', name: mongo, title: 'MongoDB', level: 'Basic' },
 { type: 'back', name: postman, title: 'Postman', level: 'Intermediate' },
];

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
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1715256975/Screenshot_2024-05-09_at_15.04.46_bekvzt.png',
  title: 'Recipe App',
  link: 'https://level-food.vercel.app/',
  git: 'https://github.com/Ostrynska/level-food',
  category: 'personal',
  id: '12',
  tools: [next],
  description: `The app is a quiz application that tests users' knowledge of certain issues.. It's set to transform traditional learning and testing methods, making the process more enjoyable, efficient, and conducive to continuous.`,
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1715256975/Screenshot_2024-05-09_at_15.04.46_bekvzt.png',
  title: 'Quiz App',
  link: 'https://next-quiz-app-nu.vercel.app/',
  git: 'https://github.com/Ostrynska/next-quiz-app',
  category: 'personal',
  id: '11',
  tools: [next],
  description: `The app is a quiz application that tests users' knowledge of certain issues.. It's set to transform traditional learning and testing methods, making the process more enjoyable, efficient, and conducive to continuous.`,
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1710859311/Screenshot_2024-03-19_at_16.36.22_vzyalj.png',
  title: 'Medecine Delivery',
  link: 'https://medicine-delivery-app-jtmo.onrender.com',
  git: 'https://github.com/Ostrynska/medicine-delivery-app',
  category: 'personal',
  id: '10',
  tools: [react, mongo, api, redux],
  description:
   'The app is a web-based application that allows users to order medicines delivery. Users can view the list of drug shops, choose it and add medicines to the cart. The order is saved in the Mongo DB database.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1690746585/Screenshot_2023-07-30_at_22.48.43_hrtnpy.png',
  title: 'Vanilla JS Notes App',
  link: 'https://note-app-airn.onrender.com/',
  git: 'https://github.com/Ostrynska/notes-app',
  category: 'personal',
  id: '9',
  tools: [html, css, js, bootstrap],
  description:
   'A notes taking app made with vanilla javascript. Users can add, edit and remove notes. A list of notes is displayed as a table. Archived notes are not shown in the notes list. Users can view archived notes and unarchive them.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688496769/primechart_zd7kek.png',
  title: 'Prime Chat',
  link: 'https://prime-chat.netlify.app/',
  git: 'https://github.com/Ostrynska/prime-chat',
  category: 'personal',
  id: '8',
  tools: [react, mongo, api],
  description:
   'Demo real-time chat application project to learn Socket.io (full stack chatting app). The application is built using React, Node.js, Socket.io for real-time communication, and stores user details in encrypted format in Mongo DB Database.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688496752/socialmedia_cdlm0u.png',
  title: 'Social media App',
  link: 'exp://exp.host/@ostrynska/socialMediaApp?release-channel=default',
  git: 'https://github.com/Ostrynska/react-native-app',
  category: 'personal',
  id: '7',
  tools: [reactnative, firebase, redux],
  description:
   'Cross-platform (iOS and Android) social media mobile App. Allows registered users to create posts, comments, "like" posts and view the location where the photo was taken on the map. Logic has been added that the author can take a photo or add photos from the smartphone library.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688725594/Screenshot_2023-07-07_at_13.25.17_jmmx8l.png',
  title: 'Recipes - So Yummy',
  link: 'https://4106677.github.io/so-yummy-front-end/',
  git: 'https://github.com/4106677/so-yummy-front-end',
  category: 'team',
  id: '6',
  tools: [react, redux, mongo],
  description:
   'Team project, role: developer. "What to cook?" is not only an adaptive  recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future. I managed to work on the registration and login pages with appropriate form validation, as well as on project page routing.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1689235420/Screenshot_2023-07-13_at_10.54.12_dupadq.png',
  title: 'Phonebook',
  link: 'https://demo-phonebook.netlify.app',
  git: 'https://github.com/Ostrynska/phonebook',
  category: 'personal',
  id: '5',
  tools: [react, redux, mongo, mui],
  description:
   'Phonebook app that allows registration, login, and updating of users contacts, as well as working with a private collection of contacts.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688811303/Screenshot_2023-07-08_at_13.14.46_uqzqyp.png',
  title: 'Movie Room',
  link: 'https://hdmovie-room.netlify.app',
  git: 'https://github.com/Ostrynska/movie-room',
  category: 'personal',
  id: '4',
  tools: [react, api],
  description:
   'Adaptive website for searching and storing movies. For HTTP requests, the public service themoviedb.org was used. A list of the most popular film is rendered on the main page. Possible to search for a movie by keyword and request complete information for the movie page (including cast and reviews).',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688725147/Screenshot_2023-07-07_at_13.18.28_xakfdf.png',
  title: 'Pixelstock',
  link: 'https://pixelstock.netlify.app/',
  git: 'https://github.com/Ostrynska/pixelstock',
  category: 'personal',
  id: '3',
  tools: [react, api],
  description:
   'Adaptive website for searching images by keyword and popular images. For HTTP requests, used the public image search service Pixabay. To view an image in full size in a popup modal click on. Hovering shows the author, the number of likes, and the tags by which users can search for similar images.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688725594/Screenshot_2023-07-07_at_13.23.55_rvqsnc.png',
  title: 'Filmoteka',
  link: 'https://samusev-anton.github.io/filmoteka',
  git: 'https://github.com/Samusev-Anton/filmoteka',
  category: 'team',
  id: '2',
  tools: [html, sass, js, api, parcel],
  description:
   'Team project, role: developer. Application for choosing a movie. I managed to work on positioning and styling the movie cards, as well as page pagination for search results, filters and popular movies.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688725592/Screenshot_2023-07-07_at_13.23.14_hcqumi.png',
  title: 'Ice Cream Shop',
  link: 'https://samusev-anton.github.io/ice-cream-n/',
  git: 'https://github.com/Samusev-Anton/ice-cream-n',
  category: 'team',
  id: '1',
  tools: [html, sass, js, parcel],
  description:
   'Team project, role: developer. Adaptive website for the retail chain of stores. I managed to work on the Contacts section and element on the layout that hasn’t any stylization (modal window in the section About) and Scroll to Top button.',
 },
 {
  image:
   'https://res.cloudinary.com/dcjlswtup/image/upload/v1688725593/Screenshot_2023-07-07_at_13.22.36_pnatnj.png',
  title: 'Web-Studio',
  link: 'https://ostrynska.github.io/project-webstudio/#en',
  git: 'https://github.com/Ostrynska/project-webstudio',
  category: 'personal',
  id: '0',
  tools: [html, sass, js],
  description:
   'First personal project. Web-studio is a website with a responsive layout. In addition, created a language switcher (en-ua), content filter by category.',
 },
];

export {
 socials,
 navElements,
 introdata,
 meta,
 contactConfig,
 customModalStyles,
 portfolioData,
 skillsList,
};
