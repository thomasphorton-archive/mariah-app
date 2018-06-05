import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TripList from './components/TripList';
import Trip from './components/Trip';

import './App.css';

const App = () => (
  <div>
    <Main/>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={TripList}/>
      <Route path='/trip/:tripId' component={Trip} />
    </Switch>
  </main>
)

export default App;
