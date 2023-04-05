// Import modules
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

// Import Redux slices
import * as authActions from '../../features/auth/authSlice'
import * as profileActions from '../../features/profile/profileSlice'

// Import Redux selectors
import { selectAuth } from '../../utils/selectors'

// Import API call
import apiLogin from '../../utils/apiLogin';
import { apiProfile } from '../../utils/apiProfile';

// Import css module
import styles from './signin.module.css'

/**
 * Signin component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Signin() {
    // Create useDispath instance
    const dispatch = useDispatch();

    // Create useNavigate instance
    const navigate = useNavigate();

    // Local state to save form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("false");

    // Save token to local storage (todo : set expiration)
    function setLocalStorage(authToken) {
        //localStorage.setItem("token", token);
        let auth = { token: authToken, timestamp: new Date().getTime() }
        localStorage.setItem("auth", JSON.stringify(auth));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        async function getData() {
            let responseLogin = await apiLogin(email, password)
            if (responseLogin.data.status === 200) {
                dispatch(authActions.signin(responseLogin.data.body.token));
                let responseProfile = await apiProfile(responseLogin.data.body.token)
                dispatch(profileActions.update({ firstName: responseProfile.data.body.firstName, lastName: responseProfile.data.body.lastName }));
                if (remember) setLocalStorage(responseLogin.data.body.token);
                navigate("/profile");
            }
            else {
                setMessage(responseLogin.data.message);
                setError(true);
            }
        }
        getData()
    }

    return (
        <>
            <main className={styles["bg-dark"]}>
                <section className={styles["sign-in-content"]}>
                    <i className={`${styles["sign-in-icon"]} fa fa-user-circle`}></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles["input-wrapper"]} >
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className={styles["input-wrapper"]}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error ? <div className={styles.error}>{message}</div> : <div></div>}
                        <div className={styles["input-remember"]}>
                            <input
                                type="checkbox"
                                id="remember-me"
                                onChange={(e) => setRemember(!remember)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button type="submit" className={styles["sign-in-button"]}>Sign In</button>

                    </form>
                </section>
            </main>
        </>
    )

}

export default Signin