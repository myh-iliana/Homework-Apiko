import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*------Post-List-Item--------*/

const PostListItem = ({ post: { id, title, body } }) => {
  return (
      <Fragment>
        <h3 className=''>{ id }. { title }</h3>
        <p className='lead'>{ body }</p>
      </Fragment>
  );
};

/*------Button--------*/

const MoreButton = ({ loadMorePosts }) => {
  const LOAD = 10;

  return (
      <button className='btn btn-dark btn-lg btn-block' onClick={ () => loadMorePosts(LOAD) }>More</button>
  );
};

/*------Post-List--------*/

const PostList = ({ posts, defaultLimit }) => {
  const [ limit, setLimit ] = useState(defaultLimit);

  const handleLoadMore = inc => {
    setLimit(prev => prev + inc);
  };

  return (
      <Fragment>
        <ul className='list-group'>
          {
            posts.map((post, i) => {
              if (i < (limit)) {
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

        { posts.length > limit
            ? <MoreButton loadMorePosts={ handleLoadMore } />
            : <h4 className="text-center">End</h4> }
      </Fragment>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  defaultLimit: PropTypes.number
};
PostList.defaultProps = { defaultLimit: 10 };

/*------Loader--------*/

const Loader = () => {
  return (
      <h3 className="text-center">Loading...</h3>
  );
};

/*------App--------*/

const App = () => {
  const [app, setApp] = useState({
    posts: [],
    loading: false
  });

  const { loading, posts } = app;

  const fetchData = () => {
    setApp({ posts: [], loading: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => setApp({ loading: false, posts: data }))
        .catch(err => console.log(err));
  };

  useEffect(fetchData, []);

  return (
      <Fragment>
        {
          loading ? <Loader /> : <PostList posts={ posts } />
        }
      </Fragment>
  );
};

export default App;