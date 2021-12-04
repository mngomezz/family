import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button id="loginBtn" disabled="disabled">
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
