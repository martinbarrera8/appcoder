import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const productosCollection = collection(db, "productos")
        const refe = doc(productosCollection,id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setItem(res.data())
        })
        .catch(error=>{
            console.log(error)
        })
    },[id])

    return (
        <ItemDetail producto={{id,...item}}/>
    )
}


export default ItemDetailContainer



// import ItemDetail from "./ItemDetail"
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProducts } from "./utils";


// const ItemDetailConteiner = () => {

//     const [item, setItem] = useState({});
//     const { id } = useParams()

//     useEffect(() =>{
//         getProducts(id)
//         .then((respuesta) =>{
//             setItem(respuesta)
//         })
//         .catch((error) =>{
//             console.log(error)
//         })

//     },[id])


//     return(
//         <div>

//            { <ItemDetail item={item}/>}
//         </div>
//     )
// }

// export default ItemDetailConteiner