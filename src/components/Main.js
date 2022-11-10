import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carrito from './Carrito'
import ItemListConteiner from './ItemListConteiner'



function Main(){
    return(
        <main id='main'>
            <Routes>
                <Route path='/' element={<p>Home</p>}/>
                <Route path='/productos' element={<ItemListConteiner/>}/>
                <Route path='/contacto' element={<p>Contacto</p>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route/>
            </Routes>
        </main>
    )
}

export default Main