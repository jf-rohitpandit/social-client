import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Social
        </a>
        <div className="m-auto">
          <ul className="navbar-nav ">
            <li className="nav-item mx-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item mx-5">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item mx-5">
              <NavLink to="/people">People</NavLink>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary">Log Out</button>
      </div>
    </nav>
  )
}

export default Navbar
