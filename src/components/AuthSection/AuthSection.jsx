import Style from "./AuthSection.module.scss"
import LogoL from "../../img/MainPage/GOOSE2xLogo.png"
import { IconContext } from 'react-icons';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const AuthSection = () => {

    return <section className={Style.AuthSection}>
        <div className={Style.wrapperLogo}>
        <picture>  
            <source media="(min-width: 768px)" srcSet={LogoL} />
            <img className={Style.LogoImg} src={LogoL} alt="logoGoos" />
          </picture>
        <h1 className={Style.Title}>GooseTrack</h1>
        </div>
        <div className={Style.wrapperBtn}>
        <NavLink to="/registr" className={Style.Sign}><p>Sign up</p></NavLink>
        <NavLink to="/login" className={Style.LogIn}>Log in<IconContext.Provider value={{ color: '#3E85F3', size: '15px' }}><FiLogIn/></IconContext.Provider></NavLink>
      </div>
      
</section>
}