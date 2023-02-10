import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    
    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {
                    heroes.map((item, index) => (
                        <HeroeCard 
                            key={ item.id }
                            {... item} //spread operator to receive props
                        />
                    ))
                }
            </div>
        </>
    )
}
