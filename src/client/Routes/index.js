import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from '../Components/Homepage/Homepage';

const RootRouter = () => (
  <Router>
    <Route path="/" exact component={Homepage} />
  </Router>
);

export default RootRouter;
