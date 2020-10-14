import React from 'react';
import './Header.css';

class Header extends React.Component {
  render = () => {
    return (
      <header className="app-header">
        {/* // TODO feedback: 分组列表和分组学员button属于Group中的一部分，不适合单独拆成组件 */}
        <h2>分组列表</h2>
        <button type="button">分组学员</button>
      </header>
    );
  };
}

export default Header;
