import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    
    return (
        <>
            <ul >
                {
                    heroes.map((item, index) => (
                        <li key={item.id}>
                            {item.superhero}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
