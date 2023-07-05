import Style from '../DayToolbar.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const DayToolbarDetail = ({ day, month,setCurrentBtnMonth}) => {
  setCurrentBtnMonth(false)
  const [selectedDay, setSelectedDay] = useState(null);

if(!day && !month) {
   day = new Date().getDate()
   month = new Date().getMonth() + 1
}
  const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const theme = useSelector(state => state.theme.value);

 function formatDayOfWeek(day) {
  if (isMediumScreen) {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return daysOfWeek[day];
  } else {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return daysOfWeek[day];
  }
}


  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

function getDateOfWeek(day, month) {
  const year = new Date().getFullYear();
  const daysInMonth = getDaysInMonth(month, year);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();

  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(date.getDate() - dayOfWeek + 1);

  // Если день недели является воскресеньем, отобразить прошлую неделю
  if (dayOfWeek === 0) {
    monday.setDate(monday.getDate() - 7);
  }

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);
    if (
      nextDay.getMonth() + 1 === month &&
      nextDay.getDate() <= daysInMonth
    ) {
      weekDates.push(nextDay);
    } else if (
      nextDay.getMonth() + 1 === month + 1 &&
      nextDay.getDate() <= daysInMonth + 7
    ) {
      weekDates.push(nextDay);
    } else if (
      nextDay.getMonth() + 1 === month - 1 &&
      nextDay.getDate() <= daysInMonth + 7
    ) {
      weekDates.push(nextDay);
    }
  }

  const formattedDates = weekDates.map((date) => {
    const dayOfWeek = formatDayOfWeek(date.getDay());
    const day = date.getDate();

    return { dayOfWeek, day };
  });

  return formattedDates;
}
  const currentDate = new Date().getDate();
  const weekDates = getDateOfWeek(day, month + 1);

function handleDateClick(day) {
  setSelectedDay(day);
  }
  
  return (
    <div
      className={theme ? Style.DayToolbarWrapper : Style.DayToolbarWrapperDark}
    >
      {weekDates.map(date => (
        <div
          onClick={() => handleDateClick(date.day)}
          key={date.day}
          className={Style.WrapperDetail}
        >
          <span className={theme ? Style.DayDetail : Style.DayDetailDark}>
            {date.dayOfWeek}
          </span>
         {currentDate === date.day ? (
       <span
              className={theme ? Style.NumberCurrent : Style.NumberCurrentDark}
            >
              {date.day}
            </span>
    ) : (
      <span className={selectedDay === date.day ? (theme ? Style.NumberCurrent : Style.NumberCurrentDark) : (theme ? Style.Number : Style.NumberDark)}>
        {date.day}
      </span>
    )}
        </div>
      ))}
    </div>
  );
};
