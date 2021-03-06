import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'
import ItemDetails from './ItemDetails'
import AddNewItem from './AddNewItem'
import Edit from './EditItem'


class Item extends Component {


    componentWillMount () {
        this.props.getAllItems()
          }
    
    itemHandler = (itemIndex) => { 
        let value = this.props.item[itemIndex]
        this.props.openItem(value)
    }

    itemDelete = (id) => {
        this.props.delItem(id)
    }
    

    render(){

        let game = null

        if (this.props.inspectItem === 'viewAll') {
            game = (
                <div>
                    {this.props.item.map((element, index, _id) => {
                        return (
                            <div key={index} className='Item'>
                                <div className='item-Opacity'></div>
                                <div className='item'>
                                <i className='fa fa-trash' onClick={this.itemDelete.bind(this, element._id)}></i>
                                {/* <i className='fa fa-edit'></i> */}
                                {/* <button onClick={this.handleDelete.bind(this, element._id)}>Delete</button> */}
                                <button className='more-Btn' onClick={this.itemHandler.bind(this, index)}>More</button>
                            </div>
                            <img className='item-Pic' src={element.pic} alt={element.name}/>
                            </div>
                                )
                    })}
                </div>
            )
                } else if (this.props.inspectItem === 'viewOne'){
                    return <ItemDetails/>
                } else if (this.props.inspectItem === 'addItem'){
                    return <AddNewItem/>
                } else if (this.props.inspectItem === 'editItem'){
                    return <Edit/>
                }

        return (
            <div>

                {game}

            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        item: state.items,
        inspectItem: state.inspectItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.wait_All_Items()),
        openItem: (value) => dispatch(actionTypes.inspect_Item(value)),
        delItem: (value) => dispatch(actionTypes.delete_item(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)