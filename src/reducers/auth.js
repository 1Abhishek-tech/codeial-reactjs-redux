import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isLoggedin: true,
        user: action.user,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: true,
        error: action.error,
      };

    default:
      return state;
  }
}
