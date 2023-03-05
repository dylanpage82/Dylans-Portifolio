import React from 'react'
import {MDBIcon} from 'mdb-react-ui-kit'
import styles from './Window.module.scss'
export default function Window({
    windows,
}){
    return(
        <>
        {
            windows ? (
              <div className={styles.window}>
                 <div className={styles.name}>
                    <h1>Dylan Page</h1>
                 </div>
                <div className={styles.contact}>
                  <a href='https://github.com/dylanpage82' target='_blank' className='me-4 text-reset'>
                    <MDBIcon fab icon = 'github' />
                    Github
                  </a> <br />
                  <a href='https://www.linkedin.com/in/dylan-page2/' target='_blank' className='me-4 text-reset'>
                    <MDBIcon fab icon ='linkedin'/>
                    Linkdin
                  </a> <br />
                  <a href='https://github.com/dylanpage82' target='_blank' className='me-4 text-reset'>
                    <MDBIcon fab icon = 'twitter' />
                    Twitter
                  </a><br />
                  <a href="mailto:dylanpage82@gmail.com" target='_blank' className='me-4 text-reset'>
                    <MDBIcon icon = 'envelope' />
                    E-mail
                  </a>
                </div>
                <div className={styles.login}>
                    <MDBIcon className='fa-2x' icon = 'power-off'/>
                </div>
              </div>
            
            ):''
          }
        </>  
    )
}