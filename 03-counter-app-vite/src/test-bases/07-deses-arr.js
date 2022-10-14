//Destructuring of arrays
const caracters = ['Goku', 'Vegeta', 'Trunks'];
// if we want the second element from array 'caracters', we put a , before 
const [, p2] = caracters;
console.log(p2)

//Extracting the array from function returnArray
const returnArray = () =>{
    return ['ABC', 123];
}
const [letters, numbers] = returnArray();
console.log(letters, numbers);

//Practice
//Extracting  the name and the function
//Remember that useeState return a array with 2 items and the second item is a function 
const useeState = (value) =>{
    return [value, () => {console.log('Hola mundo')}];
}
const [names, setName] = useeState('Goku');
console.log(names);
setName();





