import Style from './MainLayout.module.scss';
import { useSelector } from 'react-redux';
import {SideBar} from "../SideBar/SideBar"
import { CalendarComponent } from '../../components/Calendar/Calendar';
 const MainLayout = () => {
  const theme = useSelector(state => state.theme.value);
  return (
    <>
      <SideBar/>
      <div className={Style.Wrapper}>
        <section
          className={
            theme === true
              ? Style.wrapperBGAuthPage
              : Style.wrapperBGAuthPageDark
          }
        >
          <div className="container">
            <CalendarComponent />
          </div>
        </section>
      </div>
    </>
  );
};
export default MainLayout