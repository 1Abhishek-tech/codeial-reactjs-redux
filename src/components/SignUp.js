/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signup, signupStart, clearAuthState } from '../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    console.log(value);
    this.setState({
      [field]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { Name, email, password, confirmPassword } = this.state;
    if (Name && email && password === confirmPassword) {
      this.props.dispatch(signupStart());
      this.props.dispatch(signup(Name, email, password, confirmPassword));
    }
  };
  render() {
    const { inProgress, error, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">SignUp</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => this.handleInputChange('Name', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => this.handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleInputChange('password', e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
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
