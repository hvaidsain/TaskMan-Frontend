import React, { Component } from "react";
import { connect } from "react-redux";
import { getTaskByProjectApi } from "../api/task";

import { Link } from "react-router-dom";

class TaskList extends Component {
  state = {
    tasks: [],
    projectId: ""
  };

  componentDidMount() {
    console.log("mount called");
    const id = this.props.match.params.id;
    this.getTasks(id);
  }

  renderTasks(tasks) {
    let ongoingClass = "badge badge-warning sm-3";
    let completedClass = "badge badge-success sm-3";
    let pendingClass = "badge badge-danger sm-3";

    return tasks.map(item => (
      <tr key={item._id}>
        <td className="text-center">{item.projectId.name}</td>
        <td className="text-center">{item.name}</td>
        <td
          className={
            item.flag === "ongoing"
              ? ongoingClass
              : item.flag === "completed"
              ? completedClass
              : pendingClass
          }
        >
          {item.flag}
        </td>
        <td className="text-center">{item.priority}</td>
        <td className="text-center">
          {new Date(item.startTime).toLocaleDateString()}
        </td>
        <td className="text-center">
          {new Date(item.endTime).toLocaleDateString()}
        </td>
        <td className="text-center">{item.userId.name}</td>

        {/* <td className="text-center">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-warning">Delete</button>
          </div>
        </td> */}
      </tr>
    ));
  }

  async getTasks(id) {
    try {
      const tasks = await getTaskByProjectApi(id);
      this.setState({ tasks: tasks, projectId: id });
    } catch (e) {
      console.log("Get tasks failed.");
      console.log("Error:", e);
    }
  }
  render() {
    const tasks = this.state.tasks;
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Tasks</h3>
          <hr />

          <br />
          <div>
            <table className="table table-bordered " responsive="md">
              <thead>
                <tr>
                  <th className="text-center">Project Name</th>
                  <th className="text-center">Task Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Priority</th>
                  <th className="text-center">StartTime</th>

                  <th className="text-center">EndTime</th>
                  <th className="text-center">Assigned To</th>

                  {/* <th className="text-center">Perform Actions</th> */}

                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>{this.renderTasks(tasks)}</tbody>
            </table>

            <div className="row justify-content-center">
              <div className="col-sm-2">
                <Link
                  to={`/tasks/new/${this.state.projectId}`}
                  className="btn btn-primary"
                >
                  Add New Task
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

export default connect(mapStateToProps)(TaskList);
