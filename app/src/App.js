import React, { Component } from 'react';
import './App.css';
import './font awesome/css/font-awesome.min.css';
import Logo from './img/Logo.png';
import Search from './components/Search';
import Drop from './components/Drop-down';
import Item from './components/Item';
import AddBtn from './components/AddButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Container'>
          <div className='left-Side'>
            <div className='left-Side-Menu'></div>
              <img src={Logo} alt='Board games'/>
              <Search/>
              <Drop/>
              <AddBtn/>
          </div>
          <div className='right-Side'>
            <Item/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
