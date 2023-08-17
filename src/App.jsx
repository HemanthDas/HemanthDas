import "./App.css";
import { useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import images from "./assets/images";
function App() {
  const obj = images[4];
  useEffect(() => {
    document.body.style.backgroundImage = `url(${obj.img})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
    };
  }, [obj.img]);
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
