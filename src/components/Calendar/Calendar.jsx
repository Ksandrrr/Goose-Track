import { useState } from 'react';
import Style from "./Calendar.module.scss"
import { useSelector } from 'react-redux';
import {getDaysInMonth} from "./CalendarCalculations/CalendarCalculations"
import { DayToolbar } from "../DayToolbar/DayToolbar"
import {DayToolbarDetail} from "../DayToolbar/DayToolbarDetail/DayToolbarDetail"

export const CalendarComponent = () => {
  const [dayDetail, setDayDetail] = useState(false)
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  
  const theme = useSelector((state) => state.theme.value);
  
const [currentMonth, setCurrentMonth] = useState(new Date());

  // const getDaysInMonth = (year, month) => {
  //   return new Date(year, month + 1, 0).getDate();
  // };

  const generateCalendar = () => {


    const calendar = [];
    const year = currentMonth.getFullYear();
    const today = new Date();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

    const hendleClickDay = (i,month) => {
      setDayDetail(true)
      setDay(i)
      setMonth(month)
    }

    // Добавление пустых колонок перед началом месяца
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      calendar.push(<div className={theme ? `${Style.calendarColumn} ${Style.empty}` : `${Style.calendarColumn} ${Style.emptyDark}`} key={`empty-start-${i}`} />);
    }

    // Добавление колонок с числами месяца
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === i;
      const isDarkTheme = theme ? `${Style.calendarColumn}` : Style.calendarColumnDark
      const columnClassName = isToday ? `${isDarkTheme} ${Style.today}` : isDarkTheme;
      calendar.push(
        <div className={columnClassName} key={i} onClick={() => hendleClickDay(i,month)}>
          <p className={theme ? Style.calendarColumnText : Style.calendarColumnTextDark}>{i}</p>
        </div>
      );
    }

    // Добавление пустых колонок после окончания месяца
    for (let i = lastDayOfMonth - 2; i <= 6; i++) {
      calendar.push(<div className={theme ? `${Style.calendarColumn} ${Style.empty}` : `${Style.calendarColumn} ${Style.emptyDark}`} key={`empty-end-${i}`} />);
    }

    return calendar;
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (<>
    <div className={Style.calendar}>
      <div className={Style.calendarHeader}>
        <button onClick={previousMonth}>Previous Month</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>Next Month</button>
      </div>
      {!dayDetail ? <DayToolbar /> : <DayToolbarDetail day={day} month={month} />}
      <div className={Style.calendarColumns}>{generateCalendar()}</div>
      </div>
    </>
  );
};
