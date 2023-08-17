import { useEffect, useState, useRef } from "react";
import { Card, Progress } from "../components/card";
const Skills = () => {
  const [widht, setWidth] = useState(window.innerWidth);
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
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
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="skills" ref={ref}>
      <label>Technical Skills</label>
      <div className="top">
        <Progress
          name="Java"
          value={85}
          width={widht / 2}
          visible={isVisible}
        />
        <Progress
          name="Full-Stack Web Development"
          value={90}
          width={widht / 2}
          visible={isVisible}
        />
        <Progress
          name="Git/GitHub"
          value={70}
          width={widht / 2}
          visible={isVisible}
        />
        <Progress
          name="Data Structures and Algorithms"
          value={80}
          width={widht / 2}
          visible={isVisible}
        />
        <Progress
          name="Problem Solving Using Java"
          value={80}
          width={widht / 2}
          visible={isVisible}
        />
      </div>
      <label>Certificates</label>
      <div className="bottom">
        <Card id={0} />
        <Card id={1} />
      </div>
    </div>
  );
};

export default Skills;
