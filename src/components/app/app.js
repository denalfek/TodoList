import React, { Component } from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import TodoList from '../todo-list';
import ItemsStatusFilter from '../item-status-filter';

import './app.css'
import AddItemPanel from "../add-item-panel";

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create React App'),
    ]
  };
  
  maxId = 100; // this.state.todoData.length;
  createTodoItem(label, done = false, important = false) {
    return {
      label,
      important: important,
      done: done,
      id: this.maxId++,
    };
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idX = todoData.findIndex((el) => el.id == id);
      const newItems = [
        ... todoData.slice(0, idX),
        ... todoData.slice(idX + 1)
      ];

      return {
        todoData: newItems
      }
    });
  }

  onAddItem = (label) => {
    const id = this.state.todoData.length + 1;
    this.setState(({todoData}) => {
      const newItems = [
        ... todoData,
        this.createTodoItem(label)
      ];

      return {
        todoData: newItems
      }
    });
  };

  toggleProperty(arr, id, propName) {
    const idX = arr.findIndex((el) => el.id == id);
    const newItem = {... arr[idX],
      [propName]: !arr[idX][propName]}
    const newItems = [
      ... arr.slice(0, idX),
      newItem,
      ... arr.slice(idX + 1)
    ];
    return {
      todoData: newItems
    };
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => this.toggleProperty(todoData, id, 'important'));
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => this.toggleProperty(todoData, id, 'done'));
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemsStatusFilter />
        </div>  
        <TodoList
          todos = {todoData}
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } />
        <AddItemPanel
          onAdd = {() => this.onAddItem('New item')} />
      </div>
    );
  }
}
