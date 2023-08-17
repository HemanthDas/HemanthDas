import { useEffect, useRef, useState } from "react";
import data from "../assets/images.json";
const About = () => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }, option);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  const obj = data[5];
  return (
    <div className="about" ref={ref}>
      <div className={"box " + (isVisible && "anime")}>
        <div className="item item1">
          <div
            className="dp"
            style={{ backgroundImage: `url(${obj.img})` }}
          ></div>
        </div>
        <div className="item item2">
          <h4>Hello!</h4>
          <p>
            Greetings! I am <strong>V. Hemanth Das</strong>, currently a
            dedicated student at KL University, pursuing my 3rd year of
            Bachelor&apos;s in Computer Science and Engineering (CSE). My
            journey in the world of technology has been nothing short of
            exhilarating.
            <br></br>
            <br></br>
            As an intermediate-level full stack developer, I have had the
            privilege to explore both front-end and back-end development,
            immersing myself in the art of crafting seamless and dynamic user
            experiences. The world of coding, with its logical puzzles and
            endless possibilities, has truly become my playground.
            <br></br>
            <br></br>
            Java is my language of choice, and I thrive on solving intricate
            programming challenges. Whether it's building efficient algorithms
            or developing robust applications, I find myself in a state of flow
            when I'm deeply engaged in problem-solving with Java.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
