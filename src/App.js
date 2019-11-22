import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Nav} from './components/Nav/Nav';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Profile} from './pages/Profile';
import {Alert} from './components/Alert/Alert';
import {AlertState} from './context/alert/alertState';
import {GithubState} from './context/github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="container">
            <Nav />
          </div>
          <div className="container App pt-4">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>      
        </BrowserRouter>
      </AlertState>      
    </GithubState>
  );
}

export default App;
