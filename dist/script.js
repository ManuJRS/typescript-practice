function saludar(nombre, edad) {
    if (edad !== undefined) {
        return (`Hola, mi nombre es ${nombre} y tengo ${edad} anios`);
    }
    else {
        return (`Hola, mi nombre es ${nombre} y no tengo edad`);
    }
}
console.log(saludar("manuel"));
export {};
//# sourceMappingURL=script.js.map