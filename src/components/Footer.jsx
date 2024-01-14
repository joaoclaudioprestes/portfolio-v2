import React from "react";
import "../style/components/_footer.sass"


const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; 2023 - <a href=""> jprestes.com </a> | Todos os direitos
        reservados.
      </p>

      <div className="poweredby">
        <p>Powered by</p>
        <img src="logo.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
