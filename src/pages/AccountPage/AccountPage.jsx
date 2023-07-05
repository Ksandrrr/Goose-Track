import {SideBar} from "../SideBar/SideBar"
import Style from "./AccountPage.module.scss"
import { useSelector } from 'react-redux';
import {ProfileForm} from "../../components/ProfileForm/ProfileForm"
 const AccountPage = () => {
  const theme = useSelector(state => state.theme.value);
   return <><SideBar /><section className={!theme ? Style.AccountPage : Style.AccountPageDark}>
    <div className="container">
     <div className={!theme ? Style.wrapper : Style.wrapperDark}>
        <p className={theme ? Style.name : Style.nameDark}>Nadiia Doe</p>
        <p className={theme ? Style.user : Style.userDark}>User</p>
        <ProfileForm />
</div>
    </div></section></>
}
export default AccountPage