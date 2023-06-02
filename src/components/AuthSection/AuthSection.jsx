import Style from "./AuthSection.module.scss"
import LogoL from "../../img/MainPage/GOOSE2xLogo.png"
import LogoS from "../../img/MainPage/GOOSE-MOBILE.png"
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
        <button className={Style.Sign}> <p>Sign up</p> </button>
        <button className={Style.LogIn}>Log in</button>
        </div>
</section>
}