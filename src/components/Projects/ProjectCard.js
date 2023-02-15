import styles from './ProjectCard.modules.scss'
export default function ProjectCard(props){
    return(
        <div className={styles.container}>
            <image src={props.image} alt={props.name}></image>
            <div className={styles.box}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>{props.github}</button>
                <button>{props.live}</button>
            </div>          
        </div>
    )
}