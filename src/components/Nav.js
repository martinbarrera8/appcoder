import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link to="/inicio">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Nav
