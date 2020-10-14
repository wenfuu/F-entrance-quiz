import React from 'react';
import './Group.css';

class Group extends React.Component {
  render = () => {
    return (
      <div className="group">
        {/* // TODO feedback: 用section标签不符合语义 */}
        <section>1 组</section>
        {/* // TODO feedback: 列表用ul li更符合语义 */}
        <div className="group-list">
          <div>1.成吉思汗</div>
        </div>
      </div>
    );
  };
}

export default Group;
