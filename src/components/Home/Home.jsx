

import {HomeWrapp, HomeMain, HomeMainCol, Title, NextTitle, Typing} from "../Home/Home.styled"

  function Home() {
  return (
   <HomeWrapp>
    <HomeMain>
       <HomeMainCol xl={12}>
         <Title>
           Hello!
         </Title>
         <NextTitle>
           I am <strong>Kateryna Ostrynska</strong>
         </NextTitle>
         <h3>
         <Typing
           text="Frontend Developer"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
         </HomeMainCol>
     </HomeMain>
   </HomeWrapp>
  );
}

export default Home;