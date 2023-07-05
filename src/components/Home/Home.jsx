// import { useCallback } from "react";

import Typewriter from 'typewriter-effect';
import Animate from 'react-smooth';
import { Link } from 'react-router-dom';
// import { loadFull } from "tsparticles";

import { introdata, particles } from '../../contentOption';
import CV from '../../assets/Junior Frontend Dev_OstrynskaK.pdf';

import {
 HomeWrapp,
 HomeMain,
 HomeMainCol,
 Title,
 TitlePosition,
 PreTitle,
 Text,
 Particle,
 ButtonWrapp,
 Button,
 ImageWrapp,
 Icon,
} from '../Home/Home.styled';

function Home() {
 //     const particlesInit = useCallback(async engine => {
 //     await loadFull(engine);
 // }, []);

 // const particlesLoaded = useCallback(async container => {
 //     await console.log(container);
 // }, []);
 return (
  <Animate to="1" from="0" attributeName="opacity">
   {/* <Particle id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles}
            /> */}
   <HomeWrapp>
    <HomeMain>
     <HomeMainCol xl={12}>
      <TitlePosition>Full-stack developer</TitlePosition>
      <Title>{introdata.title}</Title>
      <PreTitle>
       <Typewriter
        options={{
         strings: [
          introdata.animated.first,
          introdata.animated.second,
          introdata.animated.third,
         ],
         autoStart: true,
         loop: true,
         deleteSpeed: 10,
        }}
       />
      </PreTitle>
      <Text>{introdata.description}</Text>
     </HomeMainCol>
     <ButtonWrapp>
      <ul>
       <Link to="/portfolio">
        <li>
         <Button href="/">My Portfolio</Button>
        </li>
       </Link>

       <Link to="/contact">
        <li>
         <Button href="/" $primary>
          Contact Me
         </Button>
        </li>
       </Link>
      </ul>
     </ButtonWrapp>
    </HomeMain>
    <ImageWrapp>
     <img src={introdata.image} alt="Моє зображення" width={300} />
    </ImageWrapp>
    <a download="" href={CV}>
     Download CV
     <Icon />
    </a>
   </HomeWrapp>
  </Animate>
 );
}

export default Home;
