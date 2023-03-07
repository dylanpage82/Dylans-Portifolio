import { MDBIcon } from 'mdb-react-ui-kit'
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
      <div className={styles.contact}>
      <a href='https://github.com/dylanpage82' target='_blank' className='me-4 text-reset'>
       <MDBIcon fab icon = 'github' />
        Github
      </a> 
      <a href='https://www.linkedin.com/in/dylan-page2/' target='_blank' className='me-4 text-reset'>
       <MDBIcon fab icon ='linkedin'/>
       Linkdin
      </a> 
      <a href='https://github.com/dylanpage82' target='_blank' className='me-4 text-reset'>
       <MDBIcon fab icon = 'twitter' />
        Twitter
      </a>
      </div>
    </footer>
    </>
  )
}