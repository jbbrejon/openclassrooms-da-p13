// Import modules
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

// Import Redux selectors
import { selectAuth, selectProfile } from '../../utils/selectors'

// Import Redux slices
import * as authActions from '../../features/auth/authSlice'
import * as profileActions from '../../features/profile/profileSlice'

// Import site logo
import logo from '../../assets/argentBankLogo.png'

// Import css module
import styles from './nav.module.css'


function Nav() {
    // Create useDispath instance
    const dispatch = useDispatch();

    // Get auth state
    const auth = useSelector(selectAuth);
    // Get profile state
    const profile = useSelector(selectProfile);

    // Sign out actions
    const handleClick = () => {
        // Remove token from local storage
        window.localStorage.removeItem('token');
        // Reset auth state
        dispatch(authActions.signout());
        dispatch(profileActions.reset());
    }

    return (
        <>
            <nav className={styles["main-nav"]}>
                <NavLink className={styles["main-nav-logo"]} to="/">
                    <img
                        className={styles["main-nav-logo-image"]}
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div> {auth.signed ?
                    <NavLink className={styles["main-nav-item"]} onClick={handleClick} to="/" >
                        <i className="fa fa-user-circle"></i>
                        <div className={styles.firstname}>{profile.firstName}</div>
                        <i className="fa fa-sign-out" ></i>
                        Sign Out
                    </NavLink>
                    :
                    <NavLink className={styles["main-nav-item"]} to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                }
                </div>

            </nav>
        </>
    )

}

export default Nav