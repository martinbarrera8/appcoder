import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './estilos.css'
import './sass/main.scss'
import ItemListConteiner from './components/ItemListConteiner'

function App() {
    return(
        <>
        <Header/>
        <ItemListConteiner
        nombre="Tutor de CoderHouse"/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App