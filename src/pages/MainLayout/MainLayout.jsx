
import Style from "./MainLayout.module.scss"
import { useSelector } from 'react-redux';

import { CalendarComponent } from "../../components/Calendar/Calendar"

export const MainLayout = () => {
    const theme = useSelector(state => state.theme.value);
    return <>
        <div className={Style.Wrapper}>
            <section className={theme === true ? Style.wrapperBGAuthPage : Style.wrapperBGAuthPageDark}>
                <div className="container">
                <CalendarComponent/></div>
        </section>
        </div>
    </>
}