import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">SignUp</span>
        <div className="field">
          <input type="fname" placeholder="First Name" required />
        </div>
        <div className="field">
          <input type="lname" placeholder="Last Name" required />
        </div>
        <div className="field">
          <input type="date" placeholder="Date of Birth" required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input
            type="number"
            placeholder="Contact Number"
            size="10"
            required
          />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="field">
          <button> SignUp</button>
        </div>
      </form>
    );
  }
}
