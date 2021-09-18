/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, signupStart } from '../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleFirstNameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      lastName: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  handleConfirmPasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      this.state;
    if (firstName && lastName && email && password === confirmPassword) {
      this.props.dispatch(signupStart());
      this.props.dispatch(signup(firstName, lastName, email, password));
    }
  };
  render() {
    const { inProgress, error } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">SignUp</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="fname"
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="lname"
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            required
          />
        </div>

        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmailChange}
            required
          />
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Signing Up
            </button>
          ) : (
            <button onClick={this.handleFormSubmit}>SignUp</button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProp = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProp)(SignUp);
