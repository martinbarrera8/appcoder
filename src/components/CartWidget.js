import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CustomProvider'

function CardWidget() {

    const valorDelContexto = useContext(contexto)

return(
    <Link to="/Carrito">
        <div className='cardwidget'>
        <img src='/img/carrito.svg' className='header-carrito' alt='Carrito de compra'/>
        <span className='cantidadDelCarrito'>{valorDelContexto.cantidadTotal}</span>
        </div>
    </Link>
)
}

export default CardWidget