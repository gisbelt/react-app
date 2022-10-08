// variables and constants
const name = "Gis";
const lastname = "Torres";

let diceValue = 5;
diceValue = 4; 

console.log(name, lastname, diceValue);

if(true){
    // this values is only for this scope 
    // we also can put the constant "name" and it is allowed because there is no two constans at the same scope are called the same
    const name = "Peter";
    let diceValue = 6
    console.log(diceValue, name);
}

console.log(diceValue);