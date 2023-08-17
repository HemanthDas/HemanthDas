import PropTypes from "prop-types";
import data from "../assets/images.json";
const Box = (props) => {
  const obj = data[props.id];
  const imageStyle = {
    backgroundImage: `url(${obj.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <a href={obj.url}>
      <div className="card">
        <div className="img" style={imageStyle}></div>
        <div className="text">{obj.title}</div>
      </div>
    </a>
  );
};

Box.propTypes = { id: PropTypes.number };

export default Box;
