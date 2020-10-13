import React from 'react';
import './Group.css';

class Group extends React.Component {
  render = () => {
    return (
      <div className="group">
        <section>1 组</section>
        <div className="group-list">
          <div>1.成吉思汗</div>
        </div>
      </div>
    );
  };
}

export default Group;
