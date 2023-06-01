import Style from './Description.module.scss';

import AllPhone from "../../img/MainPage/imageAll-PHONE.jpg"
import AllTabl from "../../img/MainPage/imageAll-TAB.jpg"
import AllDesk from "../../img/MainPage/imageAll-DESK.jpg"


export const Allin = () => {

    return <>
        <div className={Style.AllWraper}>
    <ul className={Style.Calendar}>
        <li>
          <p className={Style.Number}>3.</p>
          <h2 className={Style.Title}>all in</h2>
          <h3 className={Style.Wiew}>one</h3>
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
            <source media="(min-width: 1200px)" srcSet={AllDesk} />
            <source media="(min-width: 768px)" srcSet={AllTabl} />
            <img
              className={Style.CalendarIMG}
              src={AllPhone}
              alt="Calendar"
            />
          </picture>
        </li>
            </ul>
        </div>
    </>
}