import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }
  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    const user = this.props.auth;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.\svg"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        {this.state.editMode ? (
          <input
            value={this.state.name}
            onChange={(e) => this.handleChange('name', e.target.value)}
          />
        ) : (
          <div className="field">
            <div className="field-label">Name</div>
            <div className="field-value">{user.name}</div>
          </div>
        )}
        {this.state.editMode && (
          <div className="field">
            <div className="field-label">New Password </div>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.handleChange('password', e.target.value)}
            />
          </div>
        )}
        {this.state.editMode && (
          <div className="field">
            <div className="field-label"> Confirm Password </div>
            <input
              type="password"
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
            />
          </div>
        )}
        <div className="btn-group">
          {this.state.editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn">Edit Profile</button>
          )}
        </div>
        {this.state.editMode && <div className="go-back">Go Back </div>}
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
