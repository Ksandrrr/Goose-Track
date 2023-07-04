import Style from './ReviewsSlider.module.scss';
import {StarsReviews} from "./StarsReviews"

import { IconContext } from 'react-icons';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getReviews } from 'redux/reviews/reviews-selectors';
import { Navigation, Pagination, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUserSecret } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
export const Reviews = () => {
  const reviews = useSelector(getReviews);
  const screenWidth = window.screen.width
  
   const element = reviews.map(({ rating, comment, name, _id }) => (
   <SwiperSlide key={_id}>
            <div className={Style.wrapperText} >
              <div className={Style.wrapperUser}>
                <div className={Style.PhotoUser}><IconContext.Provider value={{ size: '26px', color: "#1e1e1e" }}><FaUserSecret/>  </IconContext.Provider></div>
                <div>
             <p className={Style.NameUser}>{name}</p>
                  <StarsReviews stars={Number(rating)} />
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                 {comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
  ));
  return (
    <section className={Style.Reviews}>
      <h3 className={Style.ReviewsTitle}>reviews</h3>

      <div className={Style.wrapperReviews}>
        <Swiper
          modules={[Navigation, Pagination, A11y,Autoplay]}
          spaceBetween={50}
          slidesPerView={screenWidth <= 900 ? 1 : 2}
          autoplay={{
          delay: 5000
          }}
          navigation={{
            prevEl: '#prev',
            nextEl: '#next',
          }}
        >
         {element}
        </Swiper>
      </div>

      <IconContext.Provider value={{ color: 'rgb(51, 51, 51)', size: '30px' }}>
        <div className={Style.Arrow}>
          <button id="prev">
            <BsArrowLeft />
          </button>
          <button id="next">
            <BsArrowRight />
          </button>
        </div>
      </IconContext.Provider>
    </section>
  );
};
