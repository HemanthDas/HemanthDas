import "./App.css";
import Project from "./pages/project";
import Navbar from "./components/navbar";
import Journey from "./pages/journey";
import Skills from "./pages/skills";
import Home from "./pages/home";
function App() {
  return (
    <div className="whole" id="page2">
      <Navbar />
      <Home />
      <Journey />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
