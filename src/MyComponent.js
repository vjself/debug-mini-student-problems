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
    axios.get('/api/data').then(response => {
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
        <h3>Wait</h3>
        <div>
          Before viewing/fixing the code, try this: Use Postman and make a <code>GET</code> to <code>http://localhost:4000/api/data</code>. What do you see? Why?
        </div>
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