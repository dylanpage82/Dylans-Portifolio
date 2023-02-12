export default function SkillsCard(props){
    return(
        <div>
            <img src={props.img} alt={props.name}/>
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}