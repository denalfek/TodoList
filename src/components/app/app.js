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
    // {id:1, label: 'Drink Coffee', important: false},
    // {id:2, label: 'Create React App', important: true},
    {id:3, label: 'Have A Lunch', important: false},
    {id:4, label: 'Watch A Movie', important: true},    
  ],
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

addItem = () => {
  this.setState(({todoData}) => {
    const lastIdX = todoData.length;
    console.log(lastIdX)
    const newArr = [
      ... todoData,
      {id: lastIdX, label: "Test"}
    ];
    return {
      todoData: newArr
    }
  });

  console.log('Yo!')
};

  render() {
  const { todoData } = this.state;
    return (      
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemsStatusFilter />
        </div>
  
        <TodoList
          todos = {todoData}
          onDeleted={ this.deleteItem } />
        <div className="top-panel d-flex">
          <AddItemPanel />
          <div className="btn-group">
            <button className="btn"
                    onClick={this.addItem}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
