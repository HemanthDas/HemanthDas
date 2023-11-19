import "./App.css";
import Project from "./pages/project";
import PageRoutes from "./components/routes";
import Journey from "./pages/journey";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    <div className="whole">
      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={6}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <PageRoutes />
      <Journey />
      <Project />
    </div>
  );
}

export default App;
