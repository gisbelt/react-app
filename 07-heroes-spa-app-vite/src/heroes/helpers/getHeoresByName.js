import { heroes } from "../data/heroes";

export const getHeoresByName = ( name = '' ) => {
    // Force to clean the url, just in case it is written in capital letters and with spaces 
    name = name.toLowerCase().trim()
    // if you wrote nothing, return an empty array 
    if( name.length === 0 ) return [];
    // returns only the hero which includes the name
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( name )
    ); 
}
