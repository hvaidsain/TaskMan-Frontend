import React, { Component } from "react";
import { getAllUsers } from "../actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers());
  }
  renderUsers(users) {
    const endUsers = users.filter(item => {
      return item.isAdmin == false;
    });
    return endUsers.map(item => (
      <tr key={item._id}>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{item.email}</td>
        <td className="text-center">{item.teamId.name}</td>

        {/* <td className="text-center">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-warning">Delete</button>
          </div>
        </td> */}
      </tr>
    ));
  }

  render() {
    const users = this.props.users;
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">USERS</h3>
          <hr />

          <br />
          <div>
            <table className="table table-bordered " responsive="md">
              <thead>
                <tr>
                  <th className="text-center">User Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Team Name</th>

                  {/* <th className="text-center">Perform Actions</th> */}

                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>{this.renderUsers(users)}</tbody>
            </table>

            <div className="row justify-content-center">
              <div className="col-sm-2">
                <Link
                  to="/users/new"
                  className="btn btn-primary"
                  style={{ position: "relative", marginLeft: 50 }}
                >
                  Add User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Users);
