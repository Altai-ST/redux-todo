export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;

export const addTodo = text =>{
    if(text !== ''){
    return{
    type: ADD_TODO,
    id: nextTodoId++,
    text
}
}else{
    return{
        type: ADD_TODO,
        id: nextTodoId,
        text
    }
}}

export const setVisibilityFilter = filter =>({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
})
