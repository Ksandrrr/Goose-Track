import Style from './ColumnHeadBar.module.scss';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import {TaskForm} from "../TaskForm/TaskForm"

import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { HiOutlinePlusCircle } from 'react-icons/hi';

import { useMediaQuery } from 'react-responsive';

import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';


export const ColumnHeadBar = () => {

  const [taskModal, setTaskModal] = useState(false)

  const theme = useSelector(state => state.theme.value);

    const isMediumScreen = useMediaQuery({ minWidth: 320, maxWidth: 767 });
    const phoneTablet = useMediaQuery({ maxWidth: 1299 });
    const isLargeScreen = useMediaQuery({minWidth: 1300})


  return (
    <section className={theme ? Style.ColumnHeadBar : Style.ColumnHeadBarDark}>
      {phoneTablet && <Swiper
        modules={[ Scrollbar ]}
        spaceBetween={36}
        slidesPerView={isMediumScreen ? 1 : 2}
        scrollbar={{ draggable: isLargeScreen ? false : true }}
       
      >
        <SwiperSlide>
          <div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                To do
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                In progress
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                Done
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              {' '}
              <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
          </div>
        </SwiperSlide>
          </Swiper>}
          
          {isLargeScreen &&  <><div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                To do
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
          </div>
          <div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                In progress
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
              </div>
              <div className={theme ? Style.wrapperTask : Style.wrapperTaskDark}>
            <div className={Style.wrappertitle}>
              <p className={theme ? Style.taskTitle : Style.taskTitleDark}>
                Done
              </p>
              <IconContext.Provider
                value={{ size: '30px', color: !theme ? 'white' : 'black' }}
              >
                <HiOutlinePlusCircle />
              </IconContext.Provider>
            </div>
            <button onClick={() => setTaskModal(true)} className={theme ? Style.taskBtn : Style.taskBtnDark}>
              {' '}
               <IconContext.Provider value={{ size: '20px' }}>
                <AiOutlinePlus />
              </IconContext.Provider>
              Add Task
            </button>
          </div>
              </>
      }
      {taskModal && <TaskForm setTaskModal={setTaskModal} />}
    </section>
  );
};
