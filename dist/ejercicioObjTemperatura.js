// Instrucciones:
// Declara una función clasificarTemperatura(temp: number) que devuelva un mensaje según el rango:
// Menor de 0 → "Congelante"
// Entre 0 y 15 → "Fría"
// Entre 16 y 25 → "Templada"
// Mayor de 25 → "Calurosa"
// Pista:
// 👉 Define el tipo de retorno explícitamente como string y juega con operadores lógicos (&&, >=, <=).
function clasificarTemperatura(temp) {
    if (temp <= 0) {
        return `congelante`;
    }
    else if (temp > 0 && temp <= 15) {
        return `fria`;
    }
    else if (temp > 15 && temp <= 25) {
        return `Templada`;
    }
    else {
        return `Calurosa`;
    }
}
console.log(clasificarTemperatura(-0.2));
export {};
//# sourceMappingURL=ejercicioObjTemperatura.js.map