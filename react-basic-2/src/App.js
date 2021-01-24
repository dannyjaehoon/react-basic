import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';
import Adjel from "./components/adjel";
import Profile from './components/profile';
import User from './components/user'
import TransitionComp from './components/transitionComp';
import CssTransition from './components/cssTransition';
import Tgroup from './components/tgroup';
import './style/style.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* <Route path='/user' component={ User }/>
          <Route path='/profile' component={ Profile }/>
          <Route path='/adjel' component={ Adjel }/>
          <Route path='/pureCompF' component={ PureCompF }/>
          <Route path='/pureComp' component={ PureComp }/> */}
          <Route path='/transition' component={ TransitionComp }/>
          <Route path='/csstransition' component={ CssTransition }/>
          <Route path='.tgroup' component={ Tgroup }/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


