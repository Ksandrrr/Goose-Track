import logoMob from './NavigationPhoto/GOOSE-nav.png';
import logoTab from "./NavigationPhoto/GOOSE-TABLET.png"
import logoDesc from "./NavigationPhoto/GOOSE-DESC.png"

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Style from './Navigation.module.scss';
import { useDispatch } from 'react-redux';

import { RiAccountCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import { MdLogout } from 'react-icons/md';
import { logout } from '../../redux/auth/auth-operations';
export const Navigation = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.value);
  return (
    <>

        <div className={Style.logoWrapper}>
        <picture>
            <source media="(min-width: 1200px)" srcSet={logoDesc} />
            <source media="(min-width: 768px)" srcSet={logoTab} />
            <img
              className={Style.CalendarIMG}
              src={logoMob}
              alt="Calendar"
            />
          </picture>
          <h3 className={theme === true ? Style.LogoName :  Style.LogoNameDark}>GooseTrack</h3>
        </div>
          <nav className={Style.Navigation}>
            <p className={ theme === true ? Style.Panel : Style.PanelDark}>User Panel</p>
            <NavLink to="/account" className={theme === true ? Style.NavLink : Style.NavLinkDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <RiAccountCircleLine />
              </IconContext.Provider>
              My account 
            </NavLink>
            <NavLink to="/calendar" className={theme === true ? Style.NavLink : Style.NavLinkDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <RxCalendar />
              </IconContext.Provider>
              Calendar
            </NavLink>
          </nav>
          <button className={Style.LogOut} onClick={() => dispatch(logout())}>
            Log out
            <IconContext.Provider value={{ size: '16px' }}>
              <MdLogout />
            </IconContext.Provider>
          </button>
    </>
  );
};
