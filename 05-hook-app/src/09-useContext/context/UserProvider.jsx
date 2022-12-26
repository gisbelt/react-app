// UserProvider:It is a component like any other, but it has a different characteristic: 
// In addition to having any property, we will also receive the "children" (the children that the component will have). 
import { useState } from 'react'
import { UserContext } from './UserContext'

// const user2 = {
//     id: 1,
//     name: 'Gisbel',
//     email: 'gisbel@google.com',
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    // value: This is the information that any child of that UserProvider will be able to get from the UserContext     
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
