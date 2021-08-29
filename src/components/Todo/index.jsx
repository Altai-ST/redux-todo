  import React from 'react';
  import './Todo.css'
const Todo = ({ onClick, completed, text, id }) => {
  return(
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          backgroundColor: completed ? 'red' : 'green'
        }}
      >
        <span className='num'>{id + 1}</span>{text}
      </li>
  )}

export default Todo