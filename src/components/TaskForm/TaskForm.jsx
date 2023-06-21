import Style from './TaskForm.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

export const TaskForm = ({ setTaskModal }) => {
  const modalRoot = document.getElementById('root');
  const theme = useSelector(state => state.theme.value);

  return createPortal(
    <div className={Style.wrapperTaskModal}>
      <div className={theme ? Style.TaskModal : Style.TaskModalDark}>
        <button
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
            className={theme ? Style.TitleInput : Style.TitleInputDark}
            placeholder="Enter Text"
          />
          <div className={Style.PositionTimeInput}>
            <div className={Style.wrapperTime}>
              <label className={theme ? Style.FormText : Style.FormTextDark}>
                Start
              </label>
              <input
                type="time"
                className={theme ? Style.TimeInput : Style.TimeInputDark}
              />
            </div>
            <div className={Style.wrapperTime}>
              <label className={theme ? Style.FormText : Style.FormTextDark}>
                End
              </label>
              <input
                type="time"
                className={theme ? Style.TimeInput : Style.TimeInputDark}
              />
            </div>
          </div>


           <div className={Style.WrapperCheckbox}>
      <label htmlFor="low" className={Style.CheckboxLabel}>
        <input
          type="radio"
          name="priority"
          id="low"
          className={Style.CheckboxLow}
        />
        <div className={Style.checkboxCustomLow}></div>
        <p className={theme? Style.CheckboxText : Style.CheckboxTextDark}>Low</p>
      </label>

      <label htmlFor="medium" className={Style.CheckboxLabel}>
        <input
          type="radio"
          name="priority"
          id="medium"
          className={Style.CheckboxMedium}
        />
        <div className={Style.checkboxCustomMedium}></div>
        <p className={theme? Style.CheckboxText : Style.CheckboxTextDark}>Medium</p>
      </label>

      <label htmlFor="high" className={Style.CheckboxLabel}>
        <input
          type="radio"
          name="priority"
          id="high"
          className={Style.CheckboxHigh}
        />
        <div className={Style.checkboxCustomHigh}></div>
        <p className={theme? Style.CheckboxText : Style.CheckboxTextDark}>High</p>
      </label>
    </div>
          <div className={Style.wrapperBtn}>
            <button type="submit" className={Style.btnAdd}><IconContext.Provider value={{ size: '18px' }}>
            <FiPlus />
          </IconContext.Provider>Add</button>
            <button className={theme? Style.btnCencel : Style.btnCencelDark} onClick={() => setTaskModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
