import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    //Custom Hook
    const { formState, onInputChange, onResetForm, username, email, password  } = useForm({
        username: '',
        email: '',
        password: ''
    })
    // const {username, email, password } = formState;
    
    return (
        <>
            <h1>Form With Custom Hook</h1>
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
                <input 
                    type="password"
                    className="form-control mt-2" 
                    name="password" 
                    placeholder="Password"
                    value={ password }
                    onChange={ onInputChange }
                />

                <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
            </div>

            {
                (username === "gisbel") && <Message />
            }
        </>
    )
}
