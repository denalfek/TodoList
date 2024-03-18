import React, { Component } from "react";
import './add-item-panel.css';

export default class AddItemPanel extends Component {  
  render() {
    const { onAdd } = this.props;  
    return (
      <form className="add-item-form d-flex">
        <input type="text" />
        <button className="btn btn-outline-secondary"
                onClick={onAdd}>
          Add
        </button>
      </form>
    );
  }
}
