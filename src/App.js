import React, { Component } from 'react';
import './App.css';
import CardItemMain from './component/CardItemMain/CardItemMain';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    };

  render() {
    return (
      <div className="App">
        <CardItemMain data={this.state.data} />
      </div>
    );
  }
}

export default App;
