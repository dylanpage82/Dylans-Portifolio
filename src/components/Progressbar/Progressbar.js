import {useState, useEffect } from "react";
import styles from './Progressbar.module.scss'

export default function Progressbar({
    setIsRunning
}){
    const [filled, setFilled] = useState(0);
    
    useEffect(() => {
        if(filled < 100){
            setTimeout(() => setFilled(prev => prev +=2), 50)
        }else{
            setIsRunning(true)
        }
    }, [filled])
    return (
        <div>
            <div className={styles.progressbar}>
                <div style ={{
                    height:"100%",
                    width: `${filled}%`,
                    backgroundColor: "#a66cff",
                    transition:"width 0.5s"
                }}></div>
                <span className={styles.progressPercent}>{ filled}%</span>
            </div>
        </div>
    )
}