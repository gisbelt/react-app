import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'gisbel torres',
        email: 'gis@gmail.com',
    })
    const {username, email } = formState;

    //change input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // The property "name" is the one we are going to set for email, and username
        setFormState({
            ...formState,
            [ name ]: value //computed properties
        })
    }
     
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input 
                    type="text"
                    className="form-control" 
                    name="username" 
                    placeholder="Username:"
                    value={ username }
                    onChange={ onInputChange }
                />
                <input 
                    type="email"
                    className="form-control mt-2" 
                    name="email" 
                    placeholder="gis@gmail.com"
                    value={ email }
                    onChange={ onInputChange }
                />
            </div>

            {
                (username === "gisbel") && <Message />
            }
        </>
    )
}
