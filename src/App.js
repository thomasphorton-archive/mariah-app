import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import TripList from './components/TripList';
import Trip from './components/Trip';

import './App.css';

const App = () => (
  <div className="pure-g">
    <Sidebar/>
    <Main/>
  </div>
)

const Sidebar = () => (
  <div className="sidebar pure-u-1 pure-u-md-1-4">
    <div className="header">
      <h1 className="brand-title">Mariah</h1>
      <h2 className="brand-tagline">Connecting your vessel to the cloud</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to={{
              pathname: `/`
            }}
            className="pure-button">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={{
              pathname: `/trips`
            }}
            className="pure-button">Past Trips</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

const Main = () => (
  <main className="content pure-u-1 pure-u-md-3-4">
    <Switch>
      <Route exact path='/' component={TripList}/>
      <Route path='/trips' component={TripList}/>
      <Route path='/trip/:tripId' component={Trip} />
    </Switch>
  </main>
)

export default App;
