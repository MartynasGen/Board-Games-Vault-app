import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class InsertNewItem extends Component {
    render(){
        
        return (
            <div className="editAddItem">
                <h1>Add New Item</h1>
                <h2>Item name:</h2>
                    <input className='search-Input' placeholder='...add'></input>
                <h2>Item category:</h2>
                    <input className='search-Input' placeholder='...add'></input>
                <h2>Item details:</h2>
                    <input className='search-Input' placeholder='...add'></input>
                <h2>Item image:</h2>
                    <input className='search-Input' placeholder='...add'></input>
                <button className='add-Btn'>Add item</button>
                <button className='add-Btn' onClick={this.props.getAllItems}>Cancel</button>
            </div>
        )

    }
    
}

const mapStateToProps = state => {
    return {
        item: state.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.wait_All_Items())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertNewItem)