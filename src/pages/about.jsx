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
            My self <strong>V.Hemanth Das</strong>, I pursuing my Bachelor of
            thechknowloedgy in computer science and engineering Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eaque voluptate,
            doloribus atque sit illo magnam aspernatur officiis rerum reiciendis
            saepe aliquid nisi dolorum vitae ab? Laboriosam voluptatem earum
            placeat provident.<br></br>
            <br></br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloremque provident libero culpa quos! Dolores repellat, beatae,
            optio quia blanditiis odit aliquam nisi voluptas dolore, quisquam
            eum. Nihil, inventore ad?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
