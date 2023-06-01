import Style from "./AuthSection.module.scss"
import Logo from "../../img/MainPage/GOOSE2xLogo.png"
export const AuthSection = () => {

    return <section className={Style.AuthSection}>
        <img src={Logo} alt="LogoGus" />
        <h1 className={Style.Title}>GooseTrack</h1>
        <div className={Style.wrapperBtn}>
        <button className={Style.Sign}> <p>Sign up</p> </button>
        <button className={Style.LogIn}>Log in</button>
        </div>
</section>
}