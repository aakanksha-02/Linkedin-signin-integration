import React from 'react';
import './App.css';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinkedInPage from './LinkedInPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
