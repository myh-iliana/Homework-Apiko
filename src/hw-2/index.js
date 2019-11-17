import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*------Input--------*/

const Input = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  useEffect(() => onSearch(text));

  return (
      <div className='input-group input-group-lg fixed-top'>
        <input className='form-control' type='text' placeholder='Search' value={text}
               onChange={ handleChange }
        />
      </div>
  );
};

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
  const [ search, setSearch ] = useState('');

  const handleLoadMore = inc => {
    setLimit(prev => prev + inc);
  };

  const handleSearch = text => {
    setSearch(text);
  };

  const regexp = new RegExp(search, 'ig');

  const filterPosts = posts.filter(post => (post.title.search(regexp) || post.body.search(regexp)) !== -1);

  return (
      <Fragment>
        <Input onSearch={ handleSearch } />
        <ul className='list-group'>
          {
            filterPosts.map((post, i) => {
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

        { filterPosts.length >= limit
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

/*------Error--------*/

const Error = () => {
  return (
      <h3 className="text-center">Error!</h3>
  );
};

/*------App--------*/

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