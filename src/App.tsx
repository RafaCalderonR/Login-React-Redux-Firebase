import React from 'react';

import './App.css';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import { Route } from 'react-router';
import services from './services'

class App extends React.Component {


  public state={
    loading:true,
  }

  public componentDidMount(){

    const {auth} = services
    auth.onAuthStateChanged(user => {
      this.setState({
        loading:false
      })
    })
  }

  public render(){

    const { loading} = this.state

  return (
    loading = 'loading' : <div>
      <Route exact={true} path='/' component={Login}/>
      <Route exact={true} path='/login' component={Login}/>
      <Route exact={true} path='/register' component={Register}/>
    </div>
  );
}
}

export default App;
