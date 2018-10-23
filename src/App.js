import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
