import React from 'react';

import { CreateTodoButton } from '../CreateTodoButton/index.jsx';

import { TodoCounter } from '../TodoCounter/index.jsx';
import { TodoItem } from '../TodoItem/index.jsx';
import TodoList from '../TodoList/index.jsx';
import { TodoSearch } from '../TodoSearch/index.jsx';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setsearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
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
  )
}

export {AppUI};
