import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class Edit extends Component {

    state = {
        itm: {
            name: '',
            category: '',
            details: '',
            pic: ''
        }
    }

    handleInput = (obj, key, e) => {
        let ab = e.target.value
        return ab
        
        // this.props.getAddItem({obj})
        // return obj
    }

    render () {
        return (
            <div className="editAddItem">
                <h1>Edit Item</h1>
                <h2>Item name:</h2>
                    <input className='search-Input' placeholder='...add' value={this.props.tempItem.name} onChange={this.handleInput.bind(this, this.value)}></input>
                <h2>Item category:</h2>
                    <input className='search-Input' placeholder='...add' value={this.props.tempItem.category} onChange={this.handleInput.bind(this, this.state.itm, 'name')}></input>
                <h2>Item details:</h2>
                    <input className='search-Input' placeholder='...add' value={this.props.tempItem.details} onChange={this.handleInput.bind(this, this.state.itm, 'name')}></input>
                <h2>Item image:</h2>
                    <input className='search-Input' placeholder='...add' value={this.props.tempItem.pic} onChange={this.handleInput.bind(this, this.state.itm, 'name')}></input>
                <button className='add-Btn' onClick={this.handleSubmit}>Edit</button>
                <button className='add-Btn' onClick={this.props.getAllItems}>Cancel</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        item: state.items,
        inspectItem: state.inspectItem,
        tempItem: state.tempItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.wait_All_Items()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)