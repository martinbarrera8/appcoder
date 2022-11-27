import { createContext , useState } from "react"


export const contexto = createContext()

const { Provider } = contexto


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState(
        [
            {id: 1, nombre: "Remeras", precio: 100, cantidad: 2},
            {id: 4, nombre: "Pantalones", precio: 200, cantidad: 1},
        ]
    )

    const [total, setTotal] = useState(3)


    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }
    

    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        vaciarCarrito: vaciarCarrito
    }

    return(
          <Provider value={valorDelContexto}>
            {children}
            </Provider>

    )
}
export default CustomProvider