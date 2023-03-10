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

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar..!!
console.log(fruit);

let fruit = 'Banana';//ERROR: Cannot Declare block-scope variable
console.log(fruit);

//ejemplos de CONST
//intento redeclarar donde NO permite 
//a CONST redeclarar o reasignar valores

const animal = 'Dog';//declara y asignar
animal = 'Cat';

const animal = 'Snake';
console.log(animal);



const vehicles = [];

vehicles.push("Toyota");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

