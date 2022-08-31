//Functions
// It is good practice to make functions by creating a constant and assigning that constant the function
const hello = function(names){
    return `Hola, ${names}`;
}

//arrow functions
const hello2 = (names) =>{
    return `Hola, ${names}`;
}

// If functions only have a "return", it can be simplified like this: 
// Delete the word return and the keys {} 
const hello3 = (names) => `Hola, ${names}`;
const hello4 = () => `Hola Mundo`;

//Another way to return without the word "return" it's put parenthesis around 
//the object or around whatever we want to return
const getUser = () => ({
    uid: 'ABC123',
    username: 'Baby_1501',
});
const hello5 = () => (`Hola Mundo`);


console.log(hello2);
console.log(hello('Gis'));
console.log(getUser());

//Practice
const getUserActive = (names) => ({
    uid: 'ABC567',
    username: names
});

const userActive = getUserActive('Jake');
console.log(userActive);