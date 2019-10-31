import * as React from 'react';
import Card from '../../components/Card'
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Center from '../../components/Center';
import {Link} from 'react-router-dom';


import {PersonIcon, LockAltIcon } from '../../assets/styles/icons/icons'



class App extends React.Component{
    public render(){
        return(
    <Container>
    <Card>
      <Title>Inicio Sesion</Title>
      <PersonIcon/>
      <LockAltIcon/>
      
      <Input placeholder='Email' label='Email'/>
      <Input placeholder='Password' label='Password'/>
      <Button block={true}>hola</Button>
      <Center>
      <Link to='/register'>Iniciar Sesion</Link>
      </Center>
      
    </Card>
    </Container>
        );
    }
}

export default App;