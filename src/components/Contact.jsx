import { MdEmail } from "react-icons/md";
import "../style/components/_contact.sass";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="conteiner-contact">
      <div className="title-contact">
        <h2>Contato</h2>
        <p>Entre em contato comigo.</p>
      </div>
      <div className="info-contact">
        <button className="box-contact linkedin">
          <FaLinkedin className="icon linkedin" />
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
            target="_blank"
            className="link"
          >
            LinkedIn
          </a>
        </button>
        <button className="box-contact whatsapp">
          <FaWhatsapp className="icon whatsapp" />
          <a href="tel:15997838020" className="link">
            (15) 99783-8020
          </a>
        </button>
        <button className="box-contact email">
          <MdEmail className="icon github" />
          <a href="mailto:joaoprestes17@outlook.com" className="link">
            joaoprestes17@outlook.com
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
