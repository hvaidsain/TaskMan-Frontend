import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjects } from "../actions/project";
import { Link } from "react-router-dom";

class Project extends Component {
  componentDidMount() {
    this.props.dispatch(getProjects());
  }

  renderProjects(projects) {
    return projects.map(item => (
      <tr key={item._id}>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{item.teamId.name}</td>
        <td className="text-center">{item.flag}</td>
        <td className="text-center">{item.priority}</td>
        <td className="text-center">
          <div className="btn-group btn-group-sm">
            <Link className="btn btn-primary" to={`/products/${item._id}/edit`}>
              Edit
            </Link>
            <button className="btn btn-warning">Delete</button>
          </div>
        </td>
      </tr>
    ));
  }

  render() {
    const projects = this.props.projects;
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Projects</h3>
          <hr />

          <br />
          <div>
            <table className="table table-bordered " responsive="md">
              <thead>
                <tr>
                  <th className="text-center">Project Name</th>
                  <th className="text-center">Team Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Priority</th>
                  <th className="text-center">Perform Actions</th>

                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>{this.renderProjects(projects)}</tbody>
            </table>

            <div className="row justify-content-center">
              <div className="col-sm-1.5">
                <Link to="/project/new" className="btn btn-primary">
                  Add New Project
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
    projects: state.projects,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Project);
