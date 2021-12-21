import React, {useState} from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setsearchValue}) {

  const onSearchValueChange = (event) => {
    setsearchValue(event.target.value)
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