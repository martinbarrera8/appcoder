import React from 'react'
import CardWidget from './CartWidget'
import Nav from './Nav'


function Header(){
    return(
        <header id='header'>
                <img src='/img/energylogo.svg' className='header-logo' alt='Logo energy'/>

                <Nav/>
                <CardWidget/>

        </header>
    )
}

export default Header