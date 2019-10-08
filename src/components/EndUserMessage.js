import React, { Component } from "react";
import { getMessageApi } from "../api/message";
import { getUser } from "../api/storage";
import { Link } from "react-router-dom";

export default class EndUserMessage extends Component {
  state = {
    messages: [],
    user: ""
  };
  componentDidMount() {
    console.log("component did mount called");
    const user = getUser();

    this.setState({
      user: user
    });

    const id = user.teamId; //sending teamId to get the messages teamId->projectId
    this.getMessages(id);
  }

  async getMessages(id) {
    try {
      const messages = await getMessageApi(id);
      this.setState({
        messages: messages
      });
    } catch (e) {
      console.log("Get tasks failed.");
      console.log("Error:", e);
    }
  }

  render() {
    let messages = null;
    let projectId = "";
    let filteredMessages = [];
    console.log("state", this.state);
    if (this.state.messages.length > 0) {
      projectId = this.state.messages[0].projectId;
      filteredMessages = this.state.messages.filter(item => {
        return item.userId._id != this.state.user._id;
      });
    }
    console.log("filtered array", filteredMessages);
    if (this.state.messages.length > 0) {
      messages = filteredMessages.map(item => (
        <div className="card-group mb-3 w-25 p-3">
          <div className="card text-white bg-info ">
            <div className="card-header">
              Received on : {new Date(item.createdAt).toLocaleDateString()}
            </div>
            <div className="card-body">
              <h6 className="card-title">{item.message}</h6>
              {/* <p className="card-text"></p> */}
            </div>
            <div class="card-footer">Sent From : {item.userId.name} </div>
          </div>
        </div>
      ));
    }

    return (
      <React.Fragment>
        {messages}

        <div
          className="col-sm-1.5"
          style={{ position: "relative", marginLeft: 30 }}
        >
          <Link to={`/message/new/${projectId}`} className="btn btn-primary">
            Add Message
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
