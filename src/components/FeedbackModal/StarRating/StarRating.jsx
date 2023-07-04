
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

 export const StarRating = ({star,setStar}) => {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (index) => {
    setStar(index);
  };

   return (
          <div>
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <IconContext.Provider value={{ size: '28px' }}>
                  <RiStarSFill
                    key={index}
                    onMouseEnter={() => handleMouseEnter(starValue)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(starValue)}
                    color={(hover || star) >= starValue ? 'rgba(255, 172, 51, 1)' : 'rgba(206, 201, 193, 1)'}

                  />
                </IconContext.Provider>
              );
            })}
          </div>
  );
};

