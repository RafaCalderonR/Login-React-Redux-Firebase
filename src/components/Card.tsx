import * as React from "react";
import { style } from "../assets/styles/components/card.style";

export default class Card extends React.Component {
  public render() {
    const { children } = this.props;

    return <div style={style}>{children}</div>;
  }
}
