import styles from './item.module.css'

/**
 * Feature component.
 *
 * @param {string} img - Feature img.
 * @param {int} alt - Feature img alt.
 * @param {string} h3 - Feature title.
 * @param {string} p - Feature paragraph.
 * @returns {JSX.Element} - Rendered component.
 */
function Feature({ img, alt, h3, p }) {
    return (
        <>
            <div className={styles["feature-item"]}>
                <img src={img} alt={alt} className={styles["feature-icon"]} />
                <h3 className={styles["feature-item-title"]} >{h3}</h3>
                <p>{p}</p>
            </div>
        </>
    )
}

export default Feature