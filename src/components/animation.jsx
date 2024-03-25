import { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const animation = document.getElementById("animation");
    animation.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div id="animation">
      <div className="atxt txt1">Hello...!</div>
      <div className="atxt txt2"> Welcome :)</div>
    </div>
  );
};

export default Animation;
