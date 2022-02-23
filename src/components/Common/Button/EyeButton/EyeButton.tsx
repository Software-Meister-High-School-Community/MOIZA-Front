import { IEyeButtonProps } from "../../../../interface/Common/Common.type";
import { EyeButtonBox, EyeButtonImg } from "./EyeButton.style";
import * as Imgs from "../../../../assets/img/index";

const EyeButton: React.FC<IEyeButtonProps> = ({ isShow, onClick, left }) => {
  return (
    <EyeButtonBox
      onClick={() => (onClick ? onClick(!isShow) : null)}
      left={left}
    >
      <EyeButtonImg
        src={isShow ? Imgs.LoginPasswordNoShowImg : Imgs.LoginPasswordShowImg}
      />
    </EyeButtonBox>
  );
};

export default EyeButton;
