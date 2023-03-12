//Reasignacion y Redeclaracion

//declaracion inicial
var firstName; //undefined
var firstName = 'Diego';
console.log(firstName);


//
var lastName = 'Armando'; //declarar y asignar
lasName = 'Diego'; // reasignar
console.log(lastName);


var secondName = 'Armando';//declarado y asignado  
var secondName = 'Ana';// reasignando
console.log(secondName);

//ejemplos de LET
//reglas : no se puede redeclarar una variable dentro del BLOCK SCOPE

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar..!!
console.log(fruit);

let fruit = 'Banana';//ERROR: Cannot Declare block-scope variable
console.log(fruit);
//---------------
//ejemplos de CONST
//reglas: mas robustas, no se puede reasignar
//no se puede redeclarar

//intento redeclarar donde NO permite 
//a CONST redeclarar o reasignar valores

const animal = 'Dog';//declara y asignar
animal = 'Cat'; //ERROR: TypeError: Assignment to constant variable.
console.log(animal);

const animal = 'Snake';
console.log(animal);


//Valores a la referencia 
//en este caso se realizo una sola declaracion en la const vehicles = [];

const vehicles = [];

vehicles.push("Toyota");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

