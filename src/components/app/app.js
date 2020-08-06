import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            {id: 1, label: 'Drink coffee', important: false},
            {id: 2, label: 'Create react application', important: true},
            {id: 3, label: 'Have a lunch', important: false},
        ]
    }

    deleteItem = (id) => {
        console.log(id);
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />
            </div>
        );
    };
}
