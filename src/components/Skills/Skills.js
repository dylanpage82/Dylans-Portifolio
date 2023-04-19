import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import styles from './Skills.module.scss'

export default function Skills(){
    return(
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.one}>
                <span className="fab fa-bootstrap"><p className={styles.boot}>Bootstrap</p></span>
                <span className="fab fa-html5"><p>HTML5</p></span>
            </div>
            <div className={styles.two}>
                <span className="fab fa-node"><p>Nodejs</p></span>
                <span className="fab fa-react"><p>React</p></span>
            </div>
            <div className={styles.three}>
                <span className="fab fa-js"><p>JS</p></span>
                <span className="fab fa-github"><p>Github</p></span>
            </div>
            <div className={styles.four}>
                <span className="fas fa-database"><p>MDB</p></span>
                <span className="fab fa-css3-alt"><p>CSS3</p></span>
            </div>
            
            
            
            
            
            
            
            
        </div>
    )
}
