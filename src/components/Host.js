/* ############## - Imports - ############# */

import "./../styles/Host.css";


/* ############## - Component - ############# */

function Host(props){
    return(
        <div className="host">
            <p className="host__name">{props.host.name}</p>
            <img className="host__img" src={props.host.picture} alt=""></img>
        </div>
    )    
}


/* ############## - Exports - ############# */

export default Host;