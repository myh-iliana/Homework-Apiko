import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './header';
import Body from './body';

import './styles.css';

const App = () => {
  return (
      <Router>
        <Header />

        <Route exact path='/' render={() => <Redirect to='/groups' />} />
        <Body />
      </Router>
  );
};

export default App;