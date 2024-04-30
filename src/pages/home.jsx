const Home = () => {
  return (
    <div id="main">
      <div className="main-img"></div>
      <div className="main-txt">Full Stack Developer & DevOps Engineer</div>
      <button
        className="about-btn main-nav-btn"
        onClick={() => {
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Learn More {">"}
      </button>
    </div>
  );
};

export default Home;
