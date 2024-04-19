import PropTypes from "prop-types";

const Card = ({ obj }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h2>{obj.title}</h2>
        </div>
        <div className="card-back">
          <p className="card-back-description">{obj.description}</p>
          <p className="card-back-tech-title">Technologies:</p>
          <ul className="card-back-tech">
            {obj.stacks.map((stack, index) => {
              return <li key={index}>{stack}</li>;
            })}
          </ul>
          <a href={obj.link}>Github</a>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  obj: PropTypes.object.isRequired,
};
export default Card;
