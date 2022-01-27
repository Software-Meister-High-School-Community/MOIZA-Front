import React from "react";
import { ISubmitButtonProps } from "../../../../interface/Common/Common.type";
import { SubmitButtonBox } from "./SubmitButton.style";

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  big,
  text,
  handleClick,
  disable,
  yellow,
  blue,
  name,
}) => {
  return (
    <SubmitButtonBox
      big={big}
      disabled={disable}
      onClick={handleClick}
      yellow={yellow}
      blue={blue}
      name={name}
    >
      {text}
    </SubmitButtonBox>
  );
};

export default SubmitButton;
