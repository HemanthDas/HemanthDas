import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
function App() {
  return (
    <>
      <div>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
