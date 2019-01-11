import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class ItemDetails extends Component {
    render () {
        let viewDetails = null

        viewDetails = (
            <div className='viewDetails'> 
                <img  className='detailsPic' src={this.props.tempItem.pic} alt={this.props.tempItem.name}></img>
                <h1>
                    {this.props.tempItem.name}
                </h1>
                <div>
                    Category: {this.props.tempItem.category}
                </div>
                <div>
                    Details: {this.props.tempItem.details}
                </div>
                <button className='drop-Btn' onClick={this.props.getAllItems}>Back</button>

            </div>
        )
        return(
            <div>
                {viewDetails}
            </div>
        )
}
}
const mapStateToProps = state => {
    return {
        tempItem: state.tempItem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.wait_All_Items())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)