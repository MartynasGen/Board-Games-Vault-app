import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

class Search extends Component {

    handleInput = (e) => {
        let val = e.target.value
        if (val) {
            this.props.getSearch(val)
        } else {
            this.props.getAllItems()
        }
        
        // return obj
    }

    render(){
        return (
            <div>
                <input className='search-Input' placeholder='...Search' onChange={this.handleInput}></input>
                <i className='fa fa-search'></i>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearch: (value) => dispatch(actionTypes.get_search_result(value)),
        getAllItems: () => dispatch(actionTypes.wait_All_Items()),
    }
}

export default connect(null, mapDispatchToProps)(Search)