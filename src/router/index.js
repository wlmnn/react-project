import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Single from '../component/Single';
import Food from '../component/Food';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Food}/>
    </div>
  </Router>
)
export default App