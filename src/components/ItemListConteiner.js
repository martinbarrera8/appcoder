import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProductsByCategory } from './utils'


function ItemListConteiner() {

    
    const [items, setItems] = useState([])
    const { cat } = useParams()

    const categoryId = null

    useEffect(() => {


        if(!cat){
            console.log("Pido todo")
        }else{
            console.log("Pido solo "+ cat)
        }

        getProductsByCategory(categoryId)
        .then((respuesta) => {
            setItems(respuesta)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [cat])


    return(

        <div>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListConteiner
