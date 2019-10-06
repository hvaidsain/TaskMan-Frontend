import React, { Component } from "react";
import { getAllUsers } from "../actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers());
  }
  renderUsers() {}
  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Users);
