import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        const {label, important} = item;
        return (
            <li key={item.id}>
                <TodoListItem {... {label, important}} />
            </li>
        );
    });

    return (
      <ul>{elements}</ul>
    );
  };

export default TodoList;