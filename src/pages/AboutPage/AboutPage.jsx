import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../contentOption';
import About from '../../components/About/About';

const AboutPage = () => {
 return (
  <HelmetProvider>
   <section id="about">
    <Helmet>
     <meta charSet="utf-8" />
     <title> {meta.title}</title>
     <meta name="description" content={meta.description} />
    </Helmet>
    <About />
   </section>
  </HelmetProvider>
 );
};

export default AboutPage;
