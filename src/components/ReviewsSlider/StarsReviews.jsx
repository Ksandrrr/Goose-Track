import { IconContext } from 'react-icons';
import { RiStarSFill } from 'react-icons/ri';
import React from 'react';

export const StarsReviews = ({ stars }) => {

if (stars === 5) {
    return (
      <>
        <IconContext.Provider value={{ color: '#FFAC33', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
      </>
    );
  }

  if (stars === 4) {
    return (
      <>
        <IconContext.Provider value={{ color: '#FFAC33', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#CEC9C1', size: '20px' }}>
          <RiStarSFill />
        </IconContext.Provider>
      </>
    );
  }

  if (stars === 3) {
    return (
      <>
        <IconContext.Provider value={{ color: '#FFAC33', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#CEC9C1', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
      </>
    );
  }

   if (stars === 2) {
    return (
      <>
        <IconContext.Provider value={{ color: '#FFAC33', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#CEC9C1', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
      </>
    );
  }

   if (stars === 1) {
    return (
      <>
        <IconContext.Provider value={{ color: '#FFAC33', size: '20px' }}>
          <RiStarSFill />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#CEC9C1', size: '20px' }}>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </IconContext.Provider>
      </>
    );
  }
};
