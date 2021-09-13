import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList } from '.';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}
function mapStateToProp(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProp)(App);
