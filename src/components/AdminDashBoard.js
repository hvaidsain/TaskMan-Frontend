import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import WorkSpace from "./WorkSpace";

class AdminDashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkSpace />
      </React.Fragment>
    );
  }
}

export default AdminDashBoard;
