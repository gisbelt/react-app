
export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case 'Add Todo':
            return [ ...initialState, action.payload ];
        
        case 'Remove Todo':
            // return all tasks as long as the id is different from the id to be deleted 
            return initialState.filter( todo => todo.id !== action.payload );
        
        case 'Toggle Todo':
            // map returns an array containing the resultant values 
            return initialState.map( todo => {
                // if the id is exactly the same as the one we clicked (payload), then we return a new todo, and the done property will change to the negation of it.  
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            // throw new Error('Action.type = ABC not implemented'); 
            return initialState;
    }
}