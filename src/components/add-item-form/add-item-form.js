import React, {Component} from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
    state = {
        label: ''
    };

    onLableChange = (e) => {
        console.log(this.state.label);
        this.setState(
            { label: e.target.value }
        );
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    };

    render() {
        return (
            <form className="add-item-form d-flex"
                  onSubmit={this.onSubmit}>
                {this.state.label}

                <input type="text"
                       className="form-control"
                       onChange={this.onLableChange}
                       placeholder="set target" />

                <button
                    className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    };
}