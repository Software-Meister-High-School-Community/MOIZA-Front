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
  setValue,
  left,
  isShow,
  onClick,
}) => {
  return (
    <TextInputWrap margin={margin}>
      <TextInputInput
        width={width}
        type={type === "text" ? "text" : isShow ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e)}
      />
      {type === "password" && (
        <EyeButton isShow={isShow} onClick={onClick} left={left} />
      )}
    </TextInputWrap>
  );
};

export default TextInput;
