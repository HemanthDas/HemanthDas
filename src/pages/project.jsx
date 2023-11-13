import Box from "../components/box";
const Project = () => {
  return (
    <div className="project" id="project">
      <label>Projects</label>
      <div className="projectbox">
        <Box id={0} />
        <Box id={1} />
        <Box id={2} />
        <Box id={3} />
        <Box id={4} />
      </div>
    </div>
  );
};

export default Project;
