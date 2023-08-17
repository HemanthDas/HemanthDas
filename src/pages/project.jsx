import Box from "../components/box";
const Project = () => {
  return (
    <div className="project">
      <div className="projectbox">
        <label>Projects</label>
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
        <Box id={3} />
      </div>
    </div>
  );
};

export default Project;
