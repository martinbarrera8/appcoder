import { useContext } from "react";
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(item)
    }

    const valorDelContexto = useContext(contexto)
    console.log(valorDelContexto)

    const agregarAlCarrito = () => {
        valorDelContexto.vaciarCarrito()
    }

    return (
        <div className="details__conteiner">
            <div>
            <img className="details__img" src={item.image} alt='Energizante'/>
            </div>

            <div>
                <h2>{item.title}</h2>
                <p>Detalles</p>
                <p>Precio</p>
                <ItemCount handleOnAdd={handleOnAdd}/>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;