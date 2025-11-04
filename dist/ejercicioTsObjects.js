// 🧩 Ejercicio 1 – Evaluar nivel de experiencia
function valueLevel(developer) {
    if (developer.yearsOfExperience <= 2) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Junior`;
    }
    else if (developer.yearsOfExperience > 2 && developer.yearsOfExperience <= 5) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Mid`;
    }
    else if (developer.yearsOfExperience > 5) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Senior`;
    }
    else {
        return "faltan datos";
    }
}
const developerOne = {
    name: "Manuel",
    yearsOfExperience: 2,
    languaje: "ESP"
};
const developerTwo = {
    name: "Pedro",
    yearsOfExperience: 3,
    languaje: "ESP"
};
const developerThree = {
    name: "Juan",
    yearsOfExperience: 6,
    languaje: "ESP"
};
console.log(valueLevel(developerOne));
console.log(valueLevel(developerTwo));
console.log(valueLevel(developerThree));
export {};
//# sourceMappingURL=ejercicioTsObjects.js.map