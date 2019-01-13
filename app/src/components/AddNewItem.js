import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class InsertNewItem extends Component {

    state = {
        itm: {
            name: '',
            ctg: '',
            dtl: '',
            pic: ''
        }
    }

    handleInput = (obj, key, e) => {
        obj[key] = e.target.value
        // this.setState({obj})
        this.props.getAddItem({obj})
        // return obj
    }

    handleSubmit = () => {
        let item = this.state.itm
        this.props.insertNewData(item)
    }



    render(){
        
        return (
            <div className="editAddItem">
                <h1>Add New Item</h1>
                <h2>Item name:</h2>
                    <input className='search-Input' placeholder='...add' onChange={this.handleInput.bind(this, this.state.itm, 'name')}></input>
                <h2>Item category:</h2>
                    <input className='search-Input' placeholder='...add' onChange={this.handleInput.bind(this, this.state.itm, 'ctg')}></input>
                <h2>Item details:</h2>
                    <input className='search-Input' placeholder='...add' onChange={this.handleInput.bind(this, this.state.itm, 'dtl')}></input>
                <h2>Item image:</h2>
                    <input className='search-Input' placeholder='...add' onChange={this.handleInput.bind(this, this.state.itm, 'pic')}></input>
                <button className='add-Btn' onClick={this.handleSubmit}>Add item</button>
                <button className='add-Btn' onClick={this.props.getAllItems}>Cancel</button>
            </div>
        )

    }
    
}

const mapStateToProps = state => {
    return {
        item: state.items,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.wait_All_Items()),
        getAddItem: (obj) => dispatch(actionTypes.Get_Add_Item_(obj)),
        insertNewData: (obj) => dispatch(actionTypes.insert_new_data_wait(obj))
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertNewItem)