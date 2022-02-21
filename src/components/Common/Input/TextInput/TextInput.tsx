import React from "react";
import { ITextInputProps } from "../../../../interface/Common/Input/Input.type";
import EyeButton from "../../Button/EyeButton";
import { TextInputInput, TextInputWrap } from "./TextInput.style";

const TextInput: React.FC<ITextInputProps> = ({
  width,
  margin,
  type,
  value,
  name,
  placeholder,
  disabled,
  setValue,
  left,
  isShow,
  onClick,
}) => {
  return (
    <TextInputWrap margin={margin} width={width}>
      <TextInputInput
        type={type === "text" ? "text" : isShow ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e)}
        disabled={disabled}
      />
      {type === "password" && (
        <EyeButton isShow={isShow} onClick={onClick} left={left} />
      )}
    </TextInputWrap>
  );
};

export default React.memo(TextInput);
