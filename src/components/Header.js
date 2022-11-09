/* ############## - Imports - ############# */

import './../styles/Header.css';
import Logo from './../images/LOGO.svg';
import { NavLink } from "react-router-dom";


/* ############## - Component - ############# */

function Header() {
    return (
    <div className='kasa-header'>
        <nav className='navbar'>
            <NavLink to={'/'}><img className='logo' src={Logo} alt=""></img></NavLink>
            <ul>
                <li><NavLink to={'/'}>Accueil</NavLink></li>
                <li><NavLink to={'/about'}>A propos</NavLink></li>
            </ul>
        </nav>
    </div>
    )
}


/* ############## - Exports - ############# */

export default Header