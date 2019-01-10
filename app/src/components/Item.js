import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'
import ItemDetails from './ItemDetails'


class Item extends Component {


    componentWillMount () {
        this.props.getAllItems()
          }
    
    itemHandler = (itemIndex) => { 
        let value = this.props.item[itemIndex]
        this.props.openItem(value)
    }
    

    render(){

        let game = null

        if (this.props.inspectItem === false) {
            game = (
                <div>
                    {this.props.item.map((element, index) => {
                        return (
                            <div key={index} className='Item'>
                                <div className='item-Opacity'></div>
                                <div className='item'>
                                {/* <button onClick={this.handleDelete.bind(this, element._id)}>Delete</button> */}
                                <button className='more-Btn' onClick={this.itemHandler.bind(this, index)}>More</button>
                            </div>
                            <img className='item-Pic' src={element.pic} alt={element.name}/>
                            </div>
                                )
                    })}
                </div>
            )
                } else {
                    return <ItemDetails/>
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
        openItem: (value) => dispatch(actionTypes.inspect_Item(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)