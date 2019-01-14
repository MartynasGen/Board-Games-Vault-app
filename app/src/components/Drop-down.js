import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'
// import * as actionTypes from '../store/actions/actionTypes'

class Drop extends Component {

    state = {
        cat1: 'Cards',
        cat2: 'Economy',
        cat3: 'Miniatures'
    }

    render(){

        let dropItems = null

        // dropItems = this.props.item.map( (element, index) =>{
        //     return (
        //         <div key={index} >
        //             {/* {element.category} */}
        //         </div>
        //     )
        // })

        

        return (
            <div className="dropdown-Container">
                <button className="drop-Btn">Filter</button>
                <div className="dropdown-Content">
                  {/* {dropItems} */}
                    <div onClick={this.props.filterDrop.bind(this, this.state.cat1)}>Cards</div>
                    <div onClick={this.props.filterDrop.bind(this, this.state.cat2)}>Economy</div>
                    <div onClick={this.props.filterDrop.bind(this, this.state.cat3)}>Miniatures</div>
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
const mapDispatchToProps = dispatch => {
    return {
        filterDrop: (value) => dispatch(actionTypes.find_item(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drop)