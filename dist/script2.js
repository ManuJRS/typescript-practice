// 1. Tipos básicos
// let nombre: string = "Manuel"
// let edad: number = 20
// let estaActivo: boolean = true
// console.log(`Hola soy ${nombre}, tengo ${edad} y estoy activo = ${estaActivo}`)
// Arreglos
// let numeros: number[] = [1,2,3,4,5]
// let frutas: string[] = ["Manzana", "Platano", "Sandía"]
// console.log(numeros)
// console.log(frutas)
// Tuplas
// let persona: [string, number] = ["Ana", 25]
// console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}`)
// let user: {nombre: string, edad: number, activo: boolean} = {
//     nombre: "Carlos",
//     edad: 22,
//     activo: false
// }
// console.log(user)
// Objetos tipados
// type Producto = {
//     id: number
//     nombre: string
//     precio: number
// }
// Type alias
// let prodOne: Producto = {id: 1, nombre: "Mouse", precio: 350}
// let prodTwo: Producto = {id: 2, nombre: "Teclado", precio: 500}
// let prodThree: Producto = {id:3, nombre: "Pantalla", precio: 600}
// console.log(prodOne, prodTwo)
// console.log(`El precio total es de $${prodOne.precio + prodTwo.precio + prodThree.precio} MXN`)
// Enum
// enum EstadoPedido {
//     Pendiente,
//     Enviado,
//     Entregado
// }
// Union types
// let pedido: EstadoPedido = EstadoPedido.Enviado
// console.log(pedido)
// let identificador: string | number
// identificador = 42
// console.log(identificador)
// identificador = "ABCD123"
// console.log(identificador)
// Tipo explícito para funciones la inferencia para cosas que se entienden por el contexto
// funciones
function sumar(a, b) {
    return a + b;
}
console.log(sumar(20, 10));
const uniqueKey = Symbol(`description`);
const obj = {
    [uniqueKey]: "Hola mundo"
};
console.log(obj[uniqueKey]);
function greet(name) {
    return (`Hola ${name}`);
}
console.log(greet("Manuel"));
let userName = "holaaaa";
console.log(userName);
const names = [];
names.push("Dylan");
console.log(names);
names.push("Manuel");
console.log(names);
let ourTuple;
ourTuple = [5, false, "hola mundo"];
console.log(ourTuple);
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints[cardinalPoints["Nort"] = 1] = "Nort";
    cardinalPoints[cardinalPoints["East"] = 2] = "East";
    cardinalPoints[cardinalPoints["South"] = 3] = "South";
    cardinalPoints[cardinalPoints["West"] = 4] = "West";
})(cardinalPoints || (cardinalPoints = {}));
console.log(cardinalPoints.Nort);
var status;
(function (status) {
    status[status["NotFound"] = 404] = "NotFound";
    status[status["Succes"] = 200] = "Succes";
    status[status["Accepted"] = 202] = "Accepted";
    status[status["BadRequest"] = 400] = "BadRequest";
})(status || (status = {}));
console.log(status.BadRequest);
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(10, 10, 20));
function user(name, age) {
    if (age === undefined) {
        console.log(`Hola soy ${name} y no tengo edad`);
    }
    else {
        console.log(`Hola soy ${name} y tengo ${age} años`);
    }
}
user("manuel");
function userTwo(name, age) {
    console.log(age === undefined ? `Hola soy ${name} y no tengo edad` : `Hola soy ${name} y tengo ${age} años`);
}
userTwo("Manuel");
export {};
//# sourceMappingURL=script2.js.map