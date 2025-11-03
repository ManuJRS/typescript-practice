function saludar(nombre, edad) {
    if (edad !== undefined) {
        return (`Hola, mi nombre es ${nombre} y tengo ${edad} anios`);
    }
    else {
        return (`Hola, mi nombre es ${nombre} y no tengo edad uno`);
    }
}
console.log(saludar("manu", 20));
export {};
//# sourceMappingURL=script.js.map