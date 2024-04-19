import Card from "../components/card";
const Project = () => {
  const obj = [
    {
      title: "Quiz Application",
      description: "This is a project",
      stacks: ["HTML", "CSS", "JS"],
      link: "https://github.com/HemanthDas/Quiz-Application",
    },
    {
      title: "Project 2",
      description: "This is a project",
      stacks: ["HTML", "CSS", "JS"],
      link: "https:github.com/username/project2",
    },
    {
      title: "Project 3",
      description: "This is a project",
      stacks: ["HTML", "CSS", "JS"],
      link: "https:github.com/username/project3",
    },
  ];
  return (
    <div id="project">
      {obj.map((item) => {
        return <Card obj={item} key={item.title} />;
      })}
    </div>
  );
};

export default Project;
