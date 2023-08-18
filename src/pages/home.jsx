import Typed from "typed.js";
import dev from "../assets/dev.svg";
import { useRef, useEffect } from "react";
const Home = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: ["Welcome to My Website"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: false,
      showCursor: true,
      cursorChar: "!",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="text">
        <div>
          <h1>Hello !</h1>
          <h1>I am Hemanth Das</h1>
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
