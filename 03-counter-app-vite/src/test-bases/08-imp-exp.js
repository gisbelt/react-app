// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );


/*************FIND****************/
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
console.log(getHeroeById(2));

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
onsole.log(getHeroeByOwner('DC'));

/*************FILTER****************/
//Filter() all heroes that owner is 'DC'
const getHeroeByOwner2 = (owner) => heroes.filter ((heroe) => heroe.owner === owner)
console.log(getHeroeByOwner2('DC'));
