import heroes from '../data/heroes';

/*************FIND****************/
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

/*************FILTER****************/
export const getHeroeByOwner = ( owner ) => heroes.filter ( (heroe) => heroe.owner === owner );
