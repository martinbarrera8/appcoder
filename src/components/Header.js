import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CartWidget'
import Nav from './Nav'


function Header(){
    return(
        <header id='header'>
    
                <Link to="/"><img src='/img/energylogo.svg' className='header-logo' alt='Logo energy'/>
                </Link>
                <Nav/>
                <CardWidget/>

        </header>
    )
}

export default Header