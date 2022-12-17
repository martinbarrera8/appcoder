import { createContext, useContext, useState } from "react"
export const contexto = createContext() 
const { Provider } = contexto 


export const useCarrito = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const agregarProducto = (producto, cantidad) => {

        if(isInCart.inCart) {

        } else {
            console.log('Producto nuevo en el carrito!')
            setCarrito([
                ...carrito,
                {...producto, cantidad}
            ])
            setTotal(total + producto.price * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }

    const isInCart = (id) => {
        return {inCart: false, item:{}, index: 0}
    }

    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal: cantidadTotal,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider



// import { createContext , useState } from "react"


// export const contexto = createContext()

// const { Provider } = contexto


// const CustomProvider = ({children}) => {

//     const [carrito, setCarrito] = useState(
//         [
//             {id: 1, nombre: "Remeras", precio: 100, cantidad: 2},
//             {id: 4, nombre: "Pantalones", precio: 200, cantidad: 1},
//         ]
//     )

//     const [total, setTotal] = useState(3)

//     const vaciarCarrito = () => {
//         setCarrito([])
//         setTotal(0)
//     }

//     const valorDelContexto = {
//         productos: carrito,
//         cantidad: total,
//         vaciarCarrito: vaciarCarrito
//     }

//     return(
//           <Provider value={valorDelContexto}>
//             {children}
//             </Provider>

//     )
// }

// export default CustomProvider