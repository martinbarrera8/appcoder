import React from 'react'
import CardWidget from './CartWidget'

function Header(){
    return(
        <header id='header'>
            <img src='/img/energylogo.svg' className='header-logo' alt='Logo energy'/>

                <ul className='header-ul'>
                    <li className='header-li'>
                        <a href='#'>Inicio</a>
                    </li>
                    <li className='header-li'>
                        <a href='#'>Productos</a>
                    </li>
                    <li className='header-li'>
                        <a href='#'>Contacto</a>
                    </li>
                </ul>

                <CardWidget/>

        </header>
    )
}

export default Header