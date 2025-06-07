/*

    Métodos de Arrays:

        - Los métodos de arrays son funciones ya preparadas que nos permiten manipular los arrays fácilmente: agregar, quitar, ordenar, buscar, etc.

*/

// ---> Definimos un Arrays

/*
    -Iconos --> Nombre del Arrays
    - ['🎆','🎇','✨'] --> 3 Elementos
*/

const Iconos=['🎆','🎇','✨']

// ---> Agregamos un Elemento al Final del Arrays
Iconos.push('🎡')
console.log(Iconos)

// ---> Agregar un Elemento al Comienzo del Arrays
Iconos.unshift('🎃')
console.log(Iconos)

// ---> Elimina un Elemento al Final del Arrays
Iconos.pop()
console.log(Iconos)

// ---> Elimina un Elemento al Comienzo del Arrays
Iconos.shift()
console.log(Iconos)

// ---> Ordena el Arrays de la A a la Z
Iconos.sort()
console.log(Iconos)