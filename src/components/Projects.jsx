import "../style/components/_projects.sass";
import { Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      nameProject: "IntegraBike",
      descriptionProject: "Projeto desenvolvido na Faculdade.",
      linkRepository:
        "https://github.com/joaoclaudioprestes/projeto-integra-bike",
      linkDeploy: "https://projeto-integra-bike.vercel.app/",
      imgProject: "integrabike.png",
    },
    {
      nameProject: "Calculadora",
      descriptionProject: "Calculadora criada com HTML, CSS e JS.",
      linkRepository: "https://github.com/joaoclaudioprestes/calculator",
      linkDeploy: "https://calculator-ochre-zeta-53.vercel.app/",
      imgProject: "calculadora.png",
    },
  ];

  return (
    <section className="container-project">
      <section className="global-container-projects">
        <div className="title-projects">
          <h2>Projetos</h2>
          <p>Conheça meus projetos...</p>
        </div>
        <div className="box-projects">
          {projects &&
            projects.map((project) => (
              <Project
                nameProject={project.nameProject}
                descriptionProject={project.descriptionProject}
                linkRepository={project.linkRepository}
                linkDeploy={project.linkDeploy}
                imgProject={project.imgProject}
              />
            ))}
        </div>
        <button className="view-all">
          <Link className="link">Veja mais</Link>
        </button>
      </section>
    </section>
  );
};

export default Projects;
