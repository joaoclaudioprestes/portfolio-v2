import { useState } from "react";
import "../style/components/_skills.sass";

import {
  DiReact,
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiSqllite,
  DiJava,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [tech, setTech] = useState("");

  const handleMouseUp = (newTech) => {
    setTech(newTech);
  };

  return (
    <section className="container-global">
      <div className="container-title">
        <h2>Conhecimentos</h2>
        <p>
          Passe o mause sobre os conhecimentos para saber mais sobre cada um...
        </p>
        <div className="container-flex">
          <div className="container-box-resume">
            <div className="resume-skills">
              <p>{tech || "O resultado vai aparecer aqui ⬇️"}</p>
            </div>
          </div>
          <div className="container-box-skills">
            <div className="container-skills">
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiHtml5 className="icon" />
                <p>HTML 5</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. "
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiCss3 className="icon" />
                <p>CSS 3</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiJavascript1 className="icon" />
                <p>JavaScript</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. "
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiNodejs className="icon" />
                <p>Node.js</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiReact className="icon" />
                <p>React</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiPython className="icon" />
                <p>Python</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "Structured Query Language, lit. linguagem de consulta estruturada, é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados, ou para processamento de fluxo de dados em um sistema de gerenciamento de fluxo de dados."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiSqllite className="icon" />
                <p>SQL</p>
              </div>
              <div
                className="box-skill"
                onMouseOver={() =>
                  handleMouseUp(
                    "Java é uma linguagem de programação amplamente usada para codificar aplicações Web. Ela tem sido uma escolha popular entre os desenvolvedores há mais de duas décadas, com milhões de aplicações Java em uso hoje."
                  )
                }
                onMouseOut={() => handleMouseUp("")}
              >
                <DiJava className="icon" />
                <p>Java</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
