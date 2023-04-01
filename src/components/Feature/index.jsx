import styles from './item.module.css'

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