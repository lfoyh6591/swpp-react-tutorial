import React from 'react';
import './App.css';
import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList title='My TODOs'></TodoList>
    </div>
  );
}

export default App;
