import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import { introdata } from '../../contentOption';

import {
 HomeWrapp,
 HomeMain,
 HomeMainCol,
 Title,
 TitlePosition,
 PreTitle,
 Text,
 ButtonWrapp,
 Button,
 ImageWrapp,
} from '../Home/Home.styled';

function Home() {
 return (
  <>
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
   </HomeWrapp>
  </>
 );
}

export default Home;
