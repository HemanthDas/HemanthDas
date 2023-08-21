import "./App.css";
import Project from "./pages/project";
import Skills from "./pages/skills";
import PageRoutes from "./components/routes";
function App() {
  return (
    <>
      <div>
        <PageRoutes />
        <Project />
        <Skills />
      </div>
    </>
  );
}

export default App;
