import React, { Component } from "react";
import { addUserApi } from "../api/user";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    teamId: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const user = { ...this.state };
    await addUserApi(user);
    this.props.history.push(`/users`);
  };

  render() {
    const { name, email, password, teamId } = this.state;
    console.log(this.state);
    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add User</h3>
          <hr />
          <div className="card bg-light">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="example@yahoo.com"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Team</label>
                  <select
                    className="form-control"
                    id="teamId"
                    name="teamId"
                    value={teamId}
                    onChange={this.handleChange}
                  >
                    <option value="">- Select -</option>
                    {this.props.teams.map(item => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <Link className="btn btn-warning" to={`/users`}>
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps)(UserForm);
