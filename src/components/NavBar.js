import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Nav(){
    return(
        <nav>
            <a className='nav-a' href='https://www.facebook.com/'>
                <FacebookIcon/>
            </a>
            <a className='nav-a' href='https://www.instagram.com/'>
                <InstagramIcon/>
            </a>
            <a className='nav-a' href='https://www.gmail.com/'>
                <EmailIcon/>
                </a>
        </nav>
    )
}

export default Nav
