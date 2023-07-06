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
} from './About.styled';

const About = () => {
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
        <h2>Experience</h2>
        <p>1 + Years Working</p>
       </li>
       <li>
        <Projects size={26} />
        <h2>Completed</h2>
        <p>10 + Projects</p>
       </li>
       <li>
        <Location size={26} />
        <h2>Location</h2>
        <p>Kyiv</p>
       </li>
      </ul>
     </AboutMe>
    </Content>
   </Container>
  </div>
 );
};

export default About;
