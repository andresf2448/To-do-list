import React from 'react';
import { CreateTodoButton } from './CreateTodoButton.jsx';

import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';
import TodoList from './TodoList.jsx';
import { TodoSearch } from './TodoSearch.jsx';

var todos = [
  {text: "hacer la tarea1", completed: true},
  {text: "hacer la tarea2", completed: false},
  {text: "hacer la tarea3", completed: false},
];

function App() {
  return (
    <div>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
