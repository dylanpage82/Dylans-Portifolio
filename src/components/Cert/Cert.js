import styles from './Cert.module.scss'
import { MDBBtn } from 'mdb-react-ui-kit'
export default function Cert({setShowCert, showCert}){
    const handleClick = () =>{
        setShowCert(false)
    }
    return(
        <>
        {
            showCert ? (
                <div className={styles.container}>
            <div className={styles.top}>
            <h1>Certificate</h1>
            <MDBBtn className='fas fa-window-close fa-2x' onClick={handleClick} role='button'>
            </MDBBtn>
            </div>
            <div className={styles.image}>
                <img src={require('../../assets/Certificate.png')} />
            </div>
             </div>
            ): ''

        
        }
        
        </>
    )
}