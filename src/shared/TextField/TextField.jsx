import styles from '../TextField/text-field.module.scss'


const TextField = ({label, ...props}) => {
    return (
        <div className={styles.div}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} {...props} />
      </div>
    )
}

export default TextField;