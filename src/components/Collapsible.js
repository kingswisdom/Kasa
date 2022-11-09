
/* ############## - Imports - ############# */

import './../styles/Collapsible.css';
import { useState } from 'react'
import arrow from "./../images/downArrow.svg"


/* ############## - Component - ############# */

function Collapsible(props){
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);    
    };

    const collapsibleContent = () => {
        if(typeof props.content === "string"){
            return props.content
        }
        else {
            return (
                <ul>
                    {props.content.map((item) => (
                        <li className='collaspsible__list' key={item}>{item}</li>
                    ))}
                </ul>
            )
        }
    }

    return (
        <div className='collapsible'>
            <button className='collapsible__button' onClick={toggle}>
                {props.title}
                <img src={arrow} alt="arrow down" className={open ? "collapsible__arrow rotate" : "collapsible__arrow" }></img>
            </button>   
            
            {open && (
                <div className="collapsible__toggle">
                    <div>{collapsibleContent()}</div>
                </div>
            )}
        </div>
    )
}


/* ############## - Exports - ############# */

export default Collapsible