import React from 'react';
import RectDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    {id: 1, label: 'Drink coffee', important: false},
    {id: 2, label: 'Create react application', important: true},
    {id: 3, label: 'Have a lunch', important: false},
  ]

  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
  </div>
  );
};

RectDOM.render(<App />,
   document.getElementById('root'));