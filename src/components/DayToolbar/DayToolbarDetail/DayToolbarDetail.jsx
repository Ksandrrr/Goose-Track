import Style from '../DayToolbar.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

export const DayToolbarDetail = ({ day, month }) => {

  const theme = useSelector(state => state.theme.value);

  function formatDayOfWeek(day) {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'SAT', 'SUN'];
  return daysOfWeek[day];
}

function getDaysInMonth(month, year) {
  return new Date(year, month , 0).getDate();
}

function getDateOfWeek(day, month) {
  const year = new Date().getFullYear();
  const daysInMonth = getDaysInMonth(month, year);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();

  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(date.getDate() - dayOfWeek + 1);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);
    if (nextDay.getMonth() + 1 === month && nextDay.getDate() <= daysInMonth) {
      weekDates.push(nextDay);
    } else if (nextDay.getMonth() + 1 === month + 1 && nextDay.getDate() <= daysInMonth + 7) {
      weekDates.push(nextDay);
    } else if (nextDay.getMonth() + 1 === month - 1 && nextDay.getDate() <= daysInMonth + 7) {
      weekDates.push(nextDay);
    }
  }

  const formattedDates = weekDates.map(date => {
    const dayOfWeek = formatDayOfWeek(date.getDay());
    const day = date.getDate();
    return { dayOfWeek, day };
  });

  return formattedDates;
}




  const weekDates = getDateOfWeek(day, month + 1);
  const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  return (
    <div
      className={theme ? Style.DayToolbarWrapper : Style.DayToolbarWrapperDark}
    >
      {isMediumScreen && (
        <>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>M</p>
            
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>T</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>W</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>t</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>F</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>S</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>S</p>
            <p className={Style.Number}>1</p>
          </div>
        </>
      )}
      {isLargeScreen && (
        <>  {weekDates.map(date => (
          <div key={date.day} className={Style.WrapperDetail}>
            <span className={!theme ? Style.DayDetail : Style.DayDetailDark}>{date.dayOfWeek}</span>
            <span  className={!theme ? Style.Number : Style.NumberDark}>{date.day}</span>
          </div>
        ))}
          {/* <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>MON</p>
            <p className={Style.Number}></p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>TUE</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>WED</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>THU</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>FRI</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>SAT</p>
            <p className={Style.Number}>1</p>
          </div>
          <div className={Style.WrapperDetail}>
            <p className={Style.DayDetail}>SUN</p>
            <p className={Style.Number}>1</p>
          </div> */}
        </>
      )}
    </div>
  );
};
