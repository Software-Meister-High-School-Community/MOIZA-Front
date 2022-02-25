import { IEyeButtonProps } from "../../../../interface/Common/Common.type";
import { EyeButtonBox, EyeButtonImg } from "./EyeButton.style";
import closeEye from "../../../../assets/img/common/closeEye.svg";
import openEye from "../../../../assets/img/common/openEye.svg";

const EyeButton: React.FC<IEyeButtonProps> = ({ isShow, onClick, left }) => {
  return (
    <EyeButtonBox
      onClick={() => (onClick ? onClick(!isShow) : null)}
      left={left}
    >
      <EyeButtonImg src={isShow ? closeEye : openEye} />
    </EyeButtonBox>
  );
};

export default EyeButton;
