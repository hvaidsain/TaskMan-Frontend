import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addMessageApi } from "../api/message";

export default class MessageForm extends Component {
  state = {
    message: "",
    id: ""
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({
      id: id
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const message = { message: this.state.message };
    console.log(message);

    const sentMesssage = await addMessageApi(message, this.state.id);

    alert(sentMesssage.message);
    this.props.history.push("/projects");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { message } = this.state;
    console.log(this.state);
    return (
      <article className="mw6  center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <div>
          <h3>Add Message</h3>
          <hr />
          <div className="card bg-light">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter Message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <Link className="btn btn-warning" to="/projects">
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
