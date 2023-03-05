import Window from "../../components/Window/Window"
import Footer from "../../components/Footer/Footer"
import styles from "./HomePage.module.scss"

export default function HomePage({
    windows,
    setWindows
}){
    return(
        <div className={styles.home}>
        <Window windows={windows} />
        <Footer windows={windows} setWindows={setWindows} />
        </div>
    )
}