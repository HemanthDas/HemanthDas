import { useEffect, useRef, useState } from "react";
import AboutCard from "../components/aboutCard";

const About = () => {
  const about_ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("about-appear");
          } else {
            entry.target.classList.remove("about-appear");
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(about_ref.current);
  }, []);
  const aboutcard_data = [
    {
      small_title: "Web-Dev",
      main_title: "Web Development",
      details: [
        {
          title: "Frontend Development:",
          points: [
            "Proficient in HTML5, CSS3, and JavaScript for building interactive and responsive user interfaces.",
            "Experienced in leveraging frontend frameworks such as React.js for building dynamic single-page applications (SPAs).",
            "Skilled in using Bootstrap and Tailwind CSS for rapid prototyping and creating visually appealing designs.",
          ],
        },
      ],
    },
  ];
  return (
    <div id="about" ref={about_ref}>
      <div className="card-grid">
        {aboutcard_data.map((carddata, index) => {
          return <AboutCard carddata={carddata} key={index + 1} />;
        })}
      </div>
      <div className="about-btns">
        <a
          href="https://www.linkedin.com/in/hemantdas9/"
          target="_blank"
          rel="noreferrer"
          className="main-nav-btn about-btn"
        >
          Linkdin {">"}
        </a>
        <a
          href="https://github.com/HemanthDas"
          target="_blank"
          rel="noreferrer"
          className="main-nav-btn about-btn"
        >
          Github {">"}
        </a>
        <a
          href="https://www.hackerrank.com/profile/KLU_2100030195"
          target="_blank"
          rel="noreferrer"
          className="main-nav-btn about-btn"
        >
          HackerRank {">"}
        </a>
        <a
          href="https://leetcode.com/Hemanthchowdary9/"
          target="_blank"
          rel="noreferrer"
          className="main-nav-btn about-btn"
        >
          LeetCode {">"}
        </a>
        <a
          href="https://www.codechef.com/users/klu2100030195"
          target="_blank"
          rel="noreferrer"
          className="main-nav-btn about-btn"
        >
          CodeChef {">"}
        </a>
      </div>
    </div>
  );
};

export default About;
