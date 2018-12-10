import React, { Component } from 'react';
import './MyComponent.css';

export default class MyComponent extends Component {
  render() {
    const letters = ['a', 'b', 'c'];
    
    return (
      <div className="my-component-container">
        <h2>My Component</h2>
        {letters.map((letter, i) => {
          <div key={i}>
            {letter}
          </div>
        })}
      </div>
    );
  }
}