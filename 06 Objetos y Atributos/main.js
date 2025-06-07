/*

    Objetos:

        - Un objeto es una estructura de datos que permite almacenar información en forma de pares  Atributos – Dato (también llamados propiedades).

        - Sirve para representar cosas reales con características y valores, por ejemplo:

            Un auto tiene: marca, modelo, color → todo eso puede guardarse en un objeto. 
            
    Estructura:

        let auto = {
            marca: "Toyota",
            modelo: "Corolla",
            color: "rojo"
        };

*/

// ---> Ejemplo

let Persona = {
    DNI: 11222333,
    Apellido: 'Perez',
    Nombre: 'Juan',
    Edad: 19
}

// ---> Imprimimos el Objeto
console.log(Persona)

// ---> Imprimimos un solo Atributo del Objeto
console.log(Persona.Nombre)

// ---> Modificar un Dato de un Atributo
Persona.Edad = 30; 

// ---> Solicitamos al Usuario un Dato y lo Modificamos en el Objeto
let nuevoapellido=prompt("Ingrese su Apellido: ")
Persona.Apellido=nuevoapellido
console.log(Persona)