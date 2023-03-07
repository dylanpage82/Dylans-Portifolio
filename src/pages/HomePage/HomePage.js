import Window from "../../components/Window/Window"
import Footer from "../../components/Footer/Footer"
import styles from "./HomePage.module.scss"
import {useState, useEffect} from "react"
import sound from '../../assets/Startup.wav'
import Cert from "../../components/Cert/Cert"

export default function HomePage(){
    const [windows, setWindows] = useState(false)
    const [showCert, setShowCert] = useState(true)
    function play(){
        new Audio(sound).play()
    }
    useEffect(() =>{
        play()
    },[])
    return(
        <div className={styles.home}>
        <Cert setShowCert={setShowCert} showCert={showCert}/>
        <Window windows={windows} />
        <Footer windows={windows} setWindows={setWindows} />
        </div>
    )
}