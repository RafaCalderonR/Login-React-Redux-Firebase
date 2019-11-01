import * as React from "react";
import Input from "./Input";
import Button from "./Button";
import { reduxForm, InjectedFormProps } from "redux-form";
import Center from "./Center";
import { Link } from "react-router-dom";

class LoginForm extends React.Component<InjectedFormProps> {
    public render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Input placeholder='Email' label='Email' />
                <Input placeholder='Password' label='Password' />
                <Button block={true}>hola</Button>
                <Center>
                    <Link to='/register'>Iniciar Sesion</Link>
                </Center>
            </form>
        );
    }
}

export default reduxForm({
    form: "login",
})(LoginForm);
