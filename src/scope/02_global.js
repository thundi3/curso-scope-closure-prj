//Curso emitido por : Oscar Barajas Tavares


//variables

var a; //declaracion de la variable a

var b = 'b'; //declaramos y asignamos

b = 'bb'; //reasignando valor

var a = 'aa'; //redeclaracion


//Global Scope
var fruit = 'Apple'; //global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();



//tener cuidado cuando se declara 

function countries(){
    country = 'Ecuador';//se puede considerar como GLOBAL
    console.log(country);
}

countries();
console.log(country);





