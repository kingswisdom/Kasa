/* ############## - Imports - ############# */

import './../styles/Banner.css';


/* ############## - Component - ############# */

function Banner(props){
    if (props.origin === "homepage") {
        return (
            <div className="banner">
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </div>
        );
    } else if (props.origin === "about") {
        return <div className="banner__about"></div>;
    }
}

/* ############## - Exports - ############# */

export default Banner