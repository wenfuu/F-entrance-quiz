import React from 'react';
import './Header.css';

class Header extends React.Component {
  render = () => {
    return (
      <header className="app-header">
        <h2>分组列表</h2>
        <button type="button">分组学员</button>
      </header>
    );
  };
}

export default Header;
