/* ############## - Imports - ############# */

import { Link } from "react-router-dom";
import './../styles/Thumb.css'


/* ############## - Component - ############# */

function Thumb(props) {
    return (
    <Link className="lodgingCard" to={"/lodging/" + props.id}>
        <div className="lodgingCard__overlay"></div>
        <img className="lodgingCard__img" src={props.cover} alt=""></img>
        <h2 className="lodgingCard__title">{props.title}</h2>
    </Link>
    )
}


/* ############## - Exports - ############# */

export default Thumb