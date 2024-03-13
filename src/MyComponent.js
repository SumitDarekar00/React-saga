// MyComponent.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';


const MyComponent = ({ posts, loading, error, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts })(MyComponent);
