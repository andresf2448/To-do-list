import React, {useState} from 'react';
import { CreateTodoButton } from './CreateTodoButton.jsx';

import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';
import TodoList from './TodoList.jsx';
import { TodoSearch } from './TodoSearch.jsx';

var defaultTodos = [
  {text: "hacer la tarea1", completed: false},
  {text: "hacer la tarea2", completed: false},
  {text: "hacer la tarea3", completed: false},
];

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setsearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;