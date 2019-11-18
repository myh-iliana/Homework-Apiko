import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import Input from './input';

const ReviewsPage = () => {
  const parsedReviews = JSON.parse(localStorage.getItem('reviews'));
  const [reviews, setReviews ] = useState(parsedReviews || []);

  const addReview = text => setReviews(prev => [
      ...prev,
    {
      id: uuid(),
      text
    }
  ]);

  useEffect(() => {
    const stringifyReviews = JSON.stringify(reviews);
    localStorage.setItem('reviews', stringifyReviews);
  }, [reviews]);

  return (
      <div>
        <h2>Reviews page</h2>
        <Input addReview={ addReview } />
        <ul className='list-group d-flex'>
          {
            reviews.map(({ text, id }) => {
              const link = `/review/${id}`;
              return (
                  <Link to={ link } key={ id }>
                    <li className='list-group-item'>
                      { text }
                    </li>
                  </Link>
              )
            })
          }
        </ul>
      </div>
  );
};

export default ReviewsPage;