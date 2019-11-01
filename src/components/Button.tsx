import * as React from "react";
import IButtonProps from "../models/components.interface";
import { style } from "../assets/styles/components/button.style";

export default class Button extends React.Component<IButtonProps> {
  public render() {
    const { block = false } = this.props;
    return <button {...this.props} style={style(block)} />;
  }
}
