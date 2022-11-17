
import Productos from "./Productos"

const ItemDetail = () => {

    const producto = Productos()

    return(
        <div>
           <h2>{producto.title}</h2>
           <img src={producto.image} alt="Energizante"/>
           <p>Detalles</p>
           <p>Precio</p>
        </div>
    )
}
export default ItemDetail