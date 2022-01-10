import { useEffect } from "react";
import { IFindIdResultProps } from "../../../../interface/FindAuthData/FindAuthData.type";
import {
  FindIdResultGuideText,
  FindIdResultIdText,
  FindIdResultTextWrap,
} from "./FindIdResult.style";

const FindIdResult: React.FC<IFindIdResultProps> = ({ name, resultId }) => {
  return (
    <>
      <FindIdResultTextWrap>
        <FindIdResultGuideText>
          <strong>{name}</strong> 님의 정보와 일치하는 아이디입니다.
        </FindIdResultGuideText>
        <FindIdResultIdText>{resultId}</FindIdResultIdText>
      </FindIdResultTextWrap>
    </>
  );
};

export default FindIdResult;
