import "../style/components/_projects.sass";
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
          <Project
            nameProject="IntegraBike"
            descriptionProject="Projeto desenvolvido na Faculdade."
            linkRepository="https://github.com/joaoclaudioprestes/projeto-integra-bike"
            linkDeploy="https://projeto-integra-bike.vercel.app/"
            imgProject="integrabike.png"
          />
        </div>
        <button className="view-all">
          <Link className="link">Veja mais</Link>
        </button>
      </section>
    </section>
  );
};

export default Projects;
