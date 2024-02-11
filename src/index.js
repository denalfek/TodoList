import React from 'react';
import ReactDOM from 'react-dom/client';

function TodoItem() {
  return (
    <span>Drink Coffee</span>
  );
}

ReactDOM.render(<TodoItem />, document.getElementById('root'));