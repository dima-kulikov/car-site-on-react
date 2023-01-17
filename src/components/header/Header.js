import React from "react";
import './Header.sass';

const Header = () => {
    return (
      <div className="container">
        <header className="header">
          <img src="images/west-coast-choppers-2.svg" alt="logo" className="logo" />
          <nav className="menu"></nav>
          <img src="images/burger_icon.svg" alt="burger_icon" className="menu" />
        </header>
      </div>
      
    );
  }
  
  export default Header;