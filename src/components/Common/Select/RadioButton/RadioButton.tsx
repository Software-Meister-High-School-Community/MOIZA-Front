import React, { useState } from "react";
import { IRadioButtonProps } from "../../../../interface/Common/Common.type";
import {
  RadioButtonBox,
  RadioButtonRect,
  Wrapper,
  Radios,
} from "./RadioButton.style";

const RadioButton: React.FC<IRadioButtonProps> = ({
  name,
  radioArray,
  setSelected,
  selected,
}) => {
  return (
    <Radios className="radios">
      {radioArray.map((item) => (
        <Wrapper>
          <RadioButtonRect>
            <RadioButtonBox
              onChange={() => setSelected(item.id)}
              type="radio"
              name={name}
              checked={selected === item.id}
              key={item.id}
            />
          </RadioButtonRect>
          <p>{item.summary}</p>
        </Wrapper>
      ))}
    </Radios>
  );
};

export default RadioButton;
