import { Route, Routes } from 'react-router-dom';
import withRouter from './hooks/withRouter';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
// import { About } from "../pages/about";
import Social from './components/Social/Social';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes = withRouter(({ location }) => (
 <TransitionGroup>
  <CSSTransition
   key={location.key}
   timeout={{
    enter: 400,
    exit: 400,
   }}
   classNames="page"
   unmountOnExit
  >
   <Routes location={location}>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    {/* <Route path="/about" element={<About />} />
     */}
    <Route path="*" element={<HomePage />} />
   </Routes>
  </CSSTransition>
 </TransitionGroup>
));

function AppRoutes() {
 return (
  <div style={{ paddingTop: '40' }}>
   <AnimatedRoutes />
   <Social />
  </div>
 );
}

export default AppRoutes;
