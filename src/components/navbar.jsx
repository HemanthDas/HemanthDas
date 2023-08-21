import { HashLink } from "react-router-hash-link";
import codechef from "../assets/codechef.svg";
import hackerrank from "../assets/hackerrank.png";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import leetcode from "../assets/leetcode.png";
import { useEffect, useState, useRef } from "react";
const Navbar = () => {
  const [clicked, isClicked] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        isClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="navbody">
      <div className="navbar">
        <div className="inpage">
          <HashLink className="link" to={"/HemanthDas/"}>
            Porfolio
          </HashLink>
          <HashLink className="link" to={"#skills"}>
            skills
          </HashLink>
          <HashLink className="link" to={"#project"}>
            Project
          </HashLink>
          <HashLink className="link" to={"#project"}>
            About
          </HashLink>
        </div>
        <div className="outpage">
          <a href="https://www.codechef.com/users/klu2100030195">
            <img src={codechef} alt="codechef" />
          </a>
          <a href="https://www.hackerrank.com/KLU_2100030195">
            <img src={hackerrank} alt="hackerrank" />
          </a>
          <a href="https://leetcode.com/Hemanthchowdary9/">
            <img src={leetcode} alt="codechef" />
          </a>
        </div>
      </div>
      <div style={{ display: "flex" }} className="res">
        <div style={{ fontSize: "2.5em", color: "white" }}>Porfolio</div>
        <div
          onClick={() => {
            clicked ? isClicked(false) : isClicked(true);
          }}
          ref={menuRef}
        >
          {!clicked ? (
            <img src={menu} alt="menu" />
          ) : (
            <img src={cross} alt="cross" />
          )}
          <div className={clicked ? "resmenu active" : "resmenu"}>
            <ul>
              <HashLink className="link" to={"#skills"}>
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  Skills
                </label>
              </HashLink>
              <HashLink className="link" to={"#project"}>
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  Project
                </label>
              </HashLink>
              <HashLink className="link" to={"#project"}>
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  Project
                </label>
              </HashLink>
              <a href="https://www.codechef.com/users/klu2100030195">
                <img src={codechef} alt="codechef" />{" "}
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  Codechef
                </label>
              </a>
              <a href="https://www.hackerrank.com/KLU_2100030195">
                <img src={hackerrank} alt="hackerrank" />{" "}
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  HackerRank
                </label>
              </a>
              <a href="https://leetcode.com/Hemanthchowdary9/">
                <img src={leetcode} alt="LeetCode" />{" "}
                <label
                  style={{
                    fontSize: "0.8em",
                    textShadow: "none",
                    color: "black",
                  }}
                >
                  LeetCode
                </label>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
