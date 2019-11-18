import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({ onLoadMorePosts }) => {
  const LOAD = 10;

  return (
      <button className='btn btn-dark btn-lg btn-block' onClick={ () => onLoadMorePosts(LOAD) }>More</button>
  );
};

MoreButton.propTypes = {
  onLoadMorePosts: PropTypes.func.isRequired
};

export default MoreButton;