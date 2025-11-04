// 🧩 Ejercicio 1 – Evaluar nivel de experiencia

// Instrucciones:
// Crea un tipo Developer con propiedades name, yearsOfExperience, language.
// Luego, crea una función evaluarNivel que devuelva:

// "Junior" si tiene menos de 2 años.

// "Mid" si tiene entre 2 y 5.

// "Senior" si tiene más de 5.

// Pista:
// 👉 Usa if...else if...else y asegúrate de tipar correctamente el parámetro y el valor de retorno.

type Developer = {
    name: string,
    yearsOfExperience: number,
    languaje: string
}

function valueLevel(developer: Developer): string {
    if(developer.yearsOfExperience <= 2) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Junior`
    } else if(developer.yearsOfExperience > 2 && developer.yearsOfExperience <= 5) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Mid`
    } else if(developer.yearsOfExperience > 5 ) {
        return `El desarrollador ${developer.name} con ${developer.yearsOfExperience} años de experiencia es Senior`
    } else {
       return "faltan datos"
    }
}

const developerOne: Developer = {
    name: "Manuel",
    yearsOfExperience: 2,
    languaje: "ESP"
}

const developerTwo: Developer = {
    name: "Pedro",
    yearsOfExperience: 3,
    languaje: "ESP"
}

const developerThree: Developer = {
    name: "Juan",
    yearsOfExperience: 6,
    languaje: "ESP"
}

console.log(valueLevel(developerOne))
console.log(valueLevel(developerTwo))
console.log(valueLevel(developerThree))