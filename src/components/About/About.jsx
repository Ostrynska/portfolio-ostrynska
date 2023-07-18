import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { skillsList, portfolioData } from '../../contentOption';
import CV from '../../assets/Junior Frontend Dev_OstrynskaK.pdf';

import {
 Container,
 TitleWrapp,
 Title,
 TitleLine,
 Content,
 Projects,
 Location,
 Experience,
 AboutMe,
 Document,
 SkillsContainer,
 Skills,
 SkillsWrap,
 Namespace,
 Database,
 DeviceMobile,
 ServicesContainer,
 Image,
} from './About.styled';

const About = () => {
 const [yearsOfExperience, setYearsOfExperience] = useState(0);

 useEffect(() => {
  const currentDate = new Date();
  const startDate = new Date('2022-05-18');
  const timeDifference = currentDate - startDate;

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

  setYearsOfExperience(years);
 }, []);

 const completedProjects = portfolioData.length;

 const getSkills = type => {
  return skillsList.filter(i => i.type === type);
 };

 return (
  <Container>
   <TitleWrapp>
    <Title>About me</Title>
    <TitleLine />
   </TitleWrapp>
   <Content>
    <AboutMe>
     <div>
      <h2>Download CV</h2>
      <a href={CV} download="">
       <Document size={26} />
      </a>
     </div>
     <ul>
      <li>
       <Experience size={26} />
       <h3>Experience</h3>
       <p>{yearsOfExperience}+ Years Working</p>
      </li>
      <li>
       <Projects size={26} />
       <h3>Completed</h3>
       <p>{completedProjects} Projects</p>
      </li>
      <li>
       <Location size={26} />
       <h3>Location</h3>
       <p>Kyiv</p>
      </li>
     </ul>
    </AboutMe>
    <SkillsContainer>
     <h2>Skills</h2>
     <Skills>
      <SkillsWrap>
       <h3>Frontend Developer</h3>
       <ul>
        {getSkills('front').map(({ name, level, title }) => (
         <li key={nanoid(2)}>
          <Image src={name} alt={title} />
          <div>
           <h4>{title}</h4>
           <span>{level}</span>
          </div>
         </li>
        ))}
       </ul>
      </SkillsWrap>
      <SkillsWrap>
       <h3>Backend Developer</h3>
       <ul>
        {getSkills('back').map(({ name, level, title }) => (
         <li key={nanoid(2)}>
          <Image src={name} alt={title} />
          <div>
           <h4>{title}</h4>
           <span>{level}</span>
          </div>
         </li>
        ))}
       </ul>
      </SkillsWrap>
     </Skills>
    </SkillsContainer>
    <ServicesContainer>
     <h2>Services</h2>
     <ul>
      <li>
       <Namespace size={26} />
       <h3>Web App</h3>
      </li>
      <li>
       <DeviceMobile size={26} />
       <h3>Mobile App</h3>
      </li>
      <li>
       <Database size={26} />
       <h3>Back End</h3>
      </li>
     </ul>
    </ServicesContainer>
   </Content>
  </Container>
 );
};

export default About;
