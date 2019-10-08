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
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Team from "./Team";
import TeamForm from "./TeamForm";
import UserForm from "./UserForm";
import EndUserDashBoard from "./EndUserDashBoard";
import WorkspaceProjects from "./WorkspaceProjects";
import EndUserMessage from "./EndUserMessage";
import MessageForm from "./MessageForm";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.location.pathname === "/endusers/task" ? <UserNav /> : ""} */}

        {this.props.location.pathname !== "/" ? <Navbar /> : ""}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admindashboard" exact component={AdminDashBoard} />
          <Route path="/projects" exact component={Project} />
          <Route path="/projects/:id" exact component={TaskList} />
          <Route path="/workspace" exact component={WorkSpace} />
          <Route path="/workspace/new" exact component={WorkSpaceForm} />
          <Route path="/project/new" exact component={ProjectForm} />
          <Route path="/users" exact component={Users} />
          <Route path="/tasks/new/:id" exact component={TaskForm} />
          <Route path="/teams" exact component={Team} />
          <Route path="/teams/new" exact component={TeamForm} />
          <Route path="/users/new" exact component={UserForm} />
          <Route path="/message/new/:id" exact component={MessageForm} />

          <Route path="/endusers/message" exact component={EndUserMessage} />

          <Route path="/endusers/tasks" exact component={EndUserDashBoard} />
          <Route
            path="/workspace/projects/:id"
            exact
            component={WorkspaceProjects}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
