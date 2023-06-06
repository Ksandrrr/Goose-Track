import Style from './SideBar.module.scss';
import { Navigation } from '../../../components/Navigation/Navigation';
import { UserInfo } from '../../../components/UserInfo/UserInfo';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';
import './SideBar.scss';

export const SideBar = () => {
  const theme = useSelector(state => state.theme.value);

  const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 1199 });
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });

  const [openBurger, setOpenBurger] = useState('BurgerMenuClose');

  useEffect(() => {
    setOpenBurger('BurgerMenuOpen');
  }, [isLargeScreen]);

  return (
    <div className={theme === true ? Style.bckgrnd : Style.bckgrndDark}>
      <section className="container">
        {isMediumScreen && (
          <>
            <div className={Style.Header}>
              <IconContext.Provider
                value={{ size: '24px', className: 'burgerIcon' }}
              >
                <button
                  className={Style.btnOpen}
                  onClick={() => setOpenBurger('BurgerMenuOpen')}
                >
                  <RxHamburgerMenu />
                </button>
              </IconContext.Provider>
              <UserInfo />
            </div>

           <div className={openBurger} style={theme === false ? { backgroundColor: "#13151A" } : {}}>
              <IconContext.Provider value={{ size: '24px' }}>
                <button
                  className={Style.btnClose}
                  onClick={() => setOpenBurger('BurgerMenuClose')}
                >
                  <CgClose />
                </button>
              </IconContext.Provider>

              <Navigation />
            </div>
          </>
        )}

        {isLargeScreen && (
          <>
            <div className={Style.PositionSectionCalendar}>
              <div className={openBurger} style={theme === false ? { backgroundColor: "#13151A" } : {}}>
                <Navigation />
              </div>
              <div className={Style.Header}>
                <UserInfo />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
