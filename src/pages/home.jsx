import Typed from "typed.js";
import dev from "../assets/dev.svg";
import { useRef, useEffect } from "react";
const Home = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: ["Greetings! I am V. Hemanth Das, currently a dedicated student at KL University, pursuing my 3rd year of Bachelor's in Computer Science and Engineering (CSE)."],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: false,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="text">
        <div>
          <h1 style={{marginBottom:"0px"}}>Hello !</h1>
        </div>
        <p className="typed">
          <span ref={typeRef}></span>
        </p>
      </div>
      <div className="svgimg">
        <svg width="400" height="400">
          <image href={dev} width="400" height="400" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
