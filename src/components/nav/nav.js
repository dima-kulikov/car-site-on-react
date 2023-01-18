import React from "react";
import { Link } from "react-router-dom";
import './nav.sass'

const Nav = () => {


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