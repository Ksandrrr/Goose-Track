import { SideBar } from "./SideBar/SideBar"
import Style from "./MainLayout.module.scss"
import { useSelector } from 'react-redux';

import { CalendarComponent } from "../../components/Calendar/Calendar"

// import {DayToolbar} from "../../components/DayToolbar/DayToolbar"
export const MainLayout = (children) => {
    const theme = useSelector(state => state.theme.value);
    
    return <>
        <div className={Style.Wrapper}>
        <SideBar />
            <section className={theme === true ? Style.wrapperBGAuthPage : Style.wrapperBGAuthPageDark}>
                <div className="container">
                <CalendarComponent/>
                
                </div>
        </section>
        </div>
    </>
}