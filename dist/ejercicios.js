// type Persona = {
//     nombre: string,
//     edad: number,
//     pais: string
// }
function chekOrder(order) {
    if (order.payed === false) {
        return `El pedido ${order.id} de ${order.client} no ha sido pagado`;
    }
    else if (order.payed === true && order.delivered === false) {
        return `El pedido ${order.id} de ${order.client} esta pagado pero no entregado`;
    }
    else if (order.payed === true && order.delivered === true) {
        return `El pedido ${order.id} de ${order.client} no ha sido pagado y ha sido entregado`;
    }
    else {
        return `No hay información del pedido ${order.id}`;
    }
}
const orderOne = {
    id: 123,
    client: "pedro",
    total: 250,
    payed: true,
    delivered: false
};
const orderTwo = {
    id: 444,
    client: "juan",
    total: 250,
    payed: false,
    delivered: true
};
const orderThree = {
    id: 555,
    client: "pepe",
    total: 400,
    payed: true,
    delivered: true
};
console.log(chekOrder(orderOne));
console.log(chekOrder(orderTwo));
console.log(chekOrder(orderThree));
export {};
//# sourceMappingURL=ejercicios.js.map