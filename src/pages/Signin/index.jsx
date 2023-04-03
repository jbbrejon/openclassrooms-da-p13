// Import modules
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Import Redux slices
import * as authActions from '../../features/auth/authSlice'
import * as profileActions from '../../features/profile/profileSlice'

// Import Redux selectors
import { selectAuth } from '../../utils/selectors'


// Import css module
import styles from './signin.module.css'


function Signin() {
    // Create useDispath instance
    const dispatch = useDispatch();

    // Create useNavigate instance
    const navigate = useNavigate();

    const auth = useSelector(selectAuth);

    // Local state to save form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // Save token to local storage (todo : set expiration)
    function setLocalStorage(token) {
        localStorage.setItem("token", token);
    }

    // Get firstName and lastName from API
    function getName(token) {
        axios.post('http://localhost:3001/api/v1/user/profile', "none", {
            headers: {
                'authorization': `Bearer ${token}`
            },
        })
            .then(function (response) {
                dispatch(profileActions.update({ firstName: response.data.body.firstName, lastName: response.data.body.lastName }));
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/v1/user/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                if (remember) {
                    setLocalStorage(response.data.body.token);
                    dispatch(authActions.signin(response.data.body.token));
                    getName(response.data.body.token);
                    navigate("/profile");
                }
                else {
                    dispatch(authActions.signin(response.data.body.token));
                    navigate("/profile");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

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