import {combineReducers, createStore} from 'redux';
import { currentUserReducer, initialCurrentUser } from '../features/currentUser/currentUserSlice';
import { todosReducer, initialTodos } from '../features/todos/todosSlice';

            // function currentUserReducer(state = {}, action) {
            //     if (action.type === 'edit-current-user-name') {
            //         return {
            //             name: action.payload.name
            //         };
            //     }
            // 
            //     return state;
            // }    // moved to "currentUserSlice.js"

            // function todosReducer(state = [], action) {
            //     if (action.type === 'todo-add') {
            //         // ...
            //     }
            //     return state;
            // }

function postsReducer(state = [], action) {
    return state;
}

function friendsReducer(state = [], action) {
    return state;
}

const store = createStore(
                // function(state, action) {
                //     if (action.type === 'edit-current-user-name') {
                //         return {
                //             ...state,
                //             currentUser: {
                //                 name: action.payload.name
                //             }
                //         };
                //     }

                //     return state;
                // }
    combineReducers({
        friends: friendsReducer,
        posts: postsReducer,
        todos: todosReducer,
        currentUser: currentUserReducer,
    }), 
    
{
    friends: [],
    posts: [],
                // todos: [
                //     {
                //         id: Math.random(),
                //         text: 'JavaScript',
                //         isCompleted: false,
                //     },
                //     {
                //         id: Math.random(),
                //         text: 'React JS',
                //         isCompleted: false,
                //     },
                //     {
                //         id: Math.random(),
                //         text: 'Node JS',
                //         isCompleted: false,
                //     },
                // ],
    todos: initialTodos,
                // currentUser: {
                //     name: 'John Smith'
                // }
    currentUser: initialCurrentUser,
});

export default store;