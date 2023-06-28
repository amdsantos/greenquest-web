import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../assets/img/logo.svg";
import UserIcon from "../../assets/img/user.png";
import ArrowDownIcon from "../../assets/img/icons/arrow-down.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
        />
      </div>
      <Link to="/login">
        <div className="header__menu">
          <img src={UserIcon} alt="Foto do perfil" />
          <img src={ArrowDownIcon} alt="Seta preta para baixo" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
