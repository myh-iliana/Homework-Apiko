import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import PostListItem from './post-list-item';
import MoreButton from './button';
import Input from './input';

const PostList = ({ posts, defaultLimit }) => {
  const [ limit, setLimit ] = useState(defaultLimit);
  const [ search, setSearch ] = useState('');

  const onLoadMorePosts = inc => {
    setLimit(prev => prev + inc);
  };

  const onSearch = text => {
    setSearch(text);
  };

  const regexp = new RegExp(search, 'ig');

  const filteredPosts = posts.filter(post => (post.title.search(regexp) || post.body.search(regexp)) !== -1);

  return (
      <Fragment>
        <Input onSearch={ onSearch } />
        <ul className='list-group'>
          {
            filteredPosts.map((post, i) => {
              if (i < limit) {
                return(
                    <li key={ post.id } className='list-group-item'>
                      <PostListItem post={ post } />
                    </li>
                );
              }
              return null;
            })

          }
        </ul>

        { filteredPosts.length >= limit
            ? <MoreButton onLoadMorePosts={ onLoadMorePosts } />
            : <h4 className="text-center">End</h4> }
      </Fragment>
  );
};


PostList.defaultProps = { defaultLimit: 10 };

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultLimit: PropTypes.number
};

export default PostList;