import "../style/components/_project.sass";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineWebAsset } from "react-icons/md";

const Project = ({
  nameProject,
  descriptionProject,
  linkRepository,
  linkDeploy,
  imgProject,
}) => {
  return (
    <div className="project">
      <img src={imgProject} alt="Service Image" />
      <div className="description">
        <h3>{nameProject}</h3>
        <p>{descriptionProject}</p>
        <div className="buttons">
          <button className="code">
            <FaGithub size={14} />
            <Link className="link" to={linkRepository} target="_blank">
              Repositorio
            </Link>
          </button>
          <button className="preview">
            <MdOutlineWebAsset size={14} />
            <Link className="link" to={linkDeploy} target="_blank">
              Deploy
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
