import { ADD_FRIEND, FETCH_FRIENDS_SUCCESS } from '../actions/actionTypes';

const initialFriendsState = [];

export default function friends(state = initialFriendsState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];
    case ADD_FRIEND:
      return state.concat(action.friend);
    default:
      return state;
  }
}
