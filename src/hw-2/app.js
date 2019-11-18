import React, { useState, useEffect } from 'react';

import Loader from './loader';
import Error from './error';
import PostList from './post-list';

const App = () => {
  const [app, setApp] = useState({
    posts: [],
    loading: false,
    error: false
  });

  const { loading, posts, error } = app;

  const fetchData = () => {
    setApp({ posts: [], loading: true, error: false });
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => setApp({ loading: false, posts: data, error: false }))
        .catch(err => {
          setApp({ loading: false, posts: [], error: true });
          console.log(err)
        });
  };

  useEffect(fetchData, []);

  return (
      <div style={{marginTop: '3rem'}}>
        { loading ? <Loader /> : null }
        { error ? <Error /> : null }
        { posts.length > 0 ? <PostList posts={ posts } /> : null }
      </div>
  );
};

export default App;