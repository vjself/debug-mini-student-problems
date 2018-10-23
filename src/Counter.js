import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <h3>Count: {counter}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}