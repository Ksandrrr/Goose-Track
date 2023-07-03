import Style from "./Loader.module.scss"

export const Loader = () => {
return <div className={Style.loader}><svg className={Style.svg} viewBox="25 25 50 50">
  <circle className={Style.circle} r="20" cy="50" cx="50"></circle>
</svg></div>
}