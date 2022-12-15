
// Let's imagine we are creating a to-do list application,
// then our state would have all the tasks we have to do.
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// Reducer:
// It will have two arguments: the initial state and the action.
// The action will tell the reducer how to change the status 
const todoReducer = ( state = initialState, action = {} ) => {

    // Always return to a new state: 
    if( action.type === '[TODO] add todo'){
        return [ ...state, action.payload ];
    }

    return state; //a state must always return 
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

// Our action will be to add a new task: 
const addTodoAction = {
    type: '[TODO] add todo', //name
    payload: newTodo, //what goes into the action
}

// Add new action to reducer:
todos = todoReducer( todos, addTodoAction );

console.log({state: todos})