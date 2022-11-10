import React from 'react'
import { Link } from 'react-router-dom'

function CardWidget() {
return(
    <Link to="/Carrito">
        <div className='cardwidget'>
        <img src='/img/carrito.svg' className='header-carrito' alt='Carrito de compra'/>
        </div>
    </Link>
)
}

export default CardWidget