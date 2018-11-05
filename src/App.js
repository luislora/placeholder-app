import React, { Component } from 'react';
import './App.css';
import VisibleCounter from './containers/VisibleCounter';
import TestComponent from './components/TestComponent/TestComponent';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="container">
          <VisibleCounter />
          <TestComponent />
        </div>
      </div>
    );
  }
}

export default App;
