//Modo estricto
//Fue incorporado en ECMA script 5
//permite ejecutar de manera estricta las reglas requeridas para el standart de JS

//Ejemplos

//var pi;//undefined
'use strict';
pi = 3.1416;
console.log(pi);

//-->ReferenceError: pi is not defined

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());

//-->ReferenceError: pi is not defined 

