import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/friends';
import { fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
    };
  }
  componentDidMount = () => {
    const { match } = this.props;
    if (match.params.userId) {
      //dispatch an action
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  };

  checkIfUserIsAFriend = () => {
    console.log('this.props', this.props);
    const { match, friends } = this.props;
    const userId = match.params.userId;
    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

  handleAddFriendClick = async () => {
    const userId = this.props.match.params.userId;
    const url = APIUrls.addFriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-ww-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()} `,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      this.setState({
        success: true,
      });
      this.props.dispatch(addFriend(data.data.friendship));
    } else {
      this.setState({ success: null, error: data.message });
    }
  };

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    console.log('this.props.match.params', params);
    const { user } = profile;
    if (profile.inProgress) {
      return <h1>Loading !!!</h1>;
    }
    const { success, error } = this.state;
    const isUserAFriend = this.checkIfUserIsAFriend();
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          {!isUserAFriend ? (
            <button
              className="button save-btn"
              onClick={this.handleAddFriendClick}
            >
              Add Friend
            </button>
          ) : (
            <button className="button save-btn">Remove Friend</button>
          )}
        </div>
        {success && (
          <div className="alert success-dialog">
            {user.name} Added Successfully{' '}
          </div>
        )}
        {error && <div className="alert error-dialog">{error}</div>}
      </div>
    );
  }
}
function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}

export default connect(mapStateToProps)(UserProfile);
