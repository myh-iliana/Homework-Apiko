import React from 'react';
import PropTypes from 'prop-types';

import withData from './with-data';

import PostList from './post-list';

const App = ({ data }) => {
  return (
      <div style={{marginTop: '3rem'}}>
        <PostList posts={ data } />
      </div>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withData(App, 'https://jsonplaceholder.typicode.com/posts');