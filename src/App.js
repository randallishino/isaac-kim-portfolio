import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
