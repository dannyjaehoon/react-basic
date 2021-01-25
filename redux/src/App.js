import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Movie from './components/movie';

// need to install redux, axios, react-redux
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/movie' component={ Movie }/>
          <Route path='/' component={ Home }/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


