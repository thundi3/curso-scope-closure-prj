//Entender closures, variables

function moneybox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`ManeyBox: $${saveCoins}`);
}

moneybox(5);
moneybox(5);

//resultado: la logica no esta recordando el valor almacenado
//ManeyBox: $5
//ManeyBox: $5

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;
}


const myMoneyBox=moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyboxAna=moneyBox();

moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);
