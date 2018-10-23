import React, { Component } from 'react';
import './MyComponent.css';
import axios from 'axios';

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isPosting: false,
      error: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.setState({ isPosting: true, error: null });
    axios.get('https://swapi.co/api/people').then(response => {
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
            : !data.length
              ? <div>No items in list</div>
              : <div>
                {data.map(x => <div>
                  Name: {x.name}
                </div>)}
              </div>
        }
      </div>
    );
  }
}