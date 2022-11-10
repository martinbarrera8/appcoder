import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link className='nav-link' to="/">Inicio</Link>
            <Link className='nav-link' to="/productos">Productos</Link>
            <Link className='nav-link' to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Nav
