// Import modules
import { useSelector } from 'react-redux';

// Import Redux selectors
import { selectProfile } from '../../utils/selectors'

// Import components
import Account from '../../components/Account';

// Import data
import accountMock from '../../data/accountMock';

// Import css module
import styles from './profile.module.css'

function Profile() {
    const profile = useSelector(selectProfile);
    const items = accountMock.map((item) =>
        <li key={item.id}>
            <Account title={item.title} amount={item.amount} description={item.description} ></Account>
        </li>)
    return (
        <>
            <main className={styles["bg-dark"]}>
                <div className={styles.header} >
                    <h1>Welcome back<br />{profile.firstName} {profile.lastName} !</h1>
                </div>
                <h2 className={styles.sronly}>Accounts</h2>
                {items}
            </main >
        </>
    )

}

export default Profile