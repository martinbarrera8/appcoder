import React from "react";
import { NavLink } from "react-router-dom";

function Social () {
    return(
        <article>
            <NavLink className='nav-a' href='https://www.facebook.com/'></NavLink>

            <NavLink className='nav-a' href='https://www.instagram.com/'></NavLink>

            <NavLink className='nav-a' href='https://www.twitter.com/'></NavLink>
        </article>
    )
}

export default Social 