import styles from './AccountPage.module.scss'
import ProfileForm from 'components/ProfileForm/ProfileForm'


export const AccountPage = () => {

    return <div className={styles.wrapper}>
        <p className={styles.name}>Nadiia Doe</p>
        <p className={styles.user}>User</p>
        <ProfileForm />
       
    </div>
}