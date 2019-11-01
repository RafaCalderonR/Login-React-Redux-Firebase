import * as React from "react";
import Input from "./Input";
import Button from "./Button";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import Center from "./Center";
import { Link } from "react-router-dom";

class LoginForm extends React.Component<InjectedFormProps> {
  public render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          label='Correo'
          placeholder='Correo'
          name='email'
          type='email'
          component={Input}
        />
        <Field
          label='Correo'
          placeholder='Correo'
          name='password'
          type='password'
          component={Input}
        />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to='/register'>Ir al registro</Link>
        </Center>
      </form>
    );
  }
}

export default reduxForm({
  form: "login",
})(LoginForm);
