import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

import "./Header.css";

import Logo from "../../assets/images/logo.svg";
import UserIcon from "../../assets/images/user.png";
import ArrowDownIcon from "../../assets/images/icons/arrow-down.svg";

import {
  getUserMethod,
  removeUserMethod,
} from "../../pages/Login/LoginService";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    googleLogout();
    removeUserMethod();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
        />
      </div>
      {getUserMethod() && (
        <div className="header__menu" onClick={() => logOut()}>
          <img src={UserIcon} alt="Foto do perfil" />
          <img src={ArrowDownIcon} alt="Seta preta para baixo" />
        </div>
      )}
    </header>
  );
};

export default Header;
