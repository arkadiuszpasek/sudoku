import classNames from "classnames";
import React from "react";
import "./Button.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: Variant;
}
export const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <div className={classNames("button", variant)} {...rest}>
      {children}
    </div>
  );
};

type Variant = "button-normal" | "button-outlined";
