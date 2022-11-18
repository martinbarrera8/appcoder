import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./utils";


const ItemDetailConteiner = () => {

    const [item, setItem] = useState({});
    const { id } = useParams()

    useEffect(() =>{
        getProducts(id)
        .then((respuesta) =>{
            setItem(respuesta)
        })
        .catch((error) =>{
            console.log(error)
        })

    },[id])


    return(
        <div>

           { <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailConteiner