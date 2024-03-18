import React from "react";
import './add-item-panel.css';

const AddItemPanel = (props) => {
  let value = '';
  return (
    <div>
      <input type="text"
        className="form-control add-item-input"
        placeholder="type to add new item" />
    </div>
  );
}

export default AddItemPanel;