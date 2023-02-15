import styles from './Navbar.module.scss'
export default function Navbar(){
    return(
        <div className={styles.container}>
            <div className={styles.nav}>
                <ul className={styles.links}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <a>Resume</a>
            </div>
        </div>
    )
}