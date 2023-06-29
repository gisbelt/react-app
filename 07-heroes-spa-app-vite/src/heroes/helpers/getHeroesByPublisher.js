import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const valisPublishers = ['DC Comics','Marvel Comics'];
    // If the publisher we are receiving is NOT included in the argument
    if( !valisPublishers.includes(publisher) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher )
}
