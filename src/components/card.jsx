import PropTypes from "prop-types";

const Card = ({ obj }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h2>{obj.title}</h2>
        </div>
        <div className="card-back">
          <h2>{obj.title}</h2>
          <p className="card-back-description">{obj.description}</p>
          <a
            href={obj.link}
            target="_blank"
            rel="noreferrer"
            className="git-link main-nav-btn about-btn"
          >
            <p></p>
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  obj: PropTypes.object.isRequired,
};
export default Card;
