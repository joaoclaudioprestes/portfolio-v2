import "./_Home.sass";

import { Header } from "../components/Header/index";
import { GoArrowUpRight } from "react-icons/go";
import {Link} from "react-router-dom"


export const Home = () => {
  return (
    <>
      <Header page="Home"/>
      <div className="container-home">
        <h2>Oi, eu sou João!</h2>
        <h1>Vamos transformar ideias em código?</h1>
        <h3>Full Stack Developer</h3>
        <p>
        Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em minha jornada acadêmica, busco constantemente a evolução na área Tech, explorando diariamente novas tecnologias e progredindo em meio a descobertas contínuas. Desde o início, aplico e registro meu aprendizado por meio de diversos projetos. Convido você a conferir um vislumbre do meu conhecimento em ação. 🚀
        </p>

        <div className="box-buttons">
          <button>
            <Link to="/about" className="link">
              Sobre mim <GoArrowUpRight />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
