import React from 'react';
import Header from './components/header/Header.jsx'
import CreateTodoList from './components/create-todo/Create-Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper">
      <Header/>
        <input placeholder='Создать ToDoList'></input>
        
        <CreateTodoList/>
        </div>
        
      
    </div>
  );
}

export default App;
