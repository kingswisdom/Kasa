/* ############## - Imports - ############# */

import React, { useState } from 'react';
import { ReactComponent as LeftArrow } from "./../images/LeftArrow.svg";
import { ReactComponent as RightArrow } from "./../images/RightArrow.svg";
import './../styles/Carrousel.css'


/* ############## - Component - ############# */

function Carrousel(props){
    const [current, setCurrent] = useState(0); 
    const length = props.pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); //Si la position (current) est sur 4 (length - 1 = 5 - 1), alors current = 0
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); //Si la position est sur 0, on souhaite aller a la position 4 (length - 1 = 4)
    };

    //Si pas d'image
    if (!length) {
        return <h1>No image</h1>;
    }
    else{
    //Si plusieurs images sont disponibles
        if(length > 1){
            return (
                <div className='carrousel'>
                    <LeftArrow className='carrousel__leftArrow' onClick={prevSlide}/>
                    <RightArrow className='carrousel__rightArrow' onClick={nextSlide}/>
                    {props.pictures.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <>
                                        <img src={slide} alt='lodging' className='carrousel__image' />
                                        <span className='carrousel__annotation'>{`${current + 1} / ${length}`}</span>
                                    </>
                                    
                                )}
                            </div>
                        )
                    })}
                </div>
            )
        }
    //Si une seule image est disponible
        else {
            return (
                <div className='carrousel'>
                    {props.pictures.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide} alt='lodging' className='carrousel__image' />
                                )}
                            </div>
                        )
                    })}
                </div>
            )
        }   
    }   
}


/* ############## - Exports - ############# */

export default Carrousel;