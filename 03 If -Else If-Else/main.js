/*

    *If/ Else
       Es cuando dentro de un if (o else) ponemos otro if, para tomar decisiones más específicas, 
       en varios niveles.
       Se Utiliza:
            Sirve cuando necesitas verificar más de una condición, paso a paso.

    *Esctructura
        if(Variable Condicion Dato){
            // Código si la condición es Verdadera
        }
        else if(Variable Condicion Dato){
            // Código si la condición es Verdadera
        }
        else{
            // Código si la condición es Falka
        }
*/

/*
    Ejemplo --> Dado el Ingreso de la Edad de una Persona Determinar:
        - Desde 18 a 40 años es un Adulto
        - Mas de 40 años: Adulto Mayor
        - En caso Contrario : Menor de Edad
*/

let Edad = parseInt(prompt("Ingrese su Edad"));

if (Edad >= 18 && Edad <= 40) {
    alert("Eres Adulto");
}
else if (Edad > 40) {
    alert("Eres Adulto Mayor");
}
else {
    alert("Eres menor de edad");
}

/*
    OPERADORES LÓGICOS
    - "Y / AND" --> En JavaScript el Operador and se define de la 
    siguiente manera: && , y se utiliza cuando  Todas las condiciones deben ser verdaderas

    - "O / OR" --> En JavaScript el Operador or se define de la 
    siguiente manera: || , y se utiliza cuando Al menos una de las condiciones debe ser verdadera


*/