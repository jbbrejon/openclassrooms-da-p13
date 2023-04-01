// Import modules
import { NavLink } from 'react-router-dom'

// Import site logo
import logo from '../../assets/argentBankLogo.png'

// Import css module
import styles from './nav.module.css'


function Nav() {

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
                <div>
                    <NavLink className={styles["main-nav-item"]} to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </>
    )

}

export default Nav