import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { cat } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")

        if (cat) {
            const filtro = query(productosCollection, where("category", "==", cat))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        }

    }, [cat])

    return (
        <div>
            {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer




// import { collection, doc, getDocs } from 'firebase/firestore'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { db } from '../firebase'
// import ItemList from './ItemList'
// import { getProductsByCategory } from './utils'



// function ItemListConteiner() {

    
//     const [items, setItems] = useState([])
//     const { cat } = useParams()

//     const categoryId = null

//     useEffect(() => {

        



//         toast.info("Cargando productos")

//         getProductsByCategory(categoryId)
//         .then((respuesta) => {


//             const productosCollection = collection(db, 'productos')

//             const consulta = getDocs(productosCollection)
    
//             consulta
//             .then((resultado) => {
//                 const productos = resultado.docs.map(doc =>({...doc.data(), id:doc.id}))
//                 setItems(productos)
//             })
//             .catch((error)=>{
//                 console.log(error)
//             })


//             toast.dismiss()
//             toast.success("Productos cargados!",{autoClose: 1000})
//             setItems(respuesta)
//         })
//         .catch((error) => {
//             toast.error("Error al cargar los productos")
//         })
//     }, [cat])


//     return(

//         <div>
//             {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items}/>}
//         </div>
//     )
// }

// export default ItemListConteiner
