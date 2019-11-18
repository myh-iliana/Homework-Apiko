import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ReviewPage = () => {
  const history = useHistory();
  const { reviewId } = useParams();

  const parsedReviews = JSON.parse(localStorage.getItem('reviews'));
  const reviews = parsedReviews || [];
  const review = reviews.filter(review => reviewId === review.id);
  const { id, text } = review[0];

  const onBack = () => history.goBack();

  return (
      <Fragment>
        <h2>Review page</h2>
        <h5>{ id } - { text }</h5>
        <button onClick={ onBack }>Back</button>
      </Fragment>
  );
};

export default ReviewPage;