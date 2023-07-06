import { Route, Routes } from 'react-router-dom';
import withRouter from './hooks/withRouter';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Social from './components/Social/Social';

const MainRoutes = withRouter(({ location }) => (
 <>
  <Routes location={location}>
   <Route exact path="/" element={<HomePage />} />
   <Route path="/contact" element={<ContactPage />} />
   <Route path="/portfolio" element={<PortfolioPage />} />
   <Route path="/about" element={<AboutPage />} />
   <Route path="*" element={<HomePage />} />
  </Routes>
 </>
));

function AppRoutes() {
 return (
  <div style={{ paddingTop: '40' }}>
   <MainRoutes />
   <Social />
  </div>
 );
}

export default AppRoutes;
