import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import { VisibilityFilter } from "../../redux/actions";
import { toggleTodo } from "../../redux/actions";

const getVisibileTodos = (todos, filter)=>{
    switch (filter){
        case VisibilityFilter.SHOW_ALL:
            return todos
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state =>({
    todos: getVisibileTodos(state.todos, state.visibilityFilter), 
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)