import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TraineesApi from '../api/trainee';
import Group from '../components/Group/Group';
import Trainee from '../components/Trainee/Trainee';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { trainees: null };
  }

  async componentDidMount() {
    const trainees = await TraineesApi.getTrainees();
    this.setState({ trainees });
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <Group />
        <Trainee trainess={this.state.trainees} />
      </div>
    );
  }
}

export default App;
