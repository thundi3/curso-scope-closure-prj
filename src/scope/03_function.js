//las variables declaradas pueden ser usadas dentro del ambito de la funcion 
//variable userName no se puede acceder desde fuera

//Function Scope

function greeting() {    
    let userName = 'Diego';
    console.log(userName);

    if (userName === 'Diego') {
        console.log(`Hello ${userName}`);
    }
}

greeting();


//produce un error de no referencia porque NO es una variable GLOBAL
//ReferenceError: userName is not defined
console.log(userName);



