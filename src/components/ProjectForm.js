import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProjectApi } from "../api/project";

class ProjectForm extends Component {
  state = {
    name: "",
    priority: 1,
    teamId: "",
    workspace: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const project = { ...this.state };
    await addProjectApi(project);
    this.props.history.push(`/projects`);
  };

  render() {
    const { name, priority, teamId, workspace } = this.state;
    console.log(this.state);
    console.log(this.props);
    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add Project</h3>
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
                    placeholder="Enter Project name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Priority</label>
                  <input
                    type="number"
                    className="form-control"
                    id="priority"
                    name="priority"
                    placeholder="Priority (1-10)"
                    value={priority}
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
                <Link className="btn btn-warning" to={`/projects`}>
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
    workspaces: state.workspaces,
    teams: state.teams
  };
}

export default connect(mapStateToProps)(ProjectForm);
