
import Productos from "./Productos";

const generatePromise = (operation, time = 2000) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(operation)
        }, time)
    })
}

export const getProducts = (itemId) => {
    return generatePromise(Productos.find(producto=> producto.id === itemId))
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((res) => {
        setTimeout(() => {
            if(categoryId)
            res(Productos.filter(producto=> producto.id === categoryId));
            else{
                res(Productos)
            }
        }, 2000);
    });
    }

