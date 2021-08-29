import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilter, TOGGLE_TODO } from "../actions"

const initialState ={
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
}

export const todoApp =(state = initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            if(action.text !== ''){
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                        id: action.id
                    }
                ]
            })
        }else{
            return state
        }
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state,{
                visibilityFilter: action.filter
            })

        case TOGGLE_TODO :
            return Object.assign({}, state, {
                todos: state.todos.map((todo, id) => {
                    if (id === action.id) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed,
                        })
                    }
                    return todo;
                })
            })

        default: 
            return state
    }
}


