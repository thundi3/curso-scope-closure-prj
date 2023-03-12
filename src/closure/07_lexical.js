//Closure
//permite acceder al ambito de una funcion exterior desde una funcion interior
//se tiene que tratar de utilizar lo mas que se pueda los closures
//se ve alcance de los scopes

//Tiene una closure cuando un funcion cualquiera accede
//a una variable fuera de su contexto y la recuerda.

//Ambito Lexico
//--como se puede acceder a la variables desde los otrs ambitos de las funciones anidadas
//la accesibilidad de las variables esta determinada por la posicion de las 
//mismas dentro de los ambitos anidados no es mas que cada una de las funciones que se tienen
//

const myGlobal = 0;

//funcion anidada
function myFunction() {

    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        //funcion interna -- esto seria tener un closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }
    return parent();
}

myFunction();

//Reto de codigo
function sumWithClosure(firstNum = 0) {
    let sumatoria = 0;
    return function(secondNum = 0) {
        sumatoria += firstNum + (isNaN(secondNum) ? 0 : secondNum);
        console.log(sumatoria);
        return sumatoria;
    };
}

sumWithClosure(2)(3);
sumWithClosure(90)();


//Should return 5
//Should return 113
//Should return 3245
//Should return 20
//Should return -80