import Table from "../components/table";
import js from "../assets/js.svg";
import ansible from "../assets/ansible.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg";
import github from "../assets/github.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import java from "../assets/java.svg";
import jenkins from "../assets/jenkins.svg";
import linux from "../assets/linux.svg";
import css from "../assets/css.svg";
const Skills = () => {
  const skillObject = {
    "Programming Languages": [js, java, html, css],
    Tools: [git, github],
    DevOps: [ansible, aws, docker, jenkins],
    OS: [linux],
  };
  return (
    <div id="skill">
      <Table skillobject={skillObject} />
    </div>
  );
};

export default Skills;
