import React from "react";
import { IRadioButtonProps } from "../../../../interface/Common/Common.type";
import { RadioButtonBox, RadioButtonRect } from "./RadioButton.style";

const RadioButton: React.FC<IRadioButtonProps> = ({ name,isSelected, onClick }) => {
  return (
      <RadioButtonRect>
        <RadioButtonBox
          type='radio'
          name={name}
        checked={isSelected}
      />
      </RadioButtonRect>
  );
};

export default RadioButton;
