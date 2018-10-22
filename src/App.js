import React, { Component } from 'react';
import './App.css';
import VisibleCounter from './containers/VisibleCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleCounter />
      </div>
    );
  }
}

export default App;
