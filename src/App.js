import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import withRouter from './hooks/withRouter';
import AppRoutes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function _ScrollToTop(props) {
 const { pathname } = useLocation();
 useEffect(() => {
  window.scrollTo(0, 0);
 }, [pathname]);
 return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
 return (
  <Router>
   <ScrollToTop>
    <Header />
    <AppRoutes />
    <Footer />
   </ScrollToTop>
   <ToastContainer />
  </Router>
 );
};

export default App;
