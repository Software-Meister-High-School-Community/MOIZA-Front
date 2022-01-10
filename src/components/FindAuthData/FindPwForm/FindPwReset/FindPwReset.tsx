import { useState } from "react";
import { useRecoilState } from "recoil";
import { findPwResetData } from "../../../../store/FindAuthData/findCheckDataAtom";
import {
  FindPwFormGuideText,
  FindPwFormInputWrap,
  FindPwFormPasswordInputEyeButton,
  FindPwFormPasswordInputEyeImg,
  FindPwFormTextInput,
  FindPwFormTextInputWrap,
  FindPwFormTitle,
} from "../FindPwForm.style";
import * as Imgs from "../../../../assets/img";

const FindPwReset: React.FC = () => {
  const [resetData, setResetData] = useRecoilState(findPwResetData);
  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const { pw, checkPw } = resetData;
  return (
    <>
      <FindPwFormTitle>비밀번호 재설정</FindPwFormTitle>
      <FindPwFormInputWrap>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
          <FindPwFormPasswordInputEyeButton
            onClick={() => setIsPwShow(!isPwShow)}
          >
            <FindPwFormPasswordInputEyeImg
              src={
                isPwShow
                  ? Imgs.LoginPasswordNoShowImg
                  : Imgs.LoginPasswordShowImg
              }
            />
          </FindPwFormPasswordInputEyeButton>
        </FindPwFormTextInputWrap>
        <FindPwFormGuideText>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </FindPwFormGuideText>
        <FindPwFormTextInputWrap>
          <FindPwFormTextInput
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
          <FindPwFormPasswordInputEyeButton
            onClick={() => setIsCheckPwShow(!isCheckPwShow)}
          >
            <FindPwFormPasswordInputEyeImg
              src={
                isCheckPwShow
                  ? Imgs.LoginPasswordNoShowImg
                  : Imgs.LoginPasswordShowImg
              }
            />
          </FindPwFormPasswordInputEyeButton>
        </FindPwFormTextInputWrap>
      </FindPwFormInputWrap>
    </>
  );
};

export default FindPwReset;
