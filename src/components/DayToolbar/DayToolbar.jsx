import Style from './DayToolbar.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

export const DayToolbar = ({ element }) => {
  const theme = useSelector(state => state.theme.value);

  const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  return (
    <div
      className={theme ? Style.DayToolbarWrapper : Style.DayToolbarWrapperDark}
    >
      {isMediumScreen && (
        <>
          <p className={theme ? Style.Day : Style.DayDark}>M</p>
          <p className={theme ? Style.Day : Style.DayDark}>T</p>
          <p className={theme ? Style.Day : Style.DayDark}>W</p>
          <p className={theme ? Style.Day : Style.DayDark}>T</p>
          <p className={theme ? Style.Day : Style.DayDark}>F</p>
          <p className={theme ? Style.Day : Style.DayDark}>S</p>
          <p className={theme ? Style.Day : Style.DayDark}>S</p>
        </>
      )}
      {isLargeScreen && (
        <>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>MON</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>TUE</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>WED</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>THU</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>FRI</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>SAT</p>
          <p className={theme ? Style.DayLargeScr : Style.DayLargeScrDark}>SUN</p>
        </>
      )}
    </div>
  );
};
