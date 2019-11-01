import * as React from 'react';
import Card from '../../components/Card'
import Container from '../../components/Container';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';







class App extends React.Component{
    public render(){
        return(
    <Container>
    <Card>
    <Title>Iniciar Sesion</Title>
    <LoginForm/>
    </Card>
    </Container>
        );
    }
}

export default App;