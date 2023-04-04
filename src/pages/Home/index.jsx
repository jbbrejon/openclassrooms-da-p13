// Import components
import Hero from '../../components/Hero'
import Features from '../../components/Features'

// Import css module
import styles from './home.module.css'

/**
 * Home component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Home() {

    return (
        <>
            <main>
                <Hero></Hero>
                <Features></Features>
            </main>
        </>
    )

}

export default Home