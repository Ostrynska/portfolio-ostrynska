import { nanoid } from 'nanoid';

import { skillsList } from '../../contentOption';
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
 Point,
 SkillsContainer,
 Skills,
 SkillsWrap,
 Namespace,
 Database,
 DeviceMobile,
 ServicesContainer,
} from './About.styled';

const About = () => {
 const getSkills = type => {
  return skillsList.filter(i => i.type === type);
 };

 return (
  <div>
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
        <p>1 + Years Working</p>
       </li>
       <li>
        <Projects size={26} />
        <h3>Completed</h3>
        <p>10 + Projects</p>
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
         {getSkills('front').map(({ name, level }) => (
          <li key={nanoid(2)}>
           <Point />
           <div>
            <h4>{name}</h4>
            <span>{level}</span>
           </div>
          </li>
         ))}
        </ul>
       </SkillsWrap>
       <SkillsWrap>
        <h3>Backend Developer</h3>
        <ul>
         {getSkills('back').map(({ name, level }) => (
          <li key={nanoid(2)}>
           <Point />
           <div>
            <h4>{name}</h4>
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
  </div>
 );
};

export default About;
