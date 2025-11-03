// type Persona = {
//     nombre: string,
//     edad: number,
//     pais: string
// }

// const persona: Persona = {
//     nombre: "pedro",
//     edad: 60,
//     pais: "MEX"
// }


// if (persona.edad < 18) {
//     console.log(`${persona.nombre}: es menor de edad`)
// } else if (persona.edad >= 18 && persona.edad < 60){
//     console.log(`${persona.nombre} es adulto`)
// } else {
//     console.log(`${persona.nombre} es anciano`)
// }


// Si una bicicleta es electrica, gasolina o mecanica

// type Bicicleta = {
//     modelo: string,
//     motor?: boolean,
//     combustible?: string | undefined,
//     tamanhoRueda: number
// }

// const bicicleta: Bicicleta = {
//     modelo: "A2",
//     motor: true,
//     combustible: "gasolina",
//     tamanhoRueda: 12
// }

// if(bicicleta.motor === true && bicicleta.combustible === "electricidad") {
//     console.log(`El vehiculo ${bicicleta.modelo} es una bici electrica`)
// } else if (bicicleta.motor === true && bicicleta.combustible === "gasolina")  {
//     console.log(`El vehiculo ${bicicleta.modelo} es una bici de gasolina`) 
// } else {
//     console.log(`El vehiculo ${bicicleta.modelo}, es una bici mecanica`)
// }

// type Order = {
//     id: number,
//     client: string,
//     total: number,
//     pay: boolean,
//     delivered: boolean
// }

// const order: Order = {
//     id: 123,
//     client: "Pepe",
//     total: 200,
//     pay: true,
//     delivered: true
// }

// if(order.pay === false) {
//     console.log(`El pedido ${order.id} no ha sido pagado`)
// } else if(order.pay === true && order.delivered === false) {
//     console.log(`El pedido ${order.id} ha sido pagado pero no ha sido entregado`) 
// } else if(order.pay === true && order.delivered === true) {
//     console.log(`El pedido ${order.id} ha sido pagado y fue entregado`)
// } else {
//     console.log(`El pedido ${order.id} no tiene registro`)
// }


type Order = {
    id: number,
    client: string,
    total: number,
    payed: boolean,
    delivered: boolean
}

function chekOrder(order : Order) {
    if(order.payed === false) {
        return `El pedido ${order.id} de ${order.client} no ha sido pagado`
    } else if(order.payed === true && order.delivered === false) {
        return `El pedido ${order.id} de ${order.client} esta pagado pero no entregado`
    } else if(order.payed === true && order.delivered === true) {
        return `El pedido ${order.id} de ${order.client} no ha sido pagado y ha sido entregado`
    } else {
        return `No hay información del pedido ${order.id}`
    }
}

const orderOne:Order = {
    id: 123,
    client: "pedro",
    total: 250,
    payed: true,
    delivered: false
}

const orderTwo:Order = {
    id: 444,
    client: "juan",
    total: 250,
    payed: false,
    delivered: true
}

const orderThree:Order = {
    id: 555,
    client: "pepe",
    total: 400,
    payed: true,
    delivered: true
}

console.log(chekOrder(orderOne))
console.log(chekOrder(orderTwo))
console.log(chekOrder(orderThree))