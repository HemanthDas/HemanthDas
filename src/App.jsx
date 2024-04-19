import "./App.css";
import "./pages/page.css";
// import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Project from "./pages/project.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Achievements from "./pages/achievements.jsx";
// import Animation from "./components/animation.jsx";
function App() {
  // const [isAnimated, setIsAnimated] = useState(false);
  setTimeout(() => {
    document.documentElement.style.overflow = "auto";
    // setIsAnimated(true);
  }, 1000);
  return (
    <div id="full-body">
      <div id="background">
        <div id="starts"></div>
        <div id="starts2"></div>
        <div id="starts3"></div>
      </div>
      {/* {isAnimated ? ( */}
      <div id="container">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Achievements />
        <Contact />
      </div>
      {/* ) : (
        <Animation />
      )} */}
    </div>
  );
}

export default App;
