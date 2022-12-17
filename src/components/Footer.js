import React from 'react'
import Social from './Social'


function Footer(){
    return(
        <footer id='footer'>
            <Social/>
                <img src='/img/energyd.svg' className='footer__img' alt='Logo energy'/>
                <p>
                © 2022 - Todos los derechos reservados
                </p>
        </footer>
    )
}

export default Footer