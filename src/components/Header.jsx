import "../style/components/_header.sass";

import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = ({ page }) => {
  return (
    <section className="header">
      <div className="box">
        <div>
          <img src="logo.svg" alt="Logo" className="logo" />
        </div>
        <nav>
          <Link to="/" className={`link ${page === "Home" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`link ${page === "About" ? "active" : ""}`}
          >
            Blog
          </Link>
        </nav>
        <div className="box-icons">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
            target="_blank"
            className="icon linkdin"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="https://github.com/joaoclaudioprestes"
            target="_blank"
            className="icon github"
          >
            <FaGithub size={14} />
          </a>
          <a
            href="https://www.instagram.com/jpres_tes/"
            target="_blank"
            className="icon instagram"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
