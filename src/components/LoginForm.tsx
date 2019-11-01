import * as React from "react";
import Input from "./Input";
import Button from "./Button";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import Center from "./Center";
import { Link } from "react-router-dom";

class LoginForm extends React.Component<InjectedFormProps> {
    public render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field placeholder='Email' name='email' type='email' component={Input} />
                <Field placeholder='Pasword' name='password' type='password' component={Input}/>
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
