import React from "react";
import "./DigitPicker.scss";

interface Props {
  onPicked(digit: number): void;
}
export const DigitPicker = ({ onPicked }: Props) => {
  const renderDigit = (digit: number) => {
    const handlePicked = () => {
      onPicked(digit);
    };
    return (
      <div className="digit-picker-btn" onClick={handlePicked}>
        {digit}
      </div>
    );
  };

  return (
    <div className="digit-picker">
      <div className="digit-picker-row">
        {renderDigit(1)}
        {renderDigit(2)}
        {renderDigit(3)}
      </div>
      <div className="digit-picker-row">
        {renderDigit(4)}
        {renderDigit(5)}
        {renderDigit(6)}
      </div>
      <div className="digit-picker-row">
        {renderDigit(7)}
        {renderDigit(8)}
        {renderDigit(9)}
      </div>
    </div>
  );
};
