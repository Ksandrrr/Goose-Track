import { useState } from 'react';
import { useSelector } from 'react-redux';

import Style from './Calendar.module.scss';
import { getDaysInMonth } from './CalendarCalculations/CalendarCalculations';
import { DayToolbar } from '../DayToolbar/DayToolbar';
import { DayToolbarDetail } from '../DayToolbar/DayToolbarDetail/DayToolbarDetail';
import { NavLink } from 'react-router-dom';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

export const CalendarComponent = () => {
  const [dayDetail, setDayDetail] = useState(false);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const theme = useSelector(state => state.theme.value);
  const taskMonth = useSelector(state => state.tasks);
 


  const [currentMonth, setCurrentMonth] = useState(new Date());

  const generateCalendar = () => {
    const calendar = [];
    const year = currentMonth.getFullYear();
    const today = new Date();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

    const hendleClickDay = (i, month) => {
      
      setDayDetail(prevState => !prevState);
      setDay(i);
      setMonth(month);
    };

    // Добавление пустых колонок перед началом месяца
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      calendar.push(
        <div
          className={
            theme
              ? `${Style.calendarColumn} ${Style.empty}`
              : `${Style.calendarColumn} ${Style.emptyDark}`
          }
          key={`empty-start-${i}`}
        />
      );
    }

    // Добавление колонок с числами месяца
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === i;
      
      const isDarkTheme = theme
        ? `${Style.calendarColumn}`
        : Style.calendarColumnDark;
      const columnClassName = isToday
        ? `${isDarkTheme} ${Style.today}`
        : isDarkTheme;
      
      calendar.push(
        <div
          className={columnClassName}
          key={i}
          onClick={() => hendleClickDay(i, month)}
        >
          <p
            className={
              theme ? Style.calendarColumnText : Style.calendarColumnTextDark
            }
          >
            {i}
          </p>
        {taskMonth.find(({ date }) => date.day === i && date.month === month) && (
        <div  className={taskMonth.find(value => value.date.day === i)?.priority || ""}>{ taskMonth.find(({ date }) => date.day === i ).title}</div>
          )}
  {taskMonth.filter(({ date }) => date.day === i).length > 1 && (
      <div className={Style.TaskNumber}>See all +{taskMonth.filter(({ date }) => date.day === i).length - 1}</div>
    )}
        </div>
      );
    }

    // Добавление пустых колонок после окончания месяца
    for (let i = lastDayOfMonth - 2; i <= 6; i++) {
      calendar.push(
        <div
          className={
            theme
              ? `${Style.calendarColumn} ${Style.empty}`
              : `${Style.calendarColumn} ${Style.emptyDark}`
          }
          key={`empty-end-${i}`}
        />
      );
    }

    return calendar;
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  return (
    <>
      <div className={Style.calendar}>
        <div className={Style.calendarHeader}>
          <h2>
            {currentMonth.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          
          <div className={theme ? Style.BtnWrapper : Style.BtnWrapperDark}>
            <button
              className={theme ? Style.Prevebtn : Style.PrevbtnDark}
              onClick={previousMonth}
            >
              <IconContext.Provider value={{ size: '16px' }}>
                <IoIosArrowBack />
              </IconContext.Provider>
            </button>
            <button
              className={theme ? Style.Nextbtn : Style.NextbtnDark}
              onClick={nextMonth}
            >
              <IconContext.Provider value={{ size: '16px' }}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </button>
          </div>
          <div className={Style.btnChangeWrapper}>
            <button  className={theme ? Style.btnChangeMonth : Style.btnChangeMonthDark} onClick={() => setDayDetail(prevState => !prevState)}>Month</button>
            <button className={theme ? Style.btnChangeDay : Style.btnChangeDayDark} onClick={() => setDayDetail(prevState => !prevState)}>Day</button>
          </div>
        </div>
        {!dayDetail ? (
          <DayToolbar />
        ) : (
          <DayToolbarDetail day={day} month={month} />
        )}
        {!dayDetail ? (
          <NavLink to="/calendar/task">
            <div className={Style.calendarColumns}>{generateCalendar()}</div>
          </NavLink>
        ) : (
            <ColumnHeadBar day={day} month={month} />
        )}
      </div>
    </>
  );
};
