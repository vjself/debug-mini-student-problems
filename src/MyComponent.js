import React, { Component } from 'react';
import './MyComponent.css';
import axios from 'axios';

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isPosting: false,
      error: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.setState({ isPosting: true, error: null });
    axios.post('/api/data', { value: 777 }).then(response => {
      this.setState({ data: response.data });
    }).catch(error => {
      this.setState({ error });
    }).then(() => {
      this.setState({ isPosting: false });
    });
  }

  render() {
    const { data, error, isPosting } = this.state;
    
    return (
      <div className="my-component-container">
        <h2>My Component</h2>
        <button onClick={this.fetchData}>Fetch data</button>
        {isPosting
          ? <div>Loading...</div>
          : error
            ? <div>Error! {error.message}</div>
            : <div>Data: {JSON.stringify(data)}</div>
        }
      </div>
    );
  }
}