//Practicando closure

function greeting(){
    let userName='Diego';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());


