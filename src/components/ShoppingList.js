import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
  
    onDeleteClick = id =>{
        this.props.deleteItem(id);
    }

    render(){
        const {items} = this.props.item;
        return(   
            <div>
                {items.map(({ id, name }) =>(
                    <div>
                        <button
                            className="remove-btn"
                            onClick={this.onDeleteClick.bind(this, id)}
                        >
                        &times;</button>
                        {name}
                    </div>
                ))}
            </div>  
            
        );
    }
}


ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
