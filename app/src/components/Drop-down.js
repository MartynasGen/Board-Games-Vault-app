import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actionTypes from '../store/actions/actionTypes'

class Drop extends Component {
    render(){

        let dropItems = null

        dropItems = this.props.item.map( (element, index) =>{
            return (
                <div key={index} >
                    {element.category}
                </div>
            )
        })
        

        return (
            <div className="dropdown-Container">
                <button className="drop-Btn">Filter</button>
                <div className="dropdown-Content">
                  {dropItems}
                </div>
              </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        item: state.items
    }
}

export default connect(mapStateToProps)(Drop)