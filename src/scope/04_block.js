

function fruits() {
    if (true) {
        var fruit1 = 'Apple';//tiene alcance de function scope
        //cuando se utiliza VAR 
        //se tiene que tener cuidado con la creacion de las variables utilizando
        //VAR ya que desde afuera del bloque si deja llamar el valor

        let fruit2 = 'Kiwi'; //alcance block scope
        const fruit3 = 'Banana';//alcance block scope

        //bloque ok --> se puede llamar a todos los valores del block
        console.log(fruit2);
        console.log(fruit3);
    }

    //al ejecutar con estaq porcion de codigo 
    //el llamado da error al intentar procesar 
    //la variable fruit2 ya que como tiene solo alcance de
    //block scope solo se puede acceder dentro de
    //las llaves
    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);



}

fruits();