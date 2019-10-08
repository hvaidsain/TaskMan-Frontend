import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTaskApi } from "../api/task";
import { getUsersOfTeam } from "../api/user";

class TaskForm extends Component {
  state = {
    name: "",
    priority: 1,
    projectId: "",
    startTime: "",
    endTime: "",
    userId: "",
    teamMembers: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.getTeamMembers(id);
    // this.setState({
    //   projectId: id
    // });
  }
  async getTeamMembers(id) {
    try {
      const teamMembers = await getUsersOfTeam(id);
      this.setState({ teamMembers: teamMembers, projectId: id });
    } catch (e) {
      console.log("Get team-members failed.");
      console.log("Error:", e);
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const task = {
      name: this.state.name,
      priority: this.state.priority,
      projectId: this.state.projectId,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      userId: this.state.userId
    };
    await addTaskApi(task);
    this.props.history.push(`/projects/${this.state.projectId}`);
  };

  render() {
    console.log(this.state);
    const { name, priority, startTime, endTime, userId } = this.state;
    console.log(this.props.users);

    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add Task</h3>
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
                    placeholder="Enter Task name"
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
                  <label htmlFor="name">StartTime</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startTime"
                    name="startTime"
                    // placeholder="YYYY-MM-DD"
                    value={startTime}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">EndTime</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    // placeholder="YYYY-MM-DD"
                    value={endTime}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Users</label>
                  <select
                    className="form-control"
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={this.handleChange}
                  >
                    <option value="">- Select -</option>
                    {this.state.teamMembers.map(item => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <Link
                  className="btn btn-warning"
                  to={`/projects/${this.state.projectId}`}
                >
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
    users: state.users
  };
}

export default connect(mapStateToProps)(TaskForm);
