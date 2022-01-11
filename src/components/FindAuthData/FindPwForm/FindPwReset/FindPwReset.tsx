import { useState } from "react";
import { useRecoilState } from "recoil";
import { findPwResetData } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FIF from "../FindPwForm.style";
import * as Imgs from "../../../../assets/img";

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
          <FIF.FindPwFormPasswordInputEyeButton
            onClick={() => setIsPwShow(!isPwShow)}
          >
            <FIF.FindPwFormPasswordInputEyeImg
              src={
                isPwShow
                  ? Imgs.LoginPasswordNoShowImg
                  : Imgs.LoginPasswordShowImg
              }
            />
          </FIF.FindPwFormPasswordInputEyeButton>
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
          <FIF.FindPwFormPasswordInputEyeButton
            onClick={() => setIsCheckPwShow(!isCheckPwShow)}
          >
            <FIF.FindPwFormPasswordInputEyeImg
              src={
                isCheckPwShow
                  ? Imgs.LoginPasswordNoShowImg
                  : Imgs.LoginPasswordShowImg
              }
            />
          </FIF.FindPwFormPasswordInputEyeButton>
        </FIF.FindPwFormTextInputWrap>
      </FIF.FindPwFormInputWrap>
    </>
  );
};

export default FindPwReset;
