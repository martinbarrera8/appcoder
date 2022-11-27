import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemList from './ItemList'
import { getProductsByCategory } from './utils'



function ItemListConteiner() {

    
    const [items, setItems] = useState([])
    const { cat } = useParams()

    const categoryId = null

    useEffect(() => {

        toast.info("Cargando productos")

        getProductsByCategory(categoryId)
        .then((respuesta) => {
            toast.dismiss()
            toast.success("Productos cargados!",{autoClose: 1000})
            setItems(respuesta)
        })
        .catch((error) => {
            toast.error("Error al cargar los productos")
        })
    }, [cat])


    return(

        <div>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListConteiner
