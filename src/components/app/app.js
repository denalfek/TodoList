import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css';

export default class App extends Component {
    state = {
        todoData: []
    };

    maxId = this.state.todoData.length;

    deleteItem = (id) => {
        this.setState(( {todoData} ) => {
            const idx = todoData.findIndex((el) => el.id === id);
            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1),
                ]
            };
        });
    };

    addItem = (text) => {
        this.setState(( { todoData } ) => {
            return {
                todoData: [
                    ...todoData,
                    this.createTodoItem(text)
                ]
            };
        });
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false
        };
    };

    onToggleDone = (id) => {
        this.setState(( {todoData} ) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(( { todoData } ) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const item = arr[idx];
        
        if (item.done && [propName] === 'important') {
            return arr; // неясно почему сюда не заходит ни при каких обстоятельствах
        }
        else {
            const newItem = {
                ...item,
                [propName]: !item[propName]
            };
    
            return [
                ...arr.slice(0, idx),
                {
                    ...item,
                    [propName]: !item[propName]
                },
                ...arr.slice(idx + 1),
            ];
        }        
    };

    render() {
        const { todoData } =
            this.state;
        const doneCount =
            todoData.filter((el) => el.done).length;
        const todoCount =
            todoData.filter((el) => !el.done).length;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant} />
                <AddItemForm
                    addItem={this.addItem} />
            </div>
        );
    };
}
