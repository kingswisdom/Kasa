/* ############## - Imports - ############# */

import './../styles/Footer.css'
import Logo from './../images/LOGO-white.svg';


/* ############## - Component - ############# */

function Footer() {
    return (
    <div className='kasa-footer'>
        <a href="/"><img className='logo' src={Logo} alt=""></img></a>
        <h3>© 2020 Kasa. All rights reserved</h3>
    </div>
    )
}


/* ############## - Exports - ############# */

export default Footer