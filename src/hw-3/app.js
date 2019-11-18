import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './nav-bar';
import HomePage from './home-page';
import ShopPage from './shop-page';
import ReviewsPage from './reviews-page';
import ReviewPage from './review-page';

const App = () => {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/reviews' component={ReviewsPage} />
          <Route exact path='/review/:reviewId' component={ReviewPage} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </Router>
  );
};

export default App;