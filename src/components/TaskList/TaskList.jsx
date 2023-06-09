import Style from './TaskList.module.scss';
import { IconContext } from 'react-icons';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';
import { getTask } from '../../redux/task/task-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { delTask } from "../../redux/task/task-operation"
import { TaskForm } from "../TaskForm/TaskForm"
import { useState } from 'react';
import {PriorityLisk} from "../PriorityList/PriorityList"

import { getUser } from '../../redux/auth/auth-selectors';
export const TaskList = ({ date, currentProgress }) => {
  const dispatch = useDispatch();
  const [openTaskId, setOpenTaskId] = useState(null);
  const [changePriority, setChangePriority] = useState(null);
  const { items } = useSelector(getTask);
  const theme = useSelector(state => state.theme.value);
const User = useSelector(getUser);
  const currentDate = new Date();
  const day = currentDate.getDate(); 
  const month = (currentDate.getMonth() + 1); 
  const year = currentDate.getFullYear();
  if (!date.day) {
    date = {
      day: day,
      month: month,
      year: year,
    }
  }
  const elements = items.filter(({ day, progress }) => {
    return Number(day) === date.day && progress === currentProgress;
  });
  const classPriority = priority => {
    if (priority === 'Low') {
      return 'lowStyleText';
    } else if (priority === 'Medium') {
      return 'mediumStyleText';
    } else if (priority === 'High') {
      return 'highStyleText';
    }
  };
  return (
    <div className={theme ? Style.allTask : Style.allTaskDark}>
      {elements.map(({ title, timeStart, timeEnd, priority, _id, progress, day, month, year}) => {
      const isOpen = openTaskId === _id;
      const isOpenPrior = changePriority === _id;
        return (
          <div key={_id} className={theme ? Style.TaskWrapper : Style.TaskWrapperDark}>
            <p className={Style.TitlTask}>{title}</p>
            <div className={Style.wrapperTime}>
              <p className={Style.TextTime}>Start: {timeStart}</p>
              <p className={Style.TextTime}>End: {timeEnd}</p>
            </div>
            <div className={Style.wrapperTaskDesc}>
              <div className={Style.IMGUserTask}>
                {User.avatarURL && <img className={Style.UserPhoto} src={User.avatarURL} alt="UserPhoto"/>}
              </div>
              <p className={classPriority(priority)}>{priority}</p>
              <div className={Style.wrapperIcon}>
                <IconContext.Provider
                  value={{ size: '17px', color: theme ? 'black' : 'white' }}
                >
                  <button className={Style.btn} onClick={() => setChangePriority(_id)}>
                    <TbArrowsExchange2 />
                    </button>
                  <button className={Style.btn} onClick={() => {setOpenTaskId(_id)}}>
                    <CiEdit />
                  </button>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ size: '15px', color: theme ? 'black' : 'white' }}
                >
                  <button className={Style.btn} onClick={() =>  dispatch(delTask(_id))}>
                    <BsTrash />
                  </button>
                 
                </IconContext.Provider>
              </div>
            </div>
            {isOpen && <TaskForm setTaskModal={setOpenTaskId} id={_id} progress={progress} day={day} titleText={title} Priority={priority} TimeStart={timeStart} TimeEnd={timeEnd} month={month} year={year} editTask={true} />}
            {isOpenPrior && <PriorityLisk progress={progress} setChangePriority={setChangePriority} id={_id}/>}
          </div>
          
        );
      })}
    </div>
  );
};
