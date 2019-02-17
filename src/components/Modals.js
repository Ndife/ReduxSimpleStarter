import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid';

class Modals extends Component {
    state = {
        name: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }
        // Add item via addItem action
        this.props.addItem(newItem);


    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>  
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter item"
                        onChange={this.onChange}
                    />
                    <button>Add Item</button>                
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(Modals);