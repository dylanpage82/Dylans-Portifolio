export default function Projects(){


    return(
        <div className='projectContainer'>
            <div className="projectBox">
                <img src={require('../../assets/Skipdit.png')}></img>
                <h1>Skipdit</h1>
                <p>Brief description</p>
                <a href='https://github.com/mnevans93/skipdit.git'target='_blank'>Github</a>
                <a href='https://skipdit.herokuapp.com/s'target='_blank'>Live View</a>
        </div>
            <div className="projectBox">
                <img src={require('../../assets/Bookmarks.png')}></img>
                <h1>Bookmarks</h1>
                <p>Brief description</p>
                <a href='https://github.com/dylanpage82/Bookmarks.git' target='_blank'>Github</a>
                <a href='https://bookmarks.herokuapp.com/' target='_blank'>Live View</a>
            </div>
            <div className="projectBox">
                <img src={require('../../assets/Sunnyside.png')}></img>
                <h1>SunnySide Paradise</h1>
                <p>Brief description</p>
                <a href='https://github.com/dylanpage82/sunnyside_paradise.git' target="_blank">Github</a>
                <a href='https://sunnyside-paradise.herokuapp.com/' target="_blank">Live View</a>
            </div>
        </div>
        
    )
}