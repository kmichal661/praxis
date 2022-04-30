import {Link, NavLink} from 'react-router-dom'

function NotFound(){
    return( 
    <div className="pageNotFound">

        <h1>404</h1> <br/>
        <p>Sorry, we couldn't find this page. But don't worry, you can find <br/> plenty of other things on our <Link to="/">hompage</Link></p>

    </div>
    )
}

export default NotFound