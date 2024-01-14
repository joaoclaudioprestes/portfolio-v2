import "../style/components/_projects.sass";
import {
  DiReact,
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const icons = {};

  return (
    <section className="container-project">
      <section className="global-container-projects">
        <div className="title-projects">
          <h2>Projetos</h2>
          <p>Conheça meus projetos...</p>
        </div>
        <div className="box-projects">
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
        </div>
        <button className="view-all">
          <Link className="link">Veja mais</Link>
        </button>
      </section>
    </section>
  );
};

export default Projects;
