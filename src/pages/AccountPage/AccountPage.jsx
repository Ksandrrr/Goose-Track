import { SideBar } from '../SideBar/SideBar';
import Style from './AccountPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { updateUserInfo } from '../../redux/auth/auth-operations';
import {updateAvatar} from "../../redux/auth/auth-operations"
import { getUser } from "../../redux/auth/auth-selectors"

const AccountPage = () => {
  const dispatch = useDispatch();
const user = useSelector(getUser)
  const onRegister = data => {
    dispatch(updateUserInfo(data));
  };
const handleImageChange = e => {
  const file = e.target.files[0]; // Получаем оригинальный файл
  
  const formData = new FormData();
  formData.append('avatar', file); // Добавляем оригинальный файл в FormData

  dispatch(updateAvatar(formData));
};


  const theme = useSelector(state => state.theme.value);
  return (
    <>
      <SideBar />
      <section className={!theme ? Style.AccountPage : Style.AccountPageDark}>
        <div className="container">
          <div className={!theme ? Style.wrapper : Style.wrapperDark}>
            <div className={Style.imgCustom}>
              <input
                type="file"
                accept="image/*, .jpeg, .png, .web, .jpg,"
                className={Style.input}
                 onChange={handleImageChange}
              />
              {user.avatarURL && <><img className={Style.imgUser} src={user.avatarURL} alt="Uploaded" /></>}
              <div className={Style.changeuserPhoto}></div>

            </div>
           
            <p className={theme ? Style.name : Style.nameDark}>{user.name}</p>
            <p className={theme ? Style.user : Style.userDark}>User</p>
            <ProfileForm onSubmit={onRegister} />
          </div>
        </div>
      </section>
    </>
  );
};
export default AccountPage;
