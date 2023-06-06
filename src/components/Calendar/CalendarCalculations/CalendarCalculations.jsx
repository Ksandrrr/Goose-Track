let date = new Date();

export const getYear = () => {
  return date.getFullYear();
};

export const getToday = () => {
  return new Date();
};
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getDayOfWeek = () => {};
export const getMonth = () => {
  return date.getMonth();
};


