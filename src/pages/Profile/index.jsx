// Import modules
import { useSelector } from 'react-redux';

// Import Redux selectors
import { selectProfile } from '../../utils/selectors'

// Import css module
import styles from './profile.module.css'


function Profile() {
    const profile = useSelector(selectProfile);
    return (
        <>
            <main className={styles["bg-dark"]}>
                <div className={styles.header} >
                    <h1>Welcome back<br />{profile.firstName} {profile.lastName} !</h1>
                </div>

            </main >
        </>
    )

}

export default Profile