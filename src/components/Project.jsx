import React from "react";
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="project">
      <img src="project-01.png" alt="Service Image" />
      <div className="description">
        <h3>Integra Bike</h3>
        <p>Projeto desenvolvido durante a faculdade</p>
        <div className="technologies">
          <div className="icons-technologies">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="buttons">
            <button className="code">
              <i className="fa-brands fa-github"></i>
              <Link className="link">Repositorio</Link>
            </button>
            <button className="preview">
              <i className="fa-brands fa-chrome"></i>
              <Link className="link">Deploy</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
