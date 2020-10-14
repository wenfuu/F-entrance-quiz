import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TraineesApi from '../api/trainee';
import Group from '../components/Group/Group';
import Trainee from '../components/Trainee/Trainee';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    // TODO feedback: trainees 是数组，建议初始值为[]
    // TODO feedback: trainees state的定义更适合维护在Trainee组件中
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
        {/* // TODO feedback: 命名成GroupList和TraineeList更合适，因为是列表 */}
        <Group />
        <Trainee trainess={this.state.trainees} />
      </div>
    );
  }
}

export default App;
