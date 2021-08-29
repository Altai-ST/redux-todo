import Todo from '../Todo'
import './TodoList.css'

const TodoList = ({ todos, toggleTodo }) => {
  return(
  <ol>
    {todos.map(todo => {
      return(
      <Todo key={todo.id}
        {...todo}
        onClick={()=>toggleTodo(todo.id)}
      />
    )})}
  </ol>
)}


export default TodoList;