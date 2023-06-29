import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social"
import Home from "./components/Home/Home"
// import Home from "./pages/Home/Home";
// import Task1 from "./pages/Task1/Task1";
// import Task2 from "./pages/Task2/Task2";
// import Task3 from "./pages/Task3/Task3";
// import Task4 from "./pages/Task4/Task4";
// import Task5 from "./pages/Task5/Task5";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
            {/* <Home /> */}
          <Route path="/about"/>
            {/* <Task1 /> */}
          <Route path="/skills"/>
            {/* <Task2 /> */}
          <Route path="/services"/>
            {/* <Task3 /> */}
          <Route path="/portfolio"/>
            {/* <Task4 /> */}
          <Route path="/contact"/>
            {/* <Task5 /> */}
          <Route path="*" render={() => <Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;