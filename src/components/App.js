import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Navbar, Page404, Login, SignUp } from '.';
import * as jwtDecode from 'jwt-token';
import { authenticateUser } from '../actions/auth';

export const Logout = () => {
  return <div>Logout</div>;
};
// export const Home = (props) => {
//   console.log('props ', props);
//   return <div>Home</div>;
// };

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          name: user.name,
          _id: user._id,
          email: user.email,
        })
      );
    }
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={this.props.posts} /> */}
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route exact path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignUp} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProp(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProp)(App);
