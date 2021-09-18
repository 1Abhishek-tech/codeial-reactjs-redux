import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    console.log('this.state', this.state);
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
    if (this.props.isLoggedin) {
      alert('Login Successfully');
    }
  };
  render() {
    const { inProgress, error } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Login</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in ...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit}>Log In</button>
          )}
        </div>
      </form>
    );
  }
}
function mapStateToProp(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProp)(Login);
