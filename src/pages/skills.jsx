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
import React from "react";
const Skills = () => {
  const skillObject = {
    Languages: [js, java, html, css],
    Tools: [git, github],
    DevOps: [ansible, aws, docker, jenkins],
    OS: [linux],
  };
  return (
    <div id="skill">
      {Object.keys(skillObject).map((key, index) => {
        return (
          <React.Fragment key={index}>
            <label>{key}</label>
            <div>
              {skillObject[key].map((skill, index) => {
                return <img src={skill} alt={skill} key={index} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Skills;
