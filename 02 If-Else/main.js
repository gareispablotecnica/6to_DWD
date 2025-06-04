/*

    *If/ Else
       Es una estructura condicional que permite tomar decisiones en el código.
       Se usa para decir:
            "Si algo es verdadero, haz esto; si no, haz otra cosa."

    *Esctructura
        if(Variable Condicion Dato){
            // Código si la condición es Verdadera
        }
        else{
            // Código si la condición es Falka
        }
*/

// Ejemplo Verificar si una Persona es mayor de edad
let edad = parseInt(prompt("Ingrese su Edad"))

if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

/*
    - if (edad >= 18) --> Variable (edad) Condicion (>=) Dato (18)

    - Camino Verdadero --> alert("Eres mayor de edad");

    - Camino Falso --> alert("Eres menor de edad");

*/