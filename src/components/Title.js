/* ############## - Imports - ############# */

import './../styles/Title.css';


/* ############## - Component - ############# */

function Title(props){
    return(
        <>
            <h1 className="title">{props.title}</h1>
            <h4 className="location">{props.location}</h4>
        </>
    )
}


/* ############## - Exports - ############# */

export default Title;