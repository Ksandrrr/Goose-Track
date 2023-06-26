import { useSelector } from 'react-redux';
import Style from './TaskList.module.scss';

import { IconContext } from 'react-icons';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';

export const TaskList = ({ day, currentProgress }) => {
  const taskMonth = useSelector(state => state.tasks);
  const theme = useSelector(state => state.theme.value);
  console.log(taskMonth, currentProgress)
  const elements = taskMonth.filter(task => {
    return (
      task.date.day === day.day &&
      task.date.month === day.month &&
      currentProgress === task.progress
    );
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
    <div className={ theme ? Style.allTask : Style.allTaskDark}>
      {elements.map(({ title, timeStart, timeEnd, priority }) => {
        return (
          <div className={theme ? Style.TaskWrapper : Style.TaskWrapperDark}>
            <p className={Style.TitlTask}>{title}</p>
            <div className={Style.wrapperTime}>
                <p className={Style.TextTime}>Start: {timeStart}</p>
                <p className={Style.TextTime}>End: {timeEnd}</p>
            </div>
            <div className={Style.wrapperTaskDesc}>
              <div className={Style.IMGUserTask}></div>
              <p className={classPriority(priority)}>{priority}</p>
              <div className={Style.wrapperIcon}>
                <IconContext.Provider
                  value={{ size: '17px', color: theme ? 'black' : 'white' }}
                >
                  <TbArrowsExchange2 />
                  <CiEdit />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ size: '15px', color: theme ? 'black' : 'white' }}
                >
                  <BsTrash />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
