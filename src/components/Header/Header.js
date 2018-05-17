import React from 'react';
import './header.css';

const Header = () => {
  //<div className="teal lighten-2">Simple Task List</div>*
  return (
    <div className="teal lighten-2 header">
      {/*<div className="nav-wrapper">*/}
        {/*<span className="brand-logo">Simple Task List</span>*/}
      {/*</div>*/}
      <p className="header-text">Simple Task List</p>
    </div>
  );
};

export default Header;
