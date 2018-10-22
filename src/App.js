import React, { Component } from 'react';
import './App.css';
import VisibleCounter from './containers/VisibleCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <VisibleCounter />
        </div>
      </div>
    );
  }
}

export default App;
