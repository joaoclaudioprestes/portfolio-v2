import "./_boxServices.sass";

import { CiMobile2 } from "react-icons/ci";
import { SiMaterialdesign } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";

const Services = () => {
  return (
    <div className="container">
      <div className="container-service">
        <div className="title-service">
          <h2>Serviços</h2>
          <p>Conheça alguns dos meus serviços.</p>
        </div>
        <div className="box-service">
          <div>
            <SiMaterialdesign className="icon" />
            <h3>UI Design</h3>
            <p>
              Projeto interfaces claras e objetivas e de fácil usabilidade do
              usuário.
            </p>
          </div>
          <div>
            <MdWebAsset className="icon" />
            <h3>Web</h3>
            <p>
              Desenvolvo projetos web, como blogs, sites, landing pages,
              e-commerce etc...
            </p>
          </div>
          <div>
            <CiMobile2 className="icon" />
            <h3>Mobile</h3>
            <p>Desenvolvo aplicações móveis de acordo com suas preferências.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
