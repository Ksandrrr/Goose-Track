import "./loader.scss"

import { useSelector } from 'react-redux';
import { getTask } from '../../redux/task/task-selectors';
import { useEffect } from 'react';
export const LoaderTask = ({setTaskModal}) => {

    const theme = useSelector(state => state.theme.value);
    const { loading } = useSelector(getTask);

    useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setTaskModal(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
    }, [loading, setTaskModal]);
    
  return <div className={!theme ?  "wrapperLoader" : "wrapperLoaderDark"}>{loading ? <div className={!theme ? "spinner" : "spinnerDark"}></div> : <div className={!theme ? "check-animation" : "check-animationDark"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3E85F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 15 12 18 20 10" />
                </svg>
              </div>}</div>
}
