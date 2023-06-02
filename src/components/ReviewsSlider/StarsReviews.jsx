import { IconContext } from 'react-icons';
import { RiStarSFill } from 'react-icons/ri';

export const StarsReviews = () => {

return <IconContext.Provider
                    value={{ color: '#FFAC33', size: '20px' }}
                  >
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </IconContext.Provider>
}