import Style from './UserInfo.module.scss';
import { useState,useEffect  } from 'react';
import { toggleTheme } from "../../redux/theme-toggle/theme.slice";
import { useDispatch,useSelector } from 'react-redux';

import { BsMoonStars } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { BsSun } from 'react-icons/bs';

export const UserInfo = () => {
  const [changeIcon, setChangeIcon] = useState(true);
   const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();



  const handleToggle = () => {
    setChangeIcon(prevState => !prevState)
    dispatch(toggleTheme());
  };
  return (
    <>
      <div className={Style.UserWrapper}>
        {/* <button className={Style.UserFeedback}>Feedback</button> */}
        <button className={Style.ThemBtn} onClick={handleToggle}>
          <IconContext.Provider value={{ size: '25px', color: '#3E85F3' }}>
            {changeIcon && <BsMoonStars />}
            {!changeIcon && <BsSun />}
          </IconContext.Provider>
        </button>
        <p className={theme === true ? Style.UserName : Style.UserNameDark}>Nika</p>
        <div className={Style.UserPhoto}></div>
      </div>
    </>
  );
};
