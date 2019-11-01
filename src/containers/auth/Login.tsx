import * as React from 'react';
import Card from '../../components/Card'
import Container from '../../components/Container';
import {connect} from 'react-redux'
import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';
import {ILogin,login as loginThunk} from '../../ducks/Users';


interface ILoginProps{
    login:(a:ILogin) => void
}
class Login extends React.Component<ILoginProps>{
    public render(){

        const {login} = this.props;

        return(
    <Container>
    <Card>
    <Title>Iniciar Sesion</Title>
    <LoginForm onSubmit={login}/>
    </Card>
    </Container>
        );
    }
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) =>({
    login: (payload: any) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);