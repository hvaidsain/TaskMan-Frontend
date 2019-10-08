import React, { Component } from "react";
import WorkSpace from "./WorkSpace";
import { getAllUsers } from "../actions/users";
import { getTeams } from "../actions/team";
import { connect } from "react-redux";

class AdminDashBoard extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers());
    this.props.dispatch(getTeams());
  }
  render() {
    return (
      <React.Fragment>
        <WorkSpace />
      </React.Fragment>
    );
  }
}

export default connect()(AdminDashBoard);
