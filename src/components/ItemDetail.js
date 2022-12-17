import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    const {agregarProducto} = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [confirmado, setConfirmado] = useState(false)
    
    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
        setCantidad(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(producto, cantidad)
    }

    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
                <div className="details__card__conteiner">
                    <div className="details__card__conteiner__img">
                        <img className="details__img" src={producto.image} alt={producto.title}/>
                    </div>
                    <div className="details__card__conteiner__count">
                        <p>{producto.description}</p>
                        <p>{producto.description}</p>
                        <ItemCount init={cantidad} handleOnAdd={handleOnAdd}/>
                        {confirmado && <button onClick={handleClick}>Agregar al carrito</button>}
                    </div>
                </div>
        </div>
    )
}
export default ItemDetail
