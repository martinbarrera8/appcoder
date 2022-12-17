import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useRef, useState } from "react"
import { db } from "../firebase"
import { useCarrito } from "./CustomProvider"



const Carrito = () => {


    const valorDelContexto = useCarrito()
    console.log(valorDelContexto)

    const refName = useRef() //es otro hook de estado
    const refAge = useRef()
    const [id, setId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        //aca agarro los valores de los inputs y los mando a guardar junto con lo que tenga en el carrito en firebase

        const orden = {
            buyer: {
                name: "Horacio",
                phone: "123456789",
            },
            products: [],
            total : 100,
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection,orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }

    //console.log("render de nuevo")

    return (
        <div>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >guardar</button>
            </form>
        </div>
    )
}

export default Carrito
