import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <a href="#" className="brand-logo right">
            TASKMAN
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/admindashboard">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <a href="collapsible.html">Teams</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
