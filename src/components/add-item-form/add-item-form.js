import React, {Component} from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
    render() {
        return (
            <div className="add-item-form">
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => this.props.addItem('new item!')}>
                    Add new item
                </button>
            </div>
        );
    };
}