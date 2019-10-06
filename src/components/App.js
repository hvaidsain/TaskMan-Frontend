import React from "react";
import Login from "./Login";
import { Route, Switch, withRouter } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";
import Project from "./Project";
import Navbar from "../components/Navbar";
import WorkSpace from "../components/WorkSpace";
import ProjectForm from "./ProjectForm";
import WorkSpaceForm from "./WorkSpaceForm";
import Users from "./Users";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.pathname !== "/" ? <Navbar /> : ""}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admindashboard" exact component={AdminDashBoard} />
          <Route path="/projects" exact component={Project} />
          <Route path="/workspace" exact component={WorkSpace} />
          <Route path="/workspace/new" exact component={WorkSpaceForm} />
          <Route path="/project/new" exact component={ProjectForm} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
