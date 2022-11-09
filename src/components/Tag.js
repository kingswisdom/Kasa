/* ############## - Imports - ############# */

import './../styles/Tag.css';


/* ############## - Component - ############# */

function Tag(props){
    return (
        <ul className='tags'>
            {props.tags.map((tag, index) => {
                return <li className='tag' key={index}>{tag}</li>;
            })}
        </ul>
    )
}


/* ############## - Exports - ############# */

export default Tag;