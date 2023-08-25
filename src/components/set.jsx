import PropTypes from "prop-types";

const Set = (props) => {
  if (props.type === "up")
    return (
      <div className="set">
        <div className="item">
            <label>{props.title}</label>
          <p>{props.txt}</p>
        </div>
        <div className="tag"></div>
      </div>
    );
  else
    return (
      <div className="set">
        <div className="tag"></div>
        <div className="item">
        <label>{props.title}</label>
          <p>{props.txt}</p>
        </div>
      </div>
    );
};

Set.propTypes = { txt: PropTypes.string, type: PropTypes.string,title: PropTypes.string};

export default Set;
