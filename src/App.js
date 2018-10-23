import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <MyComponent />
      </div>
    );
  }
}

export default App;
