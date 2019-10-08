import React, { Component } from "react";
import { connect } from "react-redux";
import { getEndUserTasksApi, updateTaskApi } from "../api/user";
import { getUser } from "../api/storage";

class EndUserDashBoard extends Component {
  state = {
    userTasks: []
  };

  componentDidMount() {
    const user = getUser();
    console.log(user);
    this.getUserTasks(user._id);
  }

  async getUserTasks(id) {
    try {
      const userTasks = await getEndUserTasksApi(id);
      this.setState({ userTasks: userTasks });
    } catch (e) {
      console.log("Get tasks failed.");
      console.log("Error:", e);
    }
  }
  handleClick = async id => {
    const flag = { flag: "completed" };
    const update = await updateTaskApi(flag, id);

    const indexToUpdate = this.state.userTasks.findIndex(item => {
      return item._id == update._id;
    });

    const task = { ...this.state.userTasks[indexToUpdate] };
    task.flag = "completed";
    const tasks = [...this.state.userTasks];
    tasks[indexToUpdate] = task;

    this.setState({
      userTasks: tasks
    });

    // console.log(update);
  };

  renderTasks(tasks) {
    let ongoingClass = "badge badge-warning sm-3";
    let completedClass = "badge badge-success sm-3";
    let pendingClass = "badge badge-danger sm-3";

    return tasks.map(item => (
      <tr key={item._id}>
        {/* <td className="text-center">{item.projectId.name}</td> */}
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
        {/* <td className="text-center">{item.userId.name}</td> */}

        <td className="text-center">
          <div className="btn-group btn-group-sm">
            {item.flag != "completed" ? (
              <button
                className="btn btn-success"
                onClick={() => this.handleClick(item._id)}
              >
                Mark as complete
              </button>
            ) : (
              ""
            )}
          </div>
        </td>
      </tr>
    ));
  }

  render() {
    const tasks = this.state.userTasks;
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">My Tasks</h3>
          <hr />

          <br />
          <div>
            <table className="table table-bordered " responsive="md">
              <thead>
                <tr>
                  {/* <th className="text-center">Project Name</th> */}
                  <th className="text-center">Task Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Priority</th>
                  <th className="text-center">StartTime</th>

                  <th className="text-center">EndTime</th>
                  {/* <th className="text-center">Assigned To</th> */}

                  <th className="text-center">Perform Actions</th>
                </tr>
              </thead>
              <tbody>{this.renderTasks(tasks)}</tbody>
            </table>

            {/* <div className="row justify-content-center">
              <div className="col-sm-1.5">
                <Link
                  to={`/tasks/new/${this.state.projectId}`}
                  className="btn btn-primary"
                >
                  Add New Task
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(EndUserDashBoard);
