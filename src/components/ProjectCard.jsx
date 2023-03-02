import React from "react";
import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

const ProjectCard = ({
  project: { title, imgUrl, description, tools, github, demo },
}) => {
  return (
    <Col sm={12} md={6} lg={6} xl={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <div className="tools">
            {tools.map((tool, i) => (
              <span key={i}>{tool}</span>
            ))}
          </div>

          <br />
          <div className="link">
            <a href={github} target="_blank">
              <Github />
            </a>
            <a href={demo} target="_blank">
              Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
