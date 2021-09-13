import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log('posts', this.props);
    return <div>App</div>;
  }
}
function mapStateToProp(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProp)(App);
