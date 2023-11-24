import "./App.css";
import Project from "./pages/project";
import PageRoutes from "./components/routes";
import Journey from "./pages/journey";
import Skills from "./pages/skills";
function App() {
  return (
    <div className="whole">
      <PageRoutes />
      <Journey />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
