import Typed from "typed.js";
import { useRef, useEffect } from "react";
const Home = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "Welcome to My Website",
        "This is Hemanth Das",
        "I am a student",
        "I am a web developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <span ref={typeRef}></span>
    </div>
  );
};

export default Home;
