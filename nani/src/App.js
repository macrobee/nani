import './App.css';
import React, { Component } from 'react';
import Nav from './Pages/Nav';
import Header from './Pages/Header';
import About from './Pages/About';
import Main from './Pages/Main';
import Cottage from './Pages/Cottage';
import Meet from './Pages/Meet';
import Stretch from './Pages/Stretch';

class App extends Component {
  constructor(){
    super()
    this.state={
      selectedPage: 'about',
    }
  }
  choosePage(){
    return <Main />
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        {this.choosePage()}
      </div>
    );
  }
}

export default App;
