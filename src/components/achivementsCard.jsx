import PropTypes from "prop-types";
const AchivementsCard = ({ title, date, href }) => {
  return (
    <div className="achivements-card">
      <div className="achivements-bg"></div>
      <h2>{title}</h2>
      <div className="achivements-date">
        <p>Date:{date}</p>
      </div>
      <a className="achivements-onhover-text" href={href}>
        Click me
      </a>
    </div>
  );
};
AchivementsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default AchivementsCard;
