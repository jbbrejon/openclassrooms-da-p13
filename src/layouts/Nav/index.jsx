// Import modules
import { NavLink, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

// Import Redux selectors
import { selectAuth, selectProfile } from '../../utils/selectors'

// Import Redux slices
import * as authActions from '../../features/auth/authSlice'
import * as profileActions from '../../features/profile/profileSlice'

// Import API call
import { apiProfile } from '../../utils/apiProfile';

// Import assets
import logo from '../../assets/argentBankLogo.png'

// Import css module
import styles from './nav.module.css'


/**
 * Nav component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Nav() {

    // Create useDispath instance
    const dispatch = useDispatch();

    // Get auth state
    const auth = useSelector(selectAuth);

    // Get profile state
    const profile = useSelector(selectProfile);

    // Get localstorage key
    let localAuth = window.localStorage.getItem("auth");
    localAuth = (JSON.parse(localAuth));

    // Get profile info if token in localStorage
    async function checkStorage() {
        if (localAuth) {
            // Set current timestamp
            let currentTimestamp = new Date().getTime()
            // Convert timestamp to Date objects
            let localDate = new Date(localAuth.timestamp);
            let currentDate = new Date(currentTimestamp);
            // Calculate the difference between the two dates (in milliseconds)
            const timeDifference = Math.abs(currentDate - localDate);
            const isTokenExpired = timeDifference >= 24 * 60 * 60 * 1000;
            if (!isTokenExpired) {
                let responseProfile = await apiProfile(localAuth.token)
                dispatch(profileActions.update({ firstName: responseProfile.data.body.firstName, lastName: responseProfile.data.body.lastName }));
                dispatch(authActions.signin(localAuth.token));
            }
            else {
                // Remove local storage
                window.localStorage.removeItem('auth');
            }
        }
    }
    checkStorage()

    // Sign out actions
    const handleClick = () => {
        // Remove local storage
        window.localStorage.removeItem('auth');
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

                <div className={styles.navlinks}> {auth.signed ?
                    <>
                        <NavLink className={styles["main-nav-item"]} to="/profile" >
                            <i className="fa fa-user-circle"></i>
                            <div className={styles.firstname}>{profile.firstName}</div>
                        </NavLink>
                        <NavLink className={styles["main-nav-item"]} onClick={handleClick} to="/">
                            <i className="fa fa-sign-out" ></i>
                            Sign Out </NavLink>
                    </>
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