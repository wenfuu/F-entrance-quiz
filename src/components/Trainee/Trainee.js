import React from 'react';
import './Trainee.css';

class Trainee extends React.Component {
  render = () => {
    return (
      <div className="trainee">
        <h2>学员列表</h2>
        <div className="trainee-list">
          <div>1.成吉思汗</div>
          <button type="button">+添加学员</button>
        </div>
      </div>
    );
  };
}

export default Trainee;
