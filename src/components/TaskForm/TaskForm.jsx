import Style from './TaskForm.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { createPortal } from 'react-dom';
import {addTask,edit} from "../../redux/task/task-operation.js"

import {LoaderTask} from "../Loader/LoaderTask"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
export const TaskForm = ({ setTaskModal,id, progress, day,titleText,Priority,TimeStart,TimeEnd, month, year, editTask }) => {

  const dispatch = useDispatch();

  const modalRoot = document.getElementById('root');
  const theme = useSelector(state => state.theme.value);
  const [send, setSend] = useState(false);
  const [title, setTitle] = useState(titleText ? titleText : null);
  const [timeStart, setTimeStart] = useState(TimeStart);
  const [timeEnd, setTimeEnd] = useState(TimeEnd);
  const [priority, setPriority] = useState(Priority ? Priority : null);
  const [required, setRequired] = useState({
    title: true,
    timeStart: true,
    timeEnd: true,
    priority: true,
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (!priority) {
      setRequired(prevState => ({ ...prevState, priority: false }));
    } else {
      setRequired(prevState => ({ ...prevState, priority: true }));
    }

    if (!timeEnd) {
      setRequired(prevState => ({ ...prevState, timeEnd: false }));
    } else {
      setRequired(prevState => ({ ...prevState, timeEnd: true }));
    }

    if (!timeStart) {
      setRequired(prevState => ({ ...prevState, timeStart: false }));
    } else {
      setRequired(prevState => ({ ...prevState, timeStart: true }));
    }

    if (!title) {
      setRequired(prevState => ({ ...prevState, title: false }));
    } else {
      setRequired(prevState => ({ ...prevState, title: true }));
    }

    if (!title || !timeStart || !timeEnd || !priority ) {
    return;
  }
  
  const task = {
  title: title,
  timeStart: timeStart,
  timeEnd: timeEnd,
  priority: priority,
  progress: progress,
  day: day.toString(),
  month: month.toString(),
  year: year.toString()
};
    if (!editTask) {
      dispatch(addTask(task));
    }else {
    dispatch(edit({id,task}));
    }
  // setTaskModal(false);
  setSend(true)
  };

  
  return createPortal(
  <div className={Style.wrapperTaskModal}>
      <div className={theme ? Style.TaskModal : Style.TaskModalDark}>
          {!send  ?<> <button
          onClick={() => setTaskModal(false)}
          className={theme ? Style.CloseModal : Style.CloseModalDark}
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
       <form className={Style.Form}>
          <label className={theme ? Style.FormText : Style.FormTextDark}>
            Title
          </label>
          <input
            type="text"
            className={
              theme   
                ? required.title
                  ? Style.TitleInput
                  : Style.TitleInputError
                : required.title
                ? Style.TitleInputDark
                : Style.TitleInputDarkError
            }
            placeholder="Enter Text"
            value={title ? title : ""}
            onChange={e => setTitle(e.target.value)}
          />
          <div className={Style.PositionTimeInput}>
            <div className={Style.wrapperTime}>
              <label className={theme ? Style.FormText : Style.FormTextDark}>
                Start
              </label>
              <input
                type="time"
                className={
                  theme
                    ? required.timeStart
                      ? Style.TimeInput
                      : Style.TimeInputError
                    : required.timeStart
                    ? Style.TimeInputDark
                    : Style.TimeInputDarkError
                }
                onChange={e => setTimeStart(e.target.value)}
                defaultValue={TimeStart}
              />
            </div>
            <div className={Style.wrapperTime}>
              <label className={theme ? Style.FormText : Style.FormTextDark}>
                End
              </label>
              <input
                type="time"
                className={
                  theme
                    ? required.timeEnd
                      ? Style.TimeInput
                      : Style.TimeInputError
                    : required.timeEnd
                    ? Style.TimeInputDark
                    : Style.TimeInputDarkError
                }
                onChange={e => setTimeEnd(e.target.value)}
                defaultValue={TimeEnd}
              />
            </div>
          </div>
          {!required.priority && (
            <p className={Style.Notification}>Select priority</p>
          )}
          <div className={Style.WrapperCheckbox}>
            <label htmlFor="low" className={Style.CheckboxLabel}>
              <input
                type="radio"
                name="priority"
                id="low"
                className={Style.CheckboxLow}
                onChange={() => setPriority('Low')}
                required
                checked={priority === "Low"}
              />
              <div className={Style.checkboxCustomLow}></div>
              <p
                className={theme ? Style.CheckboxText : Style.CheckboxTextDark}
              >
                Low
              </p>
            </label>

            <label htmlFor="medium" className={Style.CheckboxLabel}>
              <input
                type="radio"
                name="priority"
                id="medium"
                className={Style.CheckboxMedium}
                onChange={() => setPriority('Medium')}
                required
                checked={priority === "Medium"}
              />
              <div className={Style.checkboxCustomMedium}></div>
              <p
                className={theme ? Style.CheckboxText : Style.CheckboxTextDark}
              >
                Medium
              </p>
            </label>

            <label htmlFor="high" className={Style.CheckboxLabel}>
              <input
                type="radio"
                name="priority"
                id="high"
                className={Style.CheckboxHigh}
                onChange={() => setPriority('High')}
                required
                checked={priority === "High"}
              />
              <div className={Style.checkboxCustomHigh}></div>
              <p
                className={theme ? Style.CheckboxText : Style.CheckboxTextDark}
              >
                High
              </p>
            </label>
          </div>
          <div className={Style.wrapperBtn}>
            <button
              onClick={handleSubmit}
              type="submit"
              className={Style.btnAdd}
            >
              <IconContext.Provider value={{ size: '18px' }}>
                  {!editTask ? <FiPlus /> : <CiEdit />}
                </IconContext.Provider>
                {!editTask ? "Add" : "Edit"}
              
            </button>
            <button
              className={theme ? Style.btnCencel : Style.btnCencelDark}
              onClick={() => setTaskModal(false)}
            >
              Cancel
            </button>
          </div>
          </form></> : <LoaderTask setTaskModal={setTaskModal} />} 
      </div>
    </div>,
    modalRoot
  );
};
