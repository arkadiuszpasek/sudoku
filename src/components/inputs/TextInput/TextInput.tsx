import classNames from "classnames";
import React from "react";
import "./TextInput.scss";

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  onChange(value: string): void;
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  className,
}: Props) => {
  return (
    <input
      className={classNames("text-input", className)}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};
