import PropTypes from "prop-types";
import data from "../assets/images.json";
const Box = (props) => {
  const obj = data[props.id];
  return (
    <a href={obj.url}>
      <div className="card">
        <img className="img" src={obj.img}></img>
        <div className="text">
          <label>{obj.title}</label>
          <p>{obj.discription}</p>
        </div>
      </div>
    </a>
  );
};

Box.propTypes = { id: PropTypes.number };

export default Box;
