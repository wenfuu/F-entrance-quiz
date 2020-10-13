import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Group from '../components/Group/Group';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <Group />
      </div>
    );
  }
}

export default App;
