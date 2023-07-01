import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../contentOption';
import Contact from '../../components/Contact/Contact';

const ContactPage = () => {
 return (
  <HelmetProvider>
   <section id="home">
    <Helmet>
     <meta charSet="utf-8" />
     <title> {meta.title}</title>
     <meta name="description" content={meta.description} />
    </Helmet>
    <Contact />
   </section>
  </HelmetProvider>
 );
};

export default ContactPage;
