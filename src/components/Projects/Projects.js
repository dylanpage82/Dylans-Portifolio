import styles from './Projects.module.scss'
export default function Projects(){


    return(
        <div className={styles.projectContainer}>
            <div className={styles.projectBox}>
                <img src={require('../../assets/Skipdit.png')}></img>
                <h1>Skipdit</h1>
                <p className='descript'>;alksdfjklejanvnneam,sfnklsanelknvdmsanekfnkljeklajkldnfm,sa.nle;kfnaeklnfmd,asnel;afndm,a.sdnfae;aklenf</p>
                <a href='https://github.com/mnevans93/skipdit.git'target='_blank'>Github</a>
                <a href='https://skipdit.herokuapp.com/s'target='_blank'>Live View</a>
        </div>
            <div className={styles.projectBox}>
                <img src={require('../../assets/Bookmarks.png')}></img>
                <h1>Bookmarks</h1>
                <p className='descript'>Brief description</p>
                <a href='https://github.com/dylanpage82/Bookmarks.git' target='_blank'>Github</a>
                <a href='https://bookmarks.herokuapp.com/' target='_blank'>Live View</a>
            </div>
            <div className={styles.projectBox}>
                <img src={require('../../assets/Sunnyside.png')}></img>
                <h1>SunnySide Paradise</h1>
                <p className='descript'>Brief description</p>
                <a href='https://github.com/dylanpage82/sunnyside_paradise.git' target="_blank">Github</a>
                <a href='https://sunnyside-paradise.herokuapp.com/' target="_blank">Live View</a>
            </div>
        </div>
        
    )
}