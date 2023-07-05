// import { portfolioData } from '../../contentOption';

import {
 Container,
 TitleWrapp,
 Title,
 TitleLine,
 Content,
} from './About.styled';

const About = () => {
 return (
  <div>
   <Container>
    <TitleWrapp>
     <Title>About me</Title>
     <TitleLine />
    </TitleWrapp>
    <Content></Content>
   </Container>
  </div>
 );
};

export default About;
