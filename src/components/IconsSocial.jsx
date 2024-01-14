import "../style/components/_icons_social.sass";

import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const IconsSocial = () => {
  return (
    <div className="box-icons">
      <Link
        href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
        target="_blank"
        className="icon linkdin"
      >
        <FaLinkedinIn size={14} />
      </Link>
      <Link
        href="https://github.com/joaoclaudioprestes"
        target="_blank"
        className="icon github"
      >
        <FaGithub size={14} />
      </Link>
      <Link
        href="https://www.instagram.com/jpres_tes/"
        target="_blank"
        className="icon instagram"
      >
        <FaInstagram size={14} />
      </Link>
    </div>
  );
};

export default IconsSocial;
