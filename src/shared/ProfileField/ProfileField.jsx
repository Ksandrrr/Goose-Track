import styles from '../ProfileField/profile-field.module.scss'


export const ProfileField = ({label, ...props}) => {
    return (
        <div className={styles.div}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} {...props} />
      </div>
    )
}

