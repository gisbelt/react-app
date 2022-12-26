import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

    // we destructure what is in the context: 
    const { user, setUser } = useContext( UserContext )

    return (
        <>
            <h1>Login Page: <small className='text-info'>{ user?.name }</small></h1>
            <hr />
            <pre>{ JSON.stringify( user, null, 3 ) }</pre>

            <button 
                className="btn btn-primary"
                onClick={ () => setUser( {
                        id: 1,
                        name: 'Gisbel',
                        email: 'gisbel@google.com',
                    }
                )}
            >
            Set User
            </button>
        </>
    )    
}
