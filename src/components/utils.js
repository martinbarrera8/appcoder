
export const getProducts = () => {
   
    let productosIniciales = [
        {id: '1' ,image: "/img/monsternegro.png" ,title: 'MONSTER ENERGY',price: '550.00'},
        {id: '2' ,image: "/img/speed.png" ,title: 'SPEED UNLIMITED',price: '350.00'},
        {id: '3' ,image: "/img/redbull.png" ,title: 'RED BULL ENERGY',price: '430.00'},
        {id: '4' ,image: "/img/monsterultra.png" ,title: 'MONSTER ENERGY ULTRA',price: '570.00'},
        {id: '5' ,image: "/img/monstermangoloco.png" ,title: 'MONSTER ENERGY MANGO LOCO',price: '600.00'},
        {id: '6' ,image: "/img/redbullceleste.png" ,title: 'RED BULL SUGARFREE',price: '450.00'},
        {id: '7' ,image: "/img/monstersunrise.png" ,title: 'MONSTER ENERGY SUNRISE',price: '580.00'},
        {id: '8' ,image: "/img/redbulltropical.png" ,title: 'RED BULL TROPICAL',price: '530.00'},
    ]
    for(let i = 0; i < 9; i++){
        productosIniciales.push()
    }


    let simulacionPedido = new Promise((res)=>{
        setTimeout(()=>{
        res(productosIniciales)
        },2000)
    })

    return simulacionPedido
}
