import React from "react";
import "./TextInput.scss";

interface Props {
  onChange(value: string): void;
  value: string;
}
export const TextInput = ({ value, onChange }: Props) => {
  return (
    <input
      className="text-input"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={`"[[1,2,3,..9],[2,3,...],...]"`}
    />
  );
};
