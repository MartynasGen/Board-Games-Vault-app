import React, { Component } from 'react'

class Search extends Component {
    render(){


        return (
            <div>
                <input className='search-Input' placeholder='...Search'></input>
                <i className='fa fa-search'></i>
            </div>
        )
    }
    
}
export default Search