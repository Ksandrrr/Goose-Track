import {getYear} from "./CalendarCalculations"
import { getDaysInMonth } from "./CalendarCalculations"

const  formatDayOfWeek = (day) => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'SAT', 'SUN'];
  return daysOfWeek[day];
}

export const DateOfWeek = (day, month) => {
  const daysInMonth = getDaysInMonth(month, getYear());
  const date = new Date(getYear(), month - 1, day);
  const dayOfWeek = date.getDay();

  const monday = new Date(date);
  monday.setDate(date.getDate() - dayOfWeek);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);
    if (nextDay.getMonth() + 1 === month && nextDay.getDate() <= daysInMonth) {
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

  const formattedDates = weekDates.map(date => {
    const dayOfWeek = formatDayOfWeek(date.getDay());
    const day = date.getDate();
    return { dayOfWeek, day };
  });

  return formattedDates;
};