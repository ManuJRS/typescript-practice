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
function sumar(a: number, b: number) :number {
     return a + b
}
console.log(sumar(20,10))

const uniqueKey: symbol = Symbol(`description`)
const obj = {
    [uniqueKey]: "Hola mundo"
}
console.log(obj[uniqueKey])

function greet(name: string): string {
    return(`Hola ${name}`)
}
console.log(greet("Manuel"))

let userName: string = "holaaaa"
console.log(userName)

const names: string[] = []
names.push("Dylan")
console.log(names)
names.push("Manuel")
console.log(names)

let ourTuple: readonly [number, boolean, string]
ourTuple = [5, false, "hola mundo"]
console.log(ourTuple)

const car: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

console.log(car)

enum cardinalPoints {
    Nort = 1,
    East,
    South,
    West
}

console.log(cardinalPoints.Nort)

enum status {
    NotFound = 404,
    Succes = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(status.BadRequest)

function getTime(): number {
    return new Date().getTime()
}
console.log(getTime())

function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0)
}

console.log(add(10,10,20))

function user(name: string, age?: number ) {
    if (age === undefined) {
        console.log(`Hola soy ${name} y no tengo edad`)
    } else {
        console.log(`Hola soy ${name} y tengo ${age} años`)
    }
}

user("manuel")

function userTwo(name: string, age?: number) {
    console.log(age === undefined ? `Hola soy ${name} y no tengo edad` : `Hola soy ${name} y tengo ${age} años`)
}

userTwo("Manuel")