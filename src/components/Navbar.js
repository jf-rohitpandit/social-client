import React from 'react';
import { NavLink, Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/people'>People</NavLink>
        </div>
    );
};

export default Navbar;
