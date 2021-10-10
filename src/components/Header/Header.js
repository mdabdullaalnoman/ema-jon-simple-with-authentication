import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user , logout } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email && 
                    <NavLink to="/Login">{user.displayName}</NavLink>
                }
                {
                    user.email ?
                    <NavLink onClick={logout} to="/Login">Logout</NavLink>
                    :
                    <NavLink to="/Login">login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;