import React, {useState} from 'react';
import { CreateTodoButton } from './CreateTodoButton.jsx';

import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';
import TodoList from './TodoList.jsx';
import { TodoSearch } from './TodoSearch.jsx';

var defaultTodos = [
  {text: "hacer la tarea1", completed: true},
  {text: "hacer la tarea2", completed: false},
  {text: "hacer la tarea3", completed: false},
];

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setsearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  return (
    <div>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />

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
