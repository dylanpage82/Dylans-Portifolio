import styles from './LandingPage.module.scss'
export default function LandingPage(){
    return(
        <div className={styles.load}>
            <div className={styles.icon}>
                <p>Full Stack Developer</p>
                <img src={require('../../assets/homewindow.png')}></img>
            </div>
            
        </div>
    )
}