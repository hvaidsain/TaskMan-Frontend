import React, { Component } from "react";
import { saveUserInfo } from "../api/storage";
import { loginUser } from "../actions/auth";
import { connect } from "react-redux";
import "./login.css";

// import { Form, Icon, Input, Button } from "antd";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const credentials = { ...this.state };

    await this.props.dispatch(loginUser(credentials)).then(done => {});

    if (this.props.auth.token) {
      this.props.history.push("/admindashboard");
    } else {
      alert("Incorrect email or Password");
      return;
    }

    saveUserInfo(this.props.auth);
  };

  render() {
    console.log(this.state);
    const { email, password } = this.state;

    return (
      <article className="mw6 loginBackground center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <h3>Login</h3>
        <hr />
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </article>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Login);
