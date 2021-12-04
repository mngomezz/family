import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Home from './Home'

class App extends Component {
  super(props);
  constructor(props) {
    this.state = {
isLogged:false
    }
  }

  render() {
    return this.state.isLogged?<Login/>:<Home/>
  }
}

export default App;
