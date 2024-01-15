import "../style/components/_header.sass";

import { Link } from "react-router-dom";

const Header = ({ page }) => {
  return (
    <section className="header">
      <div className="box">
        <div>
          <img src="logo.svg" alt="Logo" className="logo" />
        </div>
        <nav>
          <Link to="/" className={`link ${page === "home" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`link ${page === "about" ? "active" : ""}`}
          >
            Sobre mim
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
