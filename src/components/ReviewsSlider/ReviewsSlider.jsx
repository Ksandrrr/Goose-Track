import Style from './ReviewsSlider.module.scss';
import {StarsReviews} from "./StarsReviews"

import { IconContext } from 'react-icons';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';


import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export const Reviews = () => {
    const screenWidth = window.screen.width
  return (
    <section className={Style.Reviews}>
      <h3 className={Style.ReviewsTitle}>reviews</h3>

      <div className={Style.wrapperReviews}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={screenWidth <= 900 ? 1 : 2}
          autoplay={true}
          navigation={{
            prevEl: '#prev',
            nextEl: '#next',
          }}
        >
          <SwiperSlide>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews/>
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews/>
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.wrapperText}>
              <div className={Style.wrapperUser}>
                <p className={Style.PhotoUser}></p>
                <div>
                  <p className={Style.NameUser}>Olena Doe </p>
                  <StarsReviews/>
                </div>
              </div>
              <div>
                <p className={Style.Subscript}>
                  GooseTrack is impressive, the calendar view and filter options
                  make it easy to stay organized and focused. Highly
                  recommended.
                </p>
              </div>
            </div>
          </SwiperSlide>
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
