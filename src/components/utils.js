import Productos from "./Productos"

export const getProducts = () => {
   
    let productosIniciales = []

    for(let i = 0; i < 9; i++){
        productosIniciales.push(Productos())
    }



    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
        res(productosIniciales)
        },2000)
    })

    return simulacionPedido
}
