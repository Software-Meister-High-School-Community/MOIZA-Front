import { IFindIdResultProps } from "../../../../interface/FindAuthData/FindAuthData.type";
import * as FIR from "./FindIdResult.style";

const FindIdResult: React.FC<IFindIdResultProps> = ({ name, resultId }) => {
  return (
    <>
      <FIR.FindIdResultTextWrap>
        <FIR.FindIdResultGuideText>
          <strong>{name}</strong> 님의 정보와 일치하는 아이디입니다.
        </FIR.FindIdResultGuideText>
        <FIR.FindIdResultIdText>{resultId}</FIR.FindIdResultIdText>
      </FIR.FindIdResultTextWrap>
    </>
  );
};

export default FindIdResult;
