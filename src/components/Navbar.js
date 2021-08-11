import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'

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
              <NavLink
                exact
                to="/"
                activeClassName="text-decoration-underline fw-bold"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-5">
              <NavLink
                to="/profile"
                activeClassName="text-decoration-underline fw-bold"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item mx-5">
              <NavLink
                to="/people"
                activeClassName="text-decoration-underline fw-bold"
              >
                People
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary">Log Out</button>
      </div>
    </nav>
  )
}

export default Navbar
