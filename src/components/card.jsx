import PropTypes from "prop-types";
import ProgressBar from "@ramonak/react-progress-bar";
import data from "../assets/certificate.json";
function Card(props) {
  const value = data[props.id];
  const backgroundImageStyle = {
    backgroundImage: `url(${value.url})`,
  };
  return (
    <a href={value.link}>
      <div style={backgroundImageStyle} className="cardbox"></div>
    </a>
  );
}

function Progress(props) {
  const val = props.visible ? props.value : 0;
  return (
    <div className="pblock">
      <div style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        {props.name}
      </div>
      <ProgressBar
        completed={val}
        height="15px"
        width={props.width + "px"}
        labelSize="0"
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export { Card, Progress };
