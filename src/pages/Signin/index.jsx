// Import modules
import { useState } from 'react';

// Import css module
import styles from './signin.module.css'


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(` Email: ${email}, Password: ${password}`)
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
                            <input type="checkbox" id="remember-me" />
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