import Style from './Description.module.scss';

import SidebarPhone from '../../img/MainPage/imageSideBar-PHONE.jpg';
import SidebarTabl from '../../img/MainPage/imageSideBar-TAB.jpg';
import SidebarDesk from '../../img/MainPage/imageSideBar-DESK.jpg';

export const SideBar = () => {
  return (
    <>
    <div className={Style.SideBarWraper}>
      <ul className={Style.SideBar}>
        <li>
          <p className={Style.Number}>2.</p>
          <h3 className={Style.Wiew}>sidebar</h3>
          <p className={Style.Description}>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <picture>
            <source media="(min-width: 1200px)" srcSet={SidebarDesk} />
            <source media="(min-width: 768px)" srcSet={SidebarTabl} />
            <img
              className={Style.CalendarIMG}
              src={SidebarPhone}
              alt="Calendar"
            />
          </picture>
        </li>
        </ul>
        </div>
    </>
  );
};
