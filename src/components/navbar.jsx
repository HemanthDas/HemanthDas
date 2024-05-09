const Navbar = () => {
  const handleClick = (href) => {
    return (e) => {
      e.preventDefault();
      document.getElementById(href).scrollIntoView({
        behavior: "smooth",
      });
    };
  };
  return (
    <nav className="animate">
      <button className="item" onClick={handleClick("main")}>
        Home
      </button>
      <button className="item" onClick={handleClick("project")}>
        Projects
      </button>
      <button className="item" onClick={handleClick("achievements")}>
        Achievements
      </button>
      <button
        className="item"
        onClick={() => {
          document.getElementById("contact").style.display = "block";
        }}
      >
        Contact
      </button>
    </nav>
  );
};
export default Navbar;
