import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../contentOption';
import Portfolio from '../../components/Portfolio/Portfolio';

const PortfolioPage = () => {
 return (
  <HelmetProvider>
   <section id="portfolio">
    <Helmet>
     <meta charSet="utf-8" />
     <title> {meta.title}</title>
     <meta name="description" content={meta.description} />
    </Helmet>
    <Portfolio />
   </section>
  </HelmetProvider>
 );
};

export default PortfolioPage;
