import PropTypes from "prop-types";
const AboutCard = ({ carddata }) => {
  return (
    <div className="aboutcard">
      <div className="card-t1">{carddata.small_title}</div>
      <h2 className="card-t2">{carddata.main_title}</h2>
      <div className="expand">
        <div className="expand__content">
          {carddata.details.map((detail) => {
            return (
              <>
                <h3>{detail.title}</h3>
                <ul>
                  {detail.points.map((point, index) => {
                    return <li key={index + 1}>{point}</li>;
                  })}
                </ul>
              </>
            );
          })}
          <h3>Frontend Development:</h3>
          <ul>
            <li>
              Proficient in HTML5, CSS3, and JavaScript for building interactive
              and responsive user interfaces.
            </li>
            <li>
              Experienced in leveraging frontend frameworks such as React.js for
              building dynamic single-page applications (SPAs).
            </li>
            <li>
              Skilled in using Bootstrap and Tailwind CSS for rapid prototyping
              and creating visually appealing designs.
            </li>
          </ul>
          <h3>Backend Development:</h3>
          <ul>
            <li>
              Proficient in Node.js and Express.js for building scalable and
              efficient server-side applications.
            </li>
            <li>
              Experienced in working with MongoDB and Mongoose for developing
              database-driven applications and handling data modeling.
            </li>
            <li>
              Familiar with RESTful API design principles and implementing CRUD
              operations for seamless client-server communication.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
AboutCard.propTypes = {
  carddata: PropTypes.object.isRequired,
};
export default AboutCard;
