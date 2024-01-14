import { MdEmail } from "react-icons/md";
import "../style/components/_contact.sass";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="container-contact">
      <div className="title-contact">
        <h2>Contato</h2>
        <p>Entre em contato comigo.</p>
      </div>
      <div className="info-contact">
        <button className="box-contact linkedin">
          <FaLinkedin className="icon linkedin" />
          <Link
            href="https://www.linkedin.com/in/jo%C3%A3o-claudio-prestes/"
            target="_blank"
            className="link"
          >
            LinkedIn
          </Link>
        </button>
        <button className="box-contact whatsapp">
          <FaWhatsapp className="icon whatsapp" />
          <Link href="tel:15997838020" className="link">
            (15) 99783-8020
          </Link>
        </button>
        <button className="box-contact email">
          <MdEmail className="icon github" />
          <Link href="mailto:joaoprestes17@outlook.com" className="link">
            joaoprestes17@outlook.com
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Contact;
