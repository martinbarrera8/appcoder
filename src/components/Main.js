import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carrito from './Carrito'
import ItemDetailConteiner from './ItemDetailConteiner'
import ItemListConteiner from './ItemListConteiner'



function Main(){
    return(
        <main id='main'>
            <Routes>
                <Route path='/' element={<ItemListConteiner/>}/>
                <Route path='/productos/:cat' element={<ItemListConteiner/>}/>
                <Route path='/item/:id' element={<ItemDetailConteiner/>}/>
                <Route path='/contacto' element={<p>Contacto</p>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </main>
    )
}

export default Main