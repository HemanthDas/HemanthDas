import { useEffect, useRef } from "react";
import AboutCard from "../components/aboutCard";

const About = () => {
  const about_ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
        {
          title: "Backend Development:",
          points: [
            "Proficient in Node.js and Express.js for building scalable and efficient server-side applications.",
            "Experienced in working with MongoDB and Mongoose for developing database-driven applications and handling data modeling.",
            "Familiar with RESTful API design principles and implementing CRUD operations for seamless client-server communication.",
          ],
        },
      ],
    },
    {
      small_title: "DevOps",
      main_title: "DevOps",
      details: [
        {
          title: "CI/CD Pipelines:",
          points: [
            "Experienced in setting up CI/CD pipelines using Jenkins and GitHub Actions for automating the build, test, and deployment processes.",
            "Familiar with version control systems such as Git for managing codebase and collaborating with team members.",
            "Skilled in using Docker for containerization and Kubernetes for orchestrating containerized applications.",
          ],
        },
        {
          title: "Cloud Platforms:",
          points: [
            "Proficient in working with cloud platforms such as AWS and Azure for deploying and scaling applications.",
            "Experienced in setting up virtual machines, storage solutions, and networking configurations on cloud platforms.",
            "Familiar with serverless computing and deploying functions on AWS Lambda for event-driven architectures.",
          ],
        },
      ],
    },
    {
      small_title: "GDSC",
      main_title: "GOOGLE DEVELOPERS STUDENT CLUB",
      details: [
        {
          title: "GDSC KLU",
          points: [
            "I am a member of the Google Developers Student Club (GDSC) at K L Deemed to be University, Vijayawada.",
            "As a member, I actively participate in organizing workshops, and tech talks to promote collaboration and skill development among students.",
            "I have also conducted sessions on web development, cloud computing, and competitive programming to enhance the technical knowledge of club members.",
          ],
        },
      ],
    },
    {
      small_title: "KL University",
      main_title: "K L Deemed to be University",
      details: [
        {
          title: "B.Tech in CSE",
          points: [
            "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at K L Deemed to be University, Vijayawada.",
            "I have completed courses on data structures, algorithms, database management systems, and software engineering as part of my academic curriculum.",
            "I have also participated in hackathons, coding competitions, and technical events to enhance my practical skills and knowledge.",
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
