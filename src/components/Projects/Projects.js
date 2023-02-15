import styles from './Projects.modules.scss'
export default function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <image src='' alt='image'></image>
                <h1>Skipdit</h1>
                <p>Brief description</p>
                <button>github</button>
                <button>live</button>
            </div>
            <div className={styles.box}>
                <image src='' alt='image'></image>
                <h1>Bookmarks</h1>
                <p>Brief description</p>
                <button>github</button>
                <button>live</button>
            </div>
            <div className={styles.box}>
                <image src='' alt='image'></image>
                <h1>SunnySide Paradise</h1>
                <p>Brief description</p>
                <button>github</button>
                <button>live</button>
            </div>
        </div>
        
    )
}