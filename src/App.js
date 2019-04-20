import React, { Component } from 'react';
import './App.css';
import Johnsunam from 'johnsunam';

class App extends Component {
  componentDidMount() {
    Johnsunam()
      .then(res => console.log('res//////',res))
  }
  render() {

    return (
      <div className="App">
          first page
      </div>
    );
  }
}

export default App;
