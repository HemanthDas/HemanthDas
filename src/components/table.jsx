import PropTypes from "prop-types";

const Table = (props) => {
  const { skillobject } = props;
  const keys = Object.keys(skillobject);
  return (
    <div className="row">
      {keys.map((element, index) => {
        return (
          <div className="column" key={index}>
            <h1>{element}</h1>
            {skillobject[element].map((skill, index) => {
              return <img src={skill} alt={skill} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
Table.propTypes = {
  skillobject: PropTypes.object,
};
export default Table;
