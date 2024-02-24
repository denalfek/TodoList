import { createRoot } from 'react-dom/client';
import React from 'react';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    {id:1, label: 'Drink Coffee', important: false},
    {id:2, label: 'Create React App', important: true},
    {id:3, label: 'Have A Lunch', important: false},
    {id:4, label: 'Watch A Movie', important: true},
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {todoData} />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />, );