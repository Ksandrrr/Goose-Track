import styles from '../ProfileField/profile-field.module.scss'
import { useSelector } from 'react-redux';

export const ProfileField = ({label, ...props}) => {
    const theme = useSelector(state => state.theme.value);
    return (
        <div className={styles.div}>
        <label className={theme ? styles.label : styles.labelDark}>{label}</label>
        <input className={theme ? styles.input : styles.inputDark} {...props} />
      </div>
    )
}

