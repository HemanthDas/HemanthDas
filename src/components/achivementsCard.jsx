import PropTypes from "prop-types";
const AchivementsCard = ({ title, date, href }) => {
  return (
    <a className="achivements-card" href={href}>
      <div className="achivements-bg"></div>
      <h2>{title}</h2>
      <div className="achivements-date">
        <p>Date:{date}</p>
      </div>
      <div className="achivements-onhover-text">Click me</div>
    </a>
  );
};
AchivementsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default AchivementsCard;
