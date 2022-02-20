import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <input 
        className="TodoSearch" 
        placeholder="Tarea"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  )
}

export {TodoSearch};