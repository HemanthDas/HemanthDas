import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div>
      <Link to={"#skills"}>skills</Link>
      <Link to={"#project"}>project</Link>
    </div>
  );
};

export default Navbar;
