import styles from './hero.module.css'

/**
 * Hero component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Hero() {
    return (
        <>
            <main>
                <div className={styles.hero}>
                    <section className={styles["hero-content"]}>
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className={styles.subtitle}>No fees.</p>
                        <p className={styles.subtitle}>No minimum deposit.</p>
                        <p className={styles.subtitle}>High interest rates.</p>
                        <p className={styles.test}>Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Hero