import React from "react";
import { Link } from "react-router-dom";
import './nav.sass'

const Nav = () => {
      //==== Вариант на JS ===============
//   const navToggle = document.querySelector(".nav-toggle");
//   const mainMenu = document.querySelector(".main-menu");
//   const navToggleLabel = document.querySelector(".nav-toggle-label");
  
//   navToggle.addEventListener("click", () => {
//       mainMenu.classList.toggle("active");
//       navToggleLabel.classList.toggle("active");
//   });
  
//   mainMenu.addEventListener("click", (event) => {
//          if(event.target){
//             mainMenu.classList.remove("active");
//             navToggleLabel.classList.remove("active");
//         }
//   });

    return(
        <nav className="menu main-menu">
            <Link className="main-menu__link" to='/'>Головна</Link>
            <Link className="main-menu__link" to='/shop'>Магазин</Link>
            <Link className="main-menu__link" to='/products'>Продукти</Link>
            <Link className="main-menu__link" to='/about'>О нас</Link>
            <Link className="main-menu__link" to='/contacts'>Контакти</Link>
        </nav>        
    )
}

export default Nav;