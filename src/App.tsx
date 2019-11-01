import React from 'react';
import {History} from 'history';
import './App.css';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import { Route } from 'react-router';
import services from './services'


interface IAppProps{
  history: History
}
class App extends React.Component<IAppProps>{


  public state={
    loading:true,
  }

  public componentDidMount(){

    const {auth} = services
    auth.onAuthStateChanged(user => {
      if(user){
        if(location.pathname){
          if(['/', '/register'].indexOf(location.pathname)> -1){
              const {history} = this.props
              history.push('/app/routexampleapp')
          }
        }else{
          if(/\app\/./.test(location.pathname)){
            const {history} = this.props
            history.push('/')
          }
        }
      }
      this.setState({
        loading:false
      })
    })
  }

  public render(){

    const { loading} = this.state

  return (
    loading ? 'loading' : <div>
      <Route exact={true} path='/' component={Login}/>
      <Route exact={true} path='/login' component={Login}/>
      <Route exact={true} path='/register' component={Register}/>
    </div>
  );
}
}

export default App;
