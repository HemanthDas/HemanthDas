import codechef from "../assets/codechef.svg";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/leetcode.png";
import PhoneNavbar from "./phoneNavbar";
const Navbar = () => {
  return (
    <div className="navbody">
      <div className="navbar">
        <a className="link" href={"/HemanthDas/"}>
          PORTFOLIO
        </a>
        <a className="link" href={"#about"}>
          About
        </a>
        <a className="link" href={"#project"}>
          Projects
        </a>
        <a className="link" href={"#project"}>
          Skills
        </a>
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
      <PhoneNavbar />
    </div>
  );
};

export default Navbar;
