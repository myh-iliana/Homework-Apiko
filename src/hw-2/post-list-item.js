import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({ post: { id, title, body } }) => {
  return (
      <Fragment>
        <h3 className=''>{ id }. { title }</h3>
        <p className='lead'>{ body }</p>
      </Fragment>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListItem;