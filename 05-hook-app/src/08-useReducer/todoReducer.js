
export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case 'Add Todo':
            return [ ...initialState, action.payload ];
        
        case 'Remove Todo':
            // return all tasks as long as the id is different from the id to be deleted 
            return initialState.filter( todo => todo.id !== action.payload );
        
        default:
            // throw new Error('Action.type = ABC not implemented'); 
            return initialState;
    }


}