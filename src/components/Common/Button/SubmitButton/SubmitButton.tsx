import React from "react";
import { ISubmitButtonProps } from "../../../../interface/Common/Common.type";
import { SubmitButtonBox } from "./SubmitButton.style";

const BlueButton: React.FC<ISubmitButtonProps> = ({
  big,
  text,
  handleClick,
  disable,
  yellow,
  blue,
}) => {
  return (
    <SubmitButtonBox
      big={big}
      disabled={disable}
      onClick={handleClick}
      yellow={yellow}
      blue={blue}
    >
      {text}
    </SubmitButtonBox>
  );
};

export default BlueButton;
