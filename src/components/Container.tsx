import * as React from "react";
import IContainerProps from "../models/components.interface";
import { style } from "../assets/styles/components/container.style";

export default class Container extends React.Component<IContainerProps> {
  public render() {
    const { children, center = false } = this.props;

    return <div style={style(center)}>{children}</div>;
  }
}
