import { useEffect, useState, useRef } from "react";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import codechef from "../assets/codechef.svg";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/leetcode.png";

const PhoneNavbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ display: "flex" }} className="res">
      <div style={{ fontSize: "2.5em", color: "white" }}>Porfolio</div>
      <div
        onClick={() => {
          setClicked(!clicked);
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
            <a className="link" href="#skills">
              <label
                style={{
                  fontSize: "0.8em",
                  textShadow: "none",
                  color: "black",
                }}
              >
                Skills
              </label>
            </a>
            <a className="link" href="#project">
              <label
                style={{
                  fontSize: "0.8em",
                  textShadow: "none",
                  color: "black",
                }}
              >
                Project
              </label>
            </a>
            <a className="link" href="#about">
              <label
                style={{
                  fontSize: "0.8em",
                  textShadow: "none",
                  color: "black",
                }}
              >
                About
              </label>
            </a>
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
  );
};

export default PhoneNavbar;
