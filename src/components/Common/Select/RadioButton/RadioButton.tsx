import React, { useState } from "react";
import { IRadioButtonProps } from "../../../../interface/Common/Common.type";
import { RadioButtonBox, RadioButtonRect, Wrapper } from "./RadioButton.style";

const RadioButton: React.FC<IRadioButtonProps> = ({
  name,
  radioArray,
  setSelected,
  selected,
}) => {
  return (
    <>
      {radioArray.map((item) => (
        <Wrapper>
          <RadioButtonRect onClick={() => setSelected(item.id)}>
            <RadioButtonBox
              type="radio"
              name={name}
              checked={selected === item.id}
              key={item.id}
            />
          </RadioButtonRect>
          <p>{item.summary}</p>
        </Wrapper>
      ))}
    </>
  );
};

export default RadioButton;
