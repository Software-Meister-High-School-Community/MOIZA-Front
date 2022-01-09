import { IOptionButtonProps } from "../../../../interface/Common/Common.type";
import {
  OptionButtonBox,
  OptionButtonBoxText,
  OptionButtonCheckRect,
} from "./OptionButton.style";
import * as Imgs from "../../../../assets/img";

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
      <OptionButtonCheckRect
        isSelected={isSelected}
        src={Imgs.CommonOptionCheckImg}
      />
    </OptionButtonBox>
  );
};

export default OptionButton;
