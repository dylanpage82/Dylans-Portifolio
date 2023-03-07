import styles from './LandingPage.module.scss'
import Progressbar from '../../components/Progressbar/Progressbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function LandingPage(){
    const [isRunning, setIsRunning] = useState(false)
    return(
        <>
        <div className={styles.load}>
            <div className={styles.icon}>
                <img src={require('../../assets/homewindow.png')}></img>
                <p>Full Stack Developer</p>
            </div>
            <div className={styles.name}>
                <h1>Dylan Page</h1>
                {
                isRunning ? (
                    
                    <Link to = '/home'>next</Link>
                
                    ):''
        }

            </div>
            <Progressbar setIsRunning={setIsRunning}/>
        </div>
        
        </>
    )
}