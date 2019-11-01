import * as React from 'react';
import Input from './Input';
import Button from './Button';
import {reduxForm} from 'redux-form';
import Center from './Center';
import {Link} from 'react-router-dom';

 class LoginForm extends React.Component{
    public render(){
 return(
    <form>
      <Input placeholder='Email' label='Email'/>
      <Input placeholder='Password' label='Password'/>
      <Button block={true}>hola</Button>
      <Center>
      <Link to='/register'>Iniciar Sesion</Link>
      </Center>
      </form>
 )
    }
}

export default ReduxForm({
    form:'login'
})(LoginForm)