import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { clearUserInfo } from "../api/storage";
import { getUser } from "../api/storage";

class Navbar extends Component {
  state = {
    user: getUser()
  };

  componentDidMount() {
    console.log("inNavbar", this.state);
  }

  handleLogout = () => {
    clearUserInfo();
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper black lighten-2">
          <a href="#" className="brand-logo right">
            TASKMAN
          </a>
          <NavLink
            to="/"
            className=" btn btn-primary mr-2"
            onClick={this.handleLogout}
          >
            Logout
          </NavLink>
          {this.state.user.isAdmin === true ? (
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <NavLink to="/admindashboard">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/teams">Teams</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          ) : (
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <NavLink to="/endusers/tasks">My Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/endusers/message">Messages</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
