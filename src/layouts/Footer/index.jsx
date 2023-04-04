// Import css module
import styles from './footer.module.css'

/**
 * Footer component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Footer() {

    return (
        <>
            <footer>
                <p className={styles["footer-text"]}>Copyright 2020 Argent Bank</p>
            </footer>
        </>
    )

}

export default Footer