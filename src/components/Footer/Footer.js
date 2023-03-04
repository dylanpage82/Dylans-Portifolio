import {useState} from 'react'
import styles from './Footer.module.scss'
export default function Footer (){
  const [windows, setWindows] = useState(false)

  return(
    <footer className={styles.footer}>
      <img src={require('../../assets/windows.png')}></img>
    </footer>
  )
}