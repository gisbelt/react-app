import { getHeroeById } from './08-imp-exp'

// It is better do promiseby this way, to can use id as parameter 
export const getHeroeByIdAsync = (id) =>{
    //must be returned, to be able to use the promise (then, catch, finally)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('Cannot find hero with id '+id);
            }            
        }, 150) //run after 1 second, then resolve
    });
}
