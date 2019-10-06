import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllWorkspace } from "../actions/workspace";
import { Link } from "react-router-dom";

class WorkSpace extends Component {
  state = {
    workspace: []
  };
  componentDidMount() {
    console.log("component did mount called");
    this.props.dispatch(getAllWorkspace());
  }

  render() {
    // console.log(this.props.workspaces);

    let displayWorkspace = null;

    if (this.props.workspaces.length > 0) {
      displayWorkspace = this.props.workspaces.map(item => (
        <div className="row justify-content-center " key={item._id}>
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <a href="#" className="btn sm btn-primary">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div>
        <div className="row justify-content-center">
          <h3 className="col-sm-1.5">WorkSpaces</h3>
        </div>
        {displayWorkspace}
        <div className="row justify-content-center">
          <div className="col-sm-1.5">
            <Link to="/workspace/new" className="btn btn-secondary">
              Add New workspace
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    workspaces: state.workspaces
  };
}

export default connect(mapStateToProps)(WorkSpace);
