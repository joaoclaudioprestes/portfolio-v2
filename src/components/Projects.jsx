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
import Project from "./Project";

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
          <Project />
        </div>
        <button className="view-all">
          <Link className="link">Veja mais</Link>
        </button>
      </section>
    </section>
  );
};

export default Projects;
