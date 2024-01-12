import "./_menu.sass";

import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Header = () => {

  
  return (
    <section className="header">
      <div className="box">
        <div>
          <img src="logo.svg" alt="Logo" className="logo" />
        </div>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/service" className="link">
            Serviços
          </Link>
          <Link to="/about" className="link">
            Sobre mim
          </Link>
          <Link to="/contact" className="link">
            Contato
          </Link>
        </nav>
        <div className="box-icons">
          <div className="icon linkdin">
            <FaLinkedinIn size={14}/>
          </div>
          <div className="icon github">
            <FaGithub size={14} />
          </div>
          <div className="icon instagram">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </section>
  );
};
