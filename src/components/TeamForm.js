import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTeamApi } from "../api/team";

class TeamForm extends Component {
  state = {
    name: "",
    workspace: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const team = { ...this.state };
    await addTeamApi(team);
    this.props.history.push(`/teams`);
  };

  render() {
    const { name, workspace } = this.state;
    console.log(name);
    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add Team</h3>
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
                    placeholder="Enter Team name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Workspace</label>
                  <select
                    className="form-control"
                    id="workspace"
                    name="workspace"
                    value={workspace}
                    onChange={this.handleChange}
                  >
                    <option value="">- Select -</option>
                    {this.props.workspaces.map(item => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <Link className="btn btn-warning" to={`/teams`}>
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
    workspaces: state.workspaces
  };
}

export default connect(mapStateToProps)(TeamForm);
