import { useEffect, useRef, useState } from "react";

const About = () => {
  const about_ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            console.log("yes");
            entry.target.classList.add("about-appear");
          } else {
            console.log("no");
            entry.target.classList.remove("about-appear");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(about_ref.current);
  }, []);
  return (
    <div id="about" ref={about_ref}>
      <p>
        {" "}
        Hey! I&apos;m a{" "}
        <p className={"underline-p " + (isVisible && "start")}>
          full stack developer
        </p>{" "}
        and{" "}
        <p className={"underline-p " + (isVisible && "start")}>
          devops engineer
        </p>
        . I have experience with a variety of technologies and tools, including
        JavaScript, Python, React, Node.js, Express, Docker, Kubernetes,
        Jenkins, and more. I&apos;m passionate about learning new things and
        solving problems. I&apos;m always looking for new opportunities to grow
        and improve. Let&apos;s connect!
      </p>
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
