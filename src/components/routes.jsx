import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
const PageRoutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/HemanthDas" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default PageRoutes;
