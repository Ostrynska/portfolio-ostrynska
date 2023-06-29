// import { useCallback } from "react";

import Typewriter from 'typewriter-effect';
import Animate from 'react-smooth';
import { Link } from 'react-router-dom';
// import { loadFull } from "tsparticles";

import { introdata, particles } from '../../contentOption';
import myImage from '../../images/myphoto.png';
import {
 HomeWrapp,
 HomeMain,
 HomeMainCol,
 Title,
 PreTitle,
 Text,
 Particle,
 ButtonWrapp,
 ButtonB,
 Button,
 ImageWrapp,
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
      <Title>I’m Kateryna Ostrynska</Title>
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
         <ButtonB href="/">My Portfolio</ButtonB>
         <div $one></div>
         <div $two></div>
         <div $three></div>
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
     <img src={myImage} alt="Моє зображення" width={300} />
    </ImageWrapp>
   </HomeWrapp>
  </Animate>
 );
}

export default Home;
