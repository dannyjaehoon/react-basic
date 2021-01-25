import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

// need to install redux, axios, react-redux
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/' component={ Home }/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


