import * as React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { connect } from "react-redux";
import Title from "../../components/Title";
import LoginForm from "../../components/LoginForm";
import { ILogin, login as loginThunk } from "../../ducks/Users";
import { ThunkDispatch } from "redux-thunk";

interface ILoginProps {
  login: (a: ILogin) => void;
}
class Login extends React.Component<ILoginProps> {
  public render() {
    const { login } = this.props;
    return (
      <Container center={true}>
        <Card>
          <Title>Iniciar Sesion</Title>
          <LoginForm onSubmit={login} />
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  login: (payload: any) => dispatch(loginThunk(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
