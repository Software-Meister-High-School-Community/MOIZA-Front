import React from "react";
import { IRadioButtonProps } from "../../../../interface/Common/Common.type";
import { RadioButtonBox, RadioButtonRect } from "./RadioButton.style";

const RadioButton: React.FC<IRadioButtonProps> = ({ isSelected, onClick }) => {
  return (
    <RadioButtonBox
      checked={isSelected}
      onClick={() => (onClick ? onClick((prev) => !prev) : null)}
    >
      <RadioButtonRect />
    </RadioButtonBox>
  );
};

export default RadioButton;
