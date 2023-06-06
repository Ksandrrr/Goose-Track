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
          <p className={Style.Day}>M</p>
          <p className={Style.Day}>T</p>
          <p className={Style.Day}>W</p>
          <p className={Style.Day}>T</p>
          <p className={Style.Day}>F</p>
          <p className={Style.Day}>S</p>
          <p className={Style.Day}>S</p>
        </>
      )}
      {isLargeScreen && (
        <>
          <p className={Style.Day}>MON</p>
          <p className={Style.Day}>TUE</p>
          <p className={Style.Day}>WED</p>
          <p className={Style.Day}>THU</p>
          <p className={Style.Day}>FRI</p>
          <p className={Style.Day}>SAT</p>
          <p className={Style.Day}>SUN</p>
        </>
      )}
    </div>
  );
};
