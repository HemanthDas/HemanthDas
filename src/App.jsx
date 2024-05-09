import "./App.css";
import "./pages/page.css";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Project from "./pages/project.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Achievements from "./pages/achievements.jsx";
function App() {
  return (
    <div id="full-body">
      <div id="background">
        <div id="starts"></div>
        <div id="starts2"></div>
        <div id="starts3"></div>
      </div>
      <div id="container">

          <Navbar />
          <Home />
          <About />
          <Project />
          <Achievements />
          <Contact />

      </div>
    </div>
  );
}

export default App;
