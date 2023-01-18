import React from "react";
import './Header.sass';
import Nav from '../nav/nav';

const Header = () => {

  function handleClick(){

    const mainMenu = document.querySelector(".main-menu");
    const navToggleLabel = document.querySelector(".nav-toggle-label");
    const body =  document.getElementsByTagName("body")[0];

    mainMenu.classList.toggle("active");
    navToggleLabel.classList.toggle("active");
    body.style.overflow = 'hidden'

    if(navToggleLabel.classList.contains('active') === false){
      body.style.overflow = 'visible'
    }

       mainMenu.addEventListener("click", (event) => {
       if(event.target){
            mainMenu.classList.remove("active");
            navToggleLabel.classList.remove("active");
            body.style.overflow = 'visible'
        }
  });

 
}


    return (
      <div className="container">
        <header className="header">
          <img src="images/west-coast-choppers-2.svg" alt="logo" className="logo" />
          <label onClick={handleClick} className="nav-toggle-label" for="nav-toggle" >
	          <span className="burger__line burger__line--one"></span>
            <span className="burger__line burger__line--two"></span>
            <span className="burger__line burger__line--tree"></span>
          </label>
          <Nav/>
        </header>
      </div>
     

    );
  }
  
  export default Header;