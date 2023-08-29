import Typed from "typed.js";
import dev from "../assets/dev.svg";
import ic1 from "../assets/up90.png";
import { useRef, useEffect, useState } from "react";
const Home = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "Greetings! I am V. Hemanth Das, currently a dedicated student at KL University, pursuing my 3rd year of Bachelor's in Computer Science and Engineering (CSE).",
      ],
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
  const [isclicked, setClicked] = useState(false);
  return (
    <div className="home">
      <div className="text">
        <div>
          <h1 style={{ marginBottom: "0px" }}>Hello !</h1>
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
      <div
        className={"scroll-btn " + (isclicked && "clicked")}
        style={{
          background: `url(${ic1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            window.scrollTo({ top: 800, behavior: "smooth" });
            setClicked(false);
          }, 100);
        }}
      ></div>
    </div>
  );
};

export default Home;
