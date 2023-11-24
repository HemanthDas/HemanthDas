import PropTypes from "prop-types";

const Table = (props) => {
  const { skillobject } = props;
  const keys = Object.keys(skillobject);
  return (
    <>
      {keys.map((element, index) => {
        return (
          <>
            <h1>{element}</h1>
            {skillobject[element].map((skill, index) => {
              return <img src={skill} alt={skill} key={index} />;
            })}
          </>
        );
      })}
    </>
  );
};
Table.propTypes = {
  skillobject: PropTypes.object,
};
export default Table;
