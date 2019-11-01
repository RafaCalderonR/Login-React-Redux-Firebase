import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import IInputProps from "../models/components.interface";
import { style } from "../assets/styles/components/input.style";

const Input: React.StatelessComponent<
  WrappedFieldProps & IInputProps
> = props => {
  const { label } = props;

  return (
    <div>
      <input {...props} style={style} />
    </div>
  );
};

export default Input;
