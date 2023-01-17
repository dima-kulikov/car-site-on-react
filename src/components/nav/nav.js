import React from "react";
import { Link } from "react-router-dom";
import './nav.sass'

const Nav = () => {
    return(
        <nav className="menu">
            <Link to='/'>Головна</Link>
            <Link to='/shop'>Магазин</Link>
            <Link to='/products'>Продукти</Link>
            <Link to='/about'>О нас</Link>
            <Link to='/contacts'>Контакти</Link>
        </nav>        
    )
}

export default Nav;