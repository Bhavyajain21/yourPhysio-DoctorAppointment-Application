import React from 'react';
import './App.css';
import Main from './components/main';
import SetUp from './components/setup';
import { Switch } from 'react-router';
import { Route } from 'react-router';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <SetUp path="/setup" exact component={SetUp}/>  
        <Route path='/' component={Main}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
