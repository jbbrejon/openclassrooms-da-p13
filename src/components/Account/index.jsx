// Import css module
import styles from './account.module.css'

/**
 * Account component.
 *
 * @param {string} title - Account item title.
 * @param {int} amount - Account item amount.
 * @param {string} description - Account item description.
 * @returns {JSX.Element} - Rendered component.
 */
function Account({ title, amount, description }) {
    return (
        <>
            <section className={styles["account"]} >
                <div className={styles["account-content-wrapper"]} >
                    <h3 className={styles["account-title"]}>{title}</h3>
                    <p className={styles["account-amount"]} >{amount}</p>
                    <p className={styles["account-amount-description"]} >{description}</p>
                </div>
                <div className={styles["account-content-wrapper cta"]}>
                    <button className={styles["transaction-button"]}>View transactions</button>
                </div>
            </section>
        </>
    )
}

export default Account