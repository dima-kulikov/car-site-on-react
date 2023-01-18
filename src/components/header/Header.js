import React from "react";
import './Header.sass';
import Nav from '../nav/nav';

const Header = () => {



    return (
      <div className="container">
        <header className="header">
          <img src="images/west-coast-choppers-2.svg" alt="logo" className="logo" />



          <input  id="nav-toggle" className="nav-toggle" type="checkbox"/>
          <label className="nav-toggle-label" for="nav-toggle" >
	          <span className="burger__line burger__line--one"></span>
            <span className="burger__line burger__line--two"></span>
            <span className="burger__line burger__line--tree"></span>
          </label>
          <Nav/>
          {/* <img src="images/burger_icon.svg" alt="burger_icon" className="menu" />  */}
        </header>
      </div>
     

    );
  }
  
  export default Header;