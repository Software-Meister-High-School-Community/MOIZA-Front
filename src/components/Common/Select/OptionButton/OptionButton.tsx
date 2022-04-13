import { IOptionButtonProps } from "../../../../interface/Common/Common.type";
import {
  OptionButtonBox,
  OptionButtonBoxText,
  OptionButtonCheckRect,
} from "./OptionButton.style";
import checkIcon from "../../../../assets/img/common/check.svg";

const OptionButton: React.FC<IOptionButtonProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <OptionButtonBox
      isSelected={isSelected}
      onClick={() => (onClick ? onClick(text) : null)}
    >
      <OptionButtonBoxText>{text}</OptionButtonBoxText>
      <OptionButtonCheckRect isSelected={isSelected} src={checkIcon} />
    </OptionButtonBox>
  );
};

export default OptionButton;
