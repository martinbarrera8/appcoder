import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ItemListConteiner from './components/ItemListConteiner'
import './estilos.css'
import './sass/main.scss'
import { BrowserRouter } from 'react-router-dom'


function App() {
    return(
        <BrowserRouter>
            <Header/>
            <ItemListConteiner/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App