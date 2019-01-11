import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class AddButton extends Component {
    render(){


        return (
            <button onClick={this.props.addItemComponent} className="add-Item-Btn">Add new item</button>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        addItemComponent: () => dispatch(actionTypes.add_Item_View()),
    }
}

export default connect(null, mapDispatchToProps)(AddButton)