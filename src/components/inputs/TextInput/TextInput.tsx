import React from "react";
import "./TextInput.scss";

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  onChange(value: string): void;
}

export const TextInput = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      className="text-input"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};
