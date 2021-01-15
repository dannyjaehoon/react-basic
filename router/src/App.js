import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import PostItem from './components/postitem'
import Header from './components/header'

function App() {
  return (
    <BrowserRouter>
          <Header/>
        <div className="container">
          <Switch>
            <Redirect from="profile" to="/"></Redirect>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" exact component={Home}/>
            <Route render={() => {
              <div>Page not found</div>
            }}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
