//Closure

//se ve alcance de los scopes

const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        //funcion interna
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
        sumatoria += firstNum + (secondNum != NaN ? secondNum : 0);
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