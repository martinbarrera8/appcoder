import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link className='nav-link' to="/">Inicio</Link>
            <Link className='nav-link' to="/productos/mayor">Por mayor</Link>
        </nav>
    )
}

export default Nav
