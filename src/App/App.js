import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
      </div>
    );
  }
}

export default App;
