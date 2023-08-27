import "./App.css";
import Project from "./pages/project";
import PageRoutes from "./components/routes";
import Journey from "./pages/journey";
function App() {
  return (
    <div>
      <PageRoutes />
      <Project />
      <Journey />
    </div>
  );
}

export default App;
