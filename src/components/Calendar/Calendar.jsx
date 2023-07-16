import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Style from './Calendar.module.scss';
import { getDaysInMonth } from './CalendarCalculations/CalendarCalculations';
import { DayToolbar } from '../DayToolbar/DayToolbar';
import { DayToolbarDetail } from '../DayToolbar/DayToolbarDetail/DayToolbarDetail';
import { NavLink } from 'react-router-dom';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { getTask } from '../../redux/task/task-selectors';
import {Loader} from "../Loader/Loader"
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { taskMonth } from '../../redux/task/task-operation';

export const CalendarComponent = () => {
  const dispatch = useDispatch();

  const { items,loading } = useSelector(getTask);
  const [dayDetail, setDayDetail] = useState(false);
  const [day, setDay] = useState();
  const [Month, setMonth] = useState();
  const [Year, setYear] = useState();
  const [currentBtnMonth, setCurrentBtnMonth] = useState(true);
  const theme = useSelector(state => state.theme.value);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  useEffect(() => {
    dispatch(
      taskMonth({
        month: (currentMonth.getMonth() + 1).toString(),
        year: currentMonth.getFullYear().toString(),
      })
    );
  }, [dispatch, currentMonth]);

  const generateCalendar = () => {
    const calendar = [];
    const today = new Date();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

    const hendleClickDay = (i, month) => {
      setDayDetail(prevState => !prevState);
      setDay(i);
      setMonth(month);
      setYear(year);
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
          {items.find(({ day }) => Number(day) === i) && (
            <div
              className={
                items.find(({ day }) => Number(day) === i)?.priority || ''
              }
            >
              {items.find(({ day }) => Number(day) === i).title}
            </div>
          )}
          {items.filter(({ day }) => Number(day) === i).length > 1 && (
            <div className={Style.TaskNumber}>
              See all +{items.filter(({ day }) => Number(day) === i).length - 1}
            </div>
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
          <p className={Style.CurrentMonthTextDark}>
            {currentMonth.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>

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
            <button
              className={
                theme
                  ? currentBtnMonth
                    ? Style.btnChangeMonthCurrentLight
                    : Style.btnChangeMonth
                  : currentBtnMonth
                  ? Style.btnChangeMonthCurrent
                  : Style.btnChangeMonthDark
              }
              onClick={() => {
                setDayDetail(false);
                setDay(null);
                setMonth(null);
                setCurrentBtnMonth(true);
              }}
            >
              Month
            </button>
            <button
              className={
                theme
                  ? !currentBtnMonth
                    ? Style.btnChangeDayCurrentLight
                    : Style.btnChangeDay
                  : !currentBtnMonth
                  ? Style.btnChangeDayCurrent
                  : Style.btnChangeDayDark
              }
              onClick={() => {
                setDayDetail(true);
                setCurrentBtnMonth(false);
              }}
            >
              Day
            </button>
          </div>
        </div>

        {!dayDetail ? (<>
          <DayToolbar />
          <NavLink to="/calendar/task">
            <div className={Style.calendarColumns}>{generateCalendar()}</div>
          </NavLink></>
        ) : (<>
          <DayToolbarDetail
        day={day}
        month={Month}
        setCurrentBtnMonth={setCurrentBtnMonth}
        setDayDetail={setDayDetail} 
            />
            <ColumnHeadBar day={day} month={Month + 1} year={Year} />
            </>
        )}
        {loading && <Loader/>}
      </div>
    </>
  );
};
