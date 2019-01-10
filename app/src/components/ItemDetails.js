import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class ItemDetails extends Component {
    render () {
        let viewDetails = null

        viewDetails = (
            <div>
                <div>
                    {this.props.tempItem.pic}
                </div>
                <div>
                    {this.props.tempItem.name}
                </div>
                <div>
                    {this.props.tempItem.details}
                </div>
                <div>
                    {this.props.tempItem.category}
                </div>
                <button onClick={this.props.getAllItems}>Back</button>

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