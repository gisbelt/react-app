//The resource is in src/data/heroes.js: export
//Reference: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find


//Import
// If we need to import the information of something, in the file where we have that information it has to be exported
// import { heroes } from './data/heroes';
// {owners}: export in the same file
import heroes, {owners} from '../data/heroes'; 
console.log(heroes); 

/*************FIND****************/
// Find() an object in an array by one of its properties (id)
// First way 
const getHeroeById = (id) => heroes.find ((heroe) => heroe.id === id)
console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.find ((heroe) => heroe.owner === owner)
console.log(getHeroeByOwner('DC'));

//Second way
const getHeroeById2 = (heroe) => {
    return heroe.id === 2;
}
console.log(heroes.find(getHeroeById2)); 
// Destructuring of object found 
const {id, name, owner} =  heroes.find(getHeroeById2);
console.log(id, name, owner);


/*************FILTER****************/
//Filter() all heroes that owner is 'DC'
const getHeroeByOwner2 = (owner) => heroes.filter ((heroe) => heroe.owner === owner)
console.log(getHeroeByOwner2('DC'));