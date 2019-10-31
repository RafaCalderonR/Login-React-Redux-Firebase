import React from 'react';

import './App.css';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import { Route } from 'react-router';


class App extends React.Component {
  public render(){
  return (
    <div>
      <Route exact={true} path='/' component={Login}/>
      <Route exact={true} path='/login' component={Login}/>
      <Route exact={true} path='/register' component={Register}/>
    </div>
  );
}
}

export default App;
