import styles from './features.module.css'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'

import Feature from '../Feature'

/**
 * Features component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Features() {
    return (
        <>
            <section className={styles.features}>
                <h2 className="sr-only">Features</h2>
                <Feature
                    img={chat}
                    alt="Chat Icon"
                    h3="You are our #1 priority"
                    p="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                >
                </Feature>
                <Feature
                    img={money}
                    alt="Money Icon"
                    h3="More savings means higher rates"
                    p="The more you save with us, the higher your interest rate will be!"
                >
                </Feature>
                <Feature
                    img={security}
                    alt="Security Icon"
                    h3="Security you can trust"
                    p="We use top of the line encryption to make sure your data and money is always safe."
                >
                </Feature>
            </section>
        </>
    )
}

export default Features