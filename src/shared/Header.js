import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.png';
import arrowDown from '../assets/img/icons/arrow-down.svg';


export const Header  = () => {
    return(
<header className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                    <div className="header__menu">
                        <img src={user} alt="" />
                        <img src={arrowDown} alt="" />
                    </div>
                </header>
    )
}