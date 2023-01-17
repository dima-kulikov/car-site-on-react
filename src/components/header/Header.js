import React from "react";
import './Header.sass';
import Nav from './nav/nav';

const Header = () => {
    return (
      <div className="container">
        <header className="header">
          <img src="images/west-coast-choppers-2.svg" alt="logo" className="logo" />
          <Nav/>
          <img src="images/burger_icon.svg" alt="burger_icon" className="menu" />
        </header>
      </div>
      
    );
  }
  
  export default Header;