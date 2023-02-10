import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
    // find the hero that is exactly the same as the id we are sending as argument 
    // otherwise, it receives undefined
    return heroes.find( hero => hero.id === id )
}
