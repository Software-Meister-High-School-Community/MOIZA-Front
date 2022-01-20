import { useState } from "react";
import { useRecoilState } from "recoil";
import { findPwResetData } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FIF from "../FindPwForm.style";
import EyeButton from "../../../Common/Button/EyeButton";

const FindPwReset: React.FC = () => {
  const [resetData, setResetData] = useRecoilState(findPwResetData);
  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const { pw, checkPw } = resetData;
  return (
    <>
      <FIF.FindPwFormTitle>비밀번호 재설정</FIF.FindPwFormTitle>
      <FIF.FindPwFormInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={pw !== ""}
            name="pw"
            placeholder="새 비밀번호"
            value={pw}
            onChange={(e) =>
              setResetData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type={isPwShow ? "text" : "password"}
          />
          <EyeButton isShow={isPwShow} onClick={setIsPwShow} />
        </FIF.FindPwFormTextInputWrap>
        <FIF.FindPwFormGuideText>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </FIF.FindPwFormGuideText>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={checkPw !== ""}
            name="checkPw"
            placeholder="새 비밀번호 확인"
            value={checkPw}
            onChange={(e) =>
              setResetData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type={isCheckPwShow ? "text" : "password"}
          />
          <EyeButton isShow={isCheckPwShow} onClick={setIsCheckPwShow} />
        </FIF.FindPwFormTextInputWrap>
      </FIF.FindPwFormInputWrap>
    </>
  );
};

export default FindPwReset;
