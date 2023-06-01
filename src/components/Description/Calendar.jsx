import Style from './Description.module.scss';

import CalendarPhone from "../../img/MainPage/imageCalendar-PHON.jpg"
import CalendarTabl from "../../img/MainPage/imageCalendar-TAB.jpg"
import CalendarDesk from "../../img/MainPage/imageCalendar-DESK.jpg"

export const Calendar = () => {

  return <>
    <div className={Style.CalendarWraper}>
    <ul className={Style.Calendar}>
        <li>
          <p className={Style.Number}>1.</p>
          <h2 className={Style.Title}>calendar</h2>
          <h3 className={Style.Wiew}>wiew</h3>
          <p className={Style.Description}>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <picture>
            <source media="(min-width: 1200px)" srcSet={CalendarDesk} />
            <source media="(min-width: 768px)" srcSet={CalendarTabl} />
            <img
              className={Style.CalendarIMG}
              src={CalendarPhone}
              alt="Calendar"
            />
          </picture>
        </li>
      </ul></div></>
}