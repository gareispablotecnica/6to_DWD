/*

    *Ciclo de Repetición FOR
       El ciclo for se usa para repetir un bloque de código, un número determinado de veces.
       Este ciclo es por conteo, es decir, tiene un INICIO y un FINAL.

    *Esctructura
    for (Inicio; Final/Condición; incremento) {
        // Código a repetir
    }    

     Se divide en tres partes:

        - Inicio → se ejecuta una sola vez al principio.

        - Final/Condición → se evalúa antes de cada repetición.

        - Incremento → se ejecuta al final de cada vuelta.    

*/

// Ejemplo --> Realizar un programa que muestre los números del 1 al 5

for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}

// --> En este Caso la condicion es menor o igual al Limite de elementos (5)