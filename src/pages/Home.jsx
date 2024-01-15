import "../style/components/_home.sass";

import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Services from "./../components/Services";
import Projects from "./../components/Projects";
import Skills from "./../components/Skills";
import Contact from "../components/Contact";
import Footer from "./../components/Footer";
import IconsSocial from "./../components/IconsSocial";

const Home = () => {
  return (
    <>
      <Header page="home" />
      <section className="container-home">
        <h2>Oi, eu sou João!</h2>
        <h1>Vamos transformar ideias em código?</h1>
        <h3>Full Stack Developer</h3>
        <IconsSocial />

        <div className="box-buttons">
          <button>
            <Link to="/about" className="link">
              Sobre mim <GoArrowUpRight className="icon" />
            </Link>
          </button>
        </div>
      </section>

      <Services />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
