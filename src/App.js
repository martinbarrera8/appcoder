import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './estilos.css'
import './sass/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CustomProvider from './components/CustomProvider'

import './firebase'


function App() {

  
    return(
        <CustomProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App