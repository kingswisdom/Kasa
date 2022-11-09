/* ############## - Imports - ############# */

import './../styles/Rating.css'
import { ReactComponent as Star } from "./../images/star.svg";


/* ############## - Component - ############# */

function Rating(props) {
    const ratingScale = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            {ratingScale.map((n) => (
                <Star
                    fill={n <= props.ratings ? "#ff6060" : "#E3E3E3"}
                    key={`star-${n}`}
                    className="star"
                ></Star>
            ))}
        </div>
    );
}


/* ############## - Exports - ############# */

export default Rating;