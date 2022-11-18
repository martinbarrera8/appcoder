
import Productos from "./Productos";

export const getProducts = (itemId) => {
    return Promise((res) => {
        setTimeout(() => {
            res(Productos.find(producto=> producto.id === itemId));
        }, 2000);
    });
    }

// import Productos from "./Productos";

// export const getProducts = () => {
//     let simulacionPedido = new Promise((res) => {
//         setTimeout(() => {
//             res(Productos);
//         }, 2000);
//     });

//     return simulacionPedido;
// };



// import  Productos  from "./Productos"

// export const getProducts = () => {
   
//     let productosIniciales = []

   // for(let i = 0; i < 9; i++){
    //     console.log(Productos())
    //     productosIniciales.push(Productos())
   // }

//     productosIniciales.push(Productos)



//     let simulacionPedido = new Promise((res)=>{
//         setTimeout(()=>{
//         res(productosIniciales)
//         },2000)
//     })

//     return simulacionPedido
// }
