import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTeams } from "../actions/team";

class Team extends Component {
  componentDidMount() {
    this.props.dispatch(getTeams());
  }
  renderTeams(teams) {
    return teams.map(item => (
      <tr key={item._id}>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{item.workspace.name}</td>
        {/* <td className="text-center">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-warning">Delete</button>
          </div>
        </td> */}
      </tr>
    ));
  }
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Teams</h3>
          <hr />

          <br />
          <div>
            <table className="table table-bordered " responsive="md">
              <thead>
                <tr>
                  <th className="text-center">Team Name</th>
                  <th className="text-center">Workspace Name</th>
                  {/* <th className="text-center">Perform Actions</th> */}

                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>{this.renderTeams(this.props.teams)}</tbody>
            </table>

            <div className="row justify-content-center">
              <div className="col-sm-2">
                <Link to="/teams/new" className="btn btn-primary">
                  Add New Team
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
    teams: state.teams
  };
}

export default connect(mapStateToProps)(Team);
