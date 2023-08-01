import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import withRouter from './hooks/withRouter';
import './App.css';
import Loader from './components/Loader/Loader';

const AppRoutes = lazy(() => import('./routes'));
const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function _ScrollToTop(props) {
 const { pathname } = useLocation();
 useEffect(() => {
  window.scrollTo(0, 0);
 }, [pathname]);
 return props.children;
}
const Scroll = withRouter(_ScrollToTop);

const App = () => {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const delay = 3000;
  const timer = setTimeout(() => {
   setLoading(false);
  }, delay);
  return () => clearTimeout(timer);
 }, []);

 return (
  <Router>
   <ScrollToTop smooth color="#bb9d55" />
   <Scroll>
    <Suspense fallback={<Loader />}>
     {loading ? (
      <Loader />
     ) : (
      <>
       <Header />
       <AppRoutes />
       <Footer />
      </>
     )}
    </Suspense>
   </Scroll>
  </Router>
 );
};

export default App;
