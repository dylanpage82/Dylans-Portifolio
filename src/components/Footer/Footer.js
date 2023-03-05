
import styles from './Footer.module.scss'
export default function Footer({
  windows,
  setWindows
}){
  

  const handleClick = (evt) => {
    setWindows(!windows)
  }
  return(
    <>
    
    <footer className={styles.footer}>
      <button className={styles.button} onClick = {handleClick}>
        <img  src={require('../../assets/icon.png')}></img>
        start
      </button>
    </footer>
    </>
  )
}