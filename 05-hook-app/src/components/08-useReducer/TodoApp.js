import React, { useReducer } from 'react';
import { todoReducer } from './intro-reducer';
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false
}
]

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);
    // console.log(todos)
  return <div>
      <h1>Todo App ({todos.length})</h1>
      <hr/>
      <ul>
          <li>Hola</li>
          <li>Daniela</li>
          <li>Ily</li>
      </ul>
  </div>;
};
