import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;