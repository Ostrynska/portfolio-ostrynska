import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../contentOption';
import Home from '../../components/Home/Home';

const HomePage = () => {
 return (
  <HelmetProvider>
   <section id="home">
    <Helmet>
     <meta charSet="utf-8" />
     <title> {meta.title}</title>
     <meta name="description" content={meta.description} />
    </Helmet>
    <Home />
   </section>
  </HelmetProvider>
 );
};

export default HomePage;
