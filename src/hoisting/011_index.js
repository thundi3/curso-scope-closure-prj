//Hoisting o elevacion

//inicio bloque
var nameOfDog = undefined; //esto sucede al ejecutar la porcion de codigo siguiente
//ya que no se inicializa la variable
//pero no es que sea un error completo cuando muestra el valor undefined
//lo que pasa es que inicializa JS la variable llamada en el log
//con este valor inicial por defecto.

//al ejecutar todo este bloque de codigo al ejecutar
//"eleva la variable para que se inicialice con valor undefined"
console.log(nameOfDog);
var nameOfDog = 'Elmo';
//--> undefined

//fin bloque

console.log(nombrePerro);
var nombrePerro = 'Robin';
console.log(nombrePerro);

//-->undefined
//-->Robin


//inicio bloque dos
nombrePerros();
function nombrePerros() {
    console.log(`El mejor perrito es ${elmo}`);
    var elmo = 'Elmito';
}
//-->El mejor perrito es undefined


//en tiempo de asignacio y ejecucion 
//lo que el JS realiza es "elevar"

//1ero eleva la variable 
var elmo;//con valor inicial undefined
//2do eleva la funcion 
function nombrePerros() {
    console.log(`El mejor perrito es ${elmo}`);    
}
//3ero finalmente llega a la parte donde hace el llamado
nombrePerros();
var elmo = 'Elmito';

//-->El mejor perrito es undefined

//fin bloque dos

//inicio bloque tres
nombrePerros();
function nombrePerros() {
    console.log(`El mejor perrito es ${elmo}`);    
}


//--> Errro:  ReferenceError: elmo is not defined
//esto se produce porque en la funcion se quiere llamar a
//la variable pero esta no existe en ningun lado
//si existiera una inicializacion de la variable luego de la funcion
//si se podria obtener el mensaje de 'El mejor perrito es undefined'

//fin bloque tres

//EXAMEN
nameOfDog("Elmo");
function nameOfDog(name) {
    console.log(name);
};

const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        const fruit2 = 'banana';
        let fruit3 = 'kiwi';
    }
}


nameOfDog("Elmo");
function nameOfDog(name) {
    console.log(name);
}; 