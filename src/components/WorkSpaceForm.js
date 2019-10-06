import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addWorkspaceApi } from "../api/workspace";
export default class WorkSpaceForm extends Component {
  state = {
    name: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const workspace = { ...this.state };
    console.log(workspace);

    await addWorkspaceApi(workspace);
    this.props.history.push("/workspace");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { name } = this.state;
    console.log(this.state);

    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add Workspace</h3>
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
                    placeholder="Enter Workspace name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <Link className="btn btn-warning" to="/workspace">
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
