import PropTypes from "prop-types";
const AboutCard = ({ carddata }) => {
  return (
    <div className="aboutcard">
      <div className="card-t1">{carddata.small_title}</div>
      <h2 className="card-t2">{carddata.main_title}</h2>
      <div className="expand">
        <div className="expand__content">
          {carddata.details.map((detail, index) => {
            return (
              <div key={index + 2} className="item">
                <h3>{detail.title}</h3>
                <ul>
                  {detail.points.map((point, index) => {
                    return <li key={index + 1}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
AboutCard.propTypes = {
  carddata: PropTypes.object.isRequired,
};
export default AboutCard;
