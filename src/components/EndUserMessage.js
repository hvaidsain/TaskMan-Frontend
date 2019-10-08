import React, { Component } from "react";
import { getMessageApi } from "../api/message";
import { getUser } from "../api/storage";
import Item from "antd/lib/list/Item";

export default class EndUserMessage extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    console.log("component did mount called");
    const user = getUser();

    const id = user.teamId;
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

    if (this.state.messages.length > 0) {
      messages = this.state.messages.map(item => (
        <div class="card text-white bg-secondary mb-3 w-25 p-3">
          <div class="card-header">
            Received on : {new Date(item.createdAt).toLocaleDateString()}
          </div>
          <div class="card-body">
            <h6 class="card-title">Message</h6>
            <p class="card-text">{item.message}</p>
          </div>
        </div>
      ));
    }

    return <React.Fragment>{messages}</React.Fragment>;
  }
}
