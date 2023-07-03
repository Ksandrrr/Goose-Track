import { TbArrowsExchange2 } from 'react-icons/tb';
import Style from './PriorituList.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { edit } from '../../redux/task/task-operation.js';
import { useSelector, useDispatch } from 'react-redux';
import { getTask } from '../../redux/task/task-selectors';
// import { LoaderTask } from "../Loader/LoaderTask"
import { useEffect } from 'react';
import { useState } from 'react';
export const PriorityLisk = ({ progress, setChangePriority, id }) => {
  const dispatch = useDispatch();
    const { loading } = useSelector(getTask);
    const theme = useSelector(state => state.theme.value);
    const [secondRender, setSecondRender] = useState(false)
    
    useEffect(() => {
    if (!loading && secondRender) {
        setChangePriority(false);
        }
    }, [loading, setChangePriority,secondRender]);
  let progres;
  let progres2;
  if (progress === 'to-do') {
    progres = 'In-Progress';
    progres2 = 'Done';
  } else if (progress === 'in-progress') {
    progres = 'To-do';
    progres2 = 'Done';
  } else if (progress === 'done') {
    progres = 'To-do';
    progres2 = 'in-progress';
  }
    const hendlSubmitFirst = () => {
      setSecondRender(true)
    const task = {
      progress: progres.toLowerCase(),
    };
    dispatch(edit({ id, task }));

  };
    const hendlSubmitSecond = () => {
      setSecondRender(true)
    const task = {
      progress: progres2.toLowerCase(),
    };
    dispatch(edit({ id, task }));

  };
  return (
    <div className={theme ? Style.WrapperTextLight : Style.WrapperText}>
      {!loading ? <><button className={ theme ? Style.btnLight : Style.btn} onClick={() => setChangePriority(false)}>
        <IconContext.Provider value={{ size: '20px' }}>
          <MdOutlineClose />
        </IconContext.Provider>
      </button>
      <button className={theme ? Style.TextLight : Style.Text} onClick={hendlSubmitFirst}>
        <p>{progres}</p>{' '}
        <IconContext.Provider value={{ size: '20px' }}>
          <TbArrowsExchange2 />{' '}
        </IconContext.Provider>
      </button>
      <button className={theme ? Style.TextLight : Style.Text} onClick={hendlSubmitSecond}>
        <p>{progres2}</p>{' '}
        <IconContext.Provider value={{ size: '20px' }}>
          <TbArrowsExchange2 />{' '}
        </IconContext.Provider>
      </button></>: <div className={Style.loader}>Loading...</div>}
      
    </div>
  );
};
